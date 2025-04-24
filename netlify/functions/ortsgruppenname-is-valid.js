const { z } = require('zod')
const axios = require('axios')
const { withLogging } = require('../../utils/withLogging')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const QueryParamSchema = z.object({
  groupName: z.string(),
  orgName: z.string(),
})

/**
 * @param {import('@netlify/functions').HandlerEvent} event - The event object containing the request details.
 */
const handler = async function (event) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
    }
  }
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({
        error: 'Method not allowed',
      }),
    }
  }

  const parseResult = QueryParamSchema.safeParse(event.queryStringParameters)
  if (!parseResult.success) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({
        error: parseResult.error.errors,
      }),
    }
  }

  const { data } = parseResult

  try {
    const response = await axios.get(
      'https://script.google.com/macros/s/AKfycbzNGQi-1uTydAX_5p-MytogNc-i8x6WKwbV9yPm8Vc5DTaGnddBv17vUwFM6VYJavboug/exec',
      {
        params: data,
      }
    )
    const returnObject = {
      statusCode: response.status,
      headers: corsHeaders,
      body: JSON.stringify(response.data),
    }
    console.log(returnObject)
    return returnObject
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
