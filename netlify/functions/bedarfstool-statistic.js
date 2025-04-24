const { z } = require('zod')
const axios = require('axios')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const StatisticEntrySchema = z.object({
  date: z.string(),
  email: z.string().email(),
  orgName: z.string(),
  questions: z.array(
    z.object({
      question: z.string(),
      answers: z.array(z.string()),
    })
  ),
  score: z.number(),
})

/**
 * @param {import('@netlify/functions').HandlerEvent} event - The event object containing the request details.
 */
const handler = async function (event) {
  console.log(`${event.httpMethod} ${event.rawUrl}`)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
    }
  }
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({
        error: 'Method not allowed',
      }),
    }
  }

  const body = JSON.parse(event.body)
  const parseResult = StatisticEntrySchema.safeParse(body)
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
    const response = await axios.post(
      'https://script.google.com/macros/s/AKfycbyVkamgW0DBt5Koit696IoS0y9Ru9-M0LYCqBUajmjyUOd1ssvTS2-fU5HO-CYpQ2V8/exec',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
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

module.exports.handler = handler
