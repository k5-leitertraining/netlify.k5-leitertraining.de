const { isRegistered } = require('../../etc/is-registered/index.js')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const handler = async function (event) {
  const { email, course } = event?.queryStringParameters || {}
  if (!email || !course) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({
        error: 'Missing email or course',
      }),
    }
  }
  try {
    const isAlreadyRegistered = await isRegistered({
      contactEmail: email,
      course,
    })
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        isAlreadyRegistered,
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

module.exports.handler = handler
