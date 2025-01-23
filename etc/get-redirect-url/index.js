const { isString } = require('lodash')
const { getContact } = require('./helpers/getContact')

const getRedirectUrl = async ({ contactEmail }) => {
  const contact = await getContact(contactEmail)

  if (!contact?.customField?.length) {
    return ''
  }

  const customField = contact.customField.find(
    (field) => field.id === 'iGzbikeXR3hYsVhyp7jg'
  )

  if (!customField) {
    return ''
  }

  if (!isString(customField.value)) {
    return ''
  }

  return customField.value
}

module.exports = { getRedirectUrl }
