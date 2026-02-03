const axios = require('axios')
const { currentCoursesId } = require('./currentCoursesId')

/**
 * Update contact courses by email
 * @param {string} contactId
 * @param {string[]} courses
 * @returns {Promise<void>}
 */
const updateContactCourses = async (contactId, courses) => {
  const response = await axios.put(
    `https://rest.gohighlevel.com/v1/contacts/${contactId}`,
    {
      customField: {
        [currentCoursesId]: courses,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GOHIGHLEVEL_API_TOKEN}`,
      },
    }
  )
}

module.exports = { updateContactCourses }
