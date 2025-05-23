const { getRedirectUrl } = require('../../etc/reveal-plan/index.js')
const { withLogging } = require('../../utils/withLogging.js')

const handler = async function (event, context) {
  const { email, target } = event?.queryStringParameters || {}
  if (!email || !target) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Missing email or target',
      }),
    }
  }
  try {
    const url = await getRedirectUrl({ contactEmail: email, target })
    return {
      statusCode: 302,
      headers: {
        Location: url,
      },
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 302,
      headers: {
        Location: 'https://k5-leitertraining.de/error',
      },
    }
  }
}

module.exports.handler = withLogging(handler)
