export const withLogging =
  (handler) =>
  async (...args) => {
    const [event] = args
    console.log(`Request Received: ${event.httpMethod} ${event.rawUrl}`)
    const result = await handler(...args)
    console.log(`Result of ${event.httpMethod} ${event.rawUrl}:`, result)
    return result
  }
