const { z } = require('zod')
const axios = require('axios')
const cheerio = require('cheerio')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const QueryParamSchema = z.object({
  website: z.string().default('https://neu.k5-leitertraining.de/'),
})

function extractNavLinks(html, baseUrl) {
  // Load the HTML into Cheerio
  const $ = cheerio.load(html)

  const navItems = []

  $('nav[role="navigation"] a:not(.w-dropdown-link)').each((i, navItem) => {
    const label = $(navItem).text().trim()
    const url = $(navItem).attr('href')

    const children = []

    $(navItem)
      .closest('.w-dropdown')
      .find('.w-dropdown-link')
      .each((j, child) => {
        children.push({
          label: $(child).text().trim(),
          url: new URL($(child).attr('href'), baseUrl).href,
        })
      })

    navItems.push({
      label,
      url: new URL(url, baseUrl).href,
      children: children.length > 0 ? children : undefined,
    })
  })

  return navItems
}

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

  const { data: queryParams } = parseResult

  try {
    // Fetch the website
    const response = await axios.get(queryParams.website)

    // Extract the navigation links
    const navLinks = extractNavLinks(response.data, queryParams.website)

    const returnObject = {
      statusCode: response.status,
      headers: corsHeaders,
      body: JSON.stringify(navLinks, null, 2),
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
