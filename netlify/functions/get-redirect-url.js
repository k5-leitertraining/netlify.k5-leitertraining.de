const { getRedirectUrl } = require('../../etc/get-redirect-url/index.js')
const { withLogging } = require('../../utils/withLogging.js')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const handler = async function (event) {
  const { email } = event?.queryStringParameters || {}
  if (!email) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({
        error: 'Missing email',
      }),
    }
  }
  try {
    const redirectUrl = await getRedirectUrl({
      contactEmail: email,
    })
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        redirectUrl,
      }),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify(error),
    }
  }
}

module.exports.handler = withLogging(handler)
