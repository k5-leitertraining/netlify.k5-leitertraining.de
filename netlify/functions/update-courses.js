const { z } = require('zod')
const axios = require('axios')
const { withLogging } = require('../../utils/withLogging')
const { updateCurrentCourses } = require('../../etc/updateCurrentCourses/index')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const QueryParamSchema = z.object({
  contactEmail: z.string(),
  courseToAdd: z.string(),
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
  if (event.httpMethod !== 'PUT') {
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

  const { data: queryParams } = parseResult

  try {
    await updateCurrentCourses({
      contactEmail: queryParams.contactEmail,
      courseToAdd: queryParams.courseToAdd,
    })
    const returnObject = {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        result: 'Course updated successfully',
      }),
    }
    return returnObject
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        error: error.message || 'An error occurred',
      }),
    }
  }
}

module.exports.handler = withLogging(handler)
