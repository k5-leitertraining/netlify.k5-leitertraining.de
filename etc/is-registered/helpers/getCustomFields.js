const axios = require('axios')

/**
 * @typedef {Object} CustomField
 * @property {string} id - The id of the field
 * @property {string} name - The name of the field
 * @property {string} fieldKey - The key of the field
 * @property {string} placeholder - The placeholder of the field
 * @property {string} dataType - The data type of the field
 * @property {number} position - The position of the field
 * @property {string[]} [picklistOptions] - The picklist options of the field
 * @property {boolean} [isMultiFileAllowed] - Whether multiple files are allowed
 * @property {number} [maxFileLimit] - The maximum file limit
 */

let customFieldsPromise = null

/**
 * Get custom fields
 * @returns {Promise<CustomField[]>} A list of custom fields
 */
const getCustomFields = async () => {
  if (customFieldsPromise) {
    return customFieldsPromise
  }
  try {
    customFieldsPromise = axios
      .get(`https://rest.gohighlevel.com/v1/custom-fields/`, {
        headers: {
          Authorization: `Bearer ${process.env.GOHIGHLEVEL_API_TOKEN}`,
        },
      })
      .then((response) => response?.data?.customFields || [])
      .catch((error) => {
        console.error('Error getting custom fields', error)
        return []
      })
    return customFieldsPromise
  } catch (error) {
    return []
  }
}

module.exports = { getCustomFields }
