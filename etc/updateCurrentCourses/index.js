const { getContact } = require('./helpers/getContact')
const { updateContactCourses } = require('./helpers/updateContactCourses')
const { currentCoursesId } = require('./helpers/currentCoursesId')

const updateCurrentCourses = async ({ contactEmail, courseToAdd }) => {
  let contact
  try {
    contact = await getContact(contactEmail)
  } catch (error) {
    throw new Error(`Could not get contact ${contactEmail}: ${error.message}`)
  }
  const { customField, id } = contact

  const currentCourses = customField.find(
    (field) => field.id === currentCoursesId
  )

  const existingCourses = Array.isArray(currentCourses?.value)
    ? currentCourses.value
    : []
  const uniqueCourses = [...new Set([...existingCourses, courseToAdd])]

  try {
    await updateContactCourses(id, uniqueCourses)
  } catch (error) {
    throw new Error(
      `Could not update contact (email: ${contactEmail}, id: ${id}): ${error.message}`
    )
  }
}

module.exports = { updateCurrentCourses }
