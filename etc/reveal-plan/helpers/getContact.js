const axios = require('axios')

/**
 * Get contact by email
 * @param {string} contactEmail
 * @returns {{
 *   id: string
 *   country: string
 *   source: string
 *   locationId: string
 *   lastNameLowerCase: string
 *   emailLowerCase: string
 *   firstName: string
 *   email: string
 *   address1: string
 *   fullNameLowerCase: string
 *   lastName: string
 *   firstNameLowerCase: string
 *   dateAdded: string
 *   companyName: string
 *   postalCode: string
 *   type: string
 *   city: string
 *   tags: string[]
 *   customField: {
 *     id: string
 *     value: number | string | string[]
 *   }[]
 * } | undefined} contact
 */
const getContact = async (contactEmail) => {
  // https://rest.gohighlevel.com/v1/contacts/lookup?email=john@deo.com&phone=+491971259866
  const response = await axios.get(
    `https://rest.gohighlevel.com/v1/contacts/lookup?email=${contactEmail}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GOHIGHLEVEL_API_TOKEN}`,
      },
    }
  )

  return response?.data?.contacts?.[0]
}

module.exports = { getContact }
