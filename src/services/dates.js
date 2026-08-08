/**
 * Display an ISO date string as `Month Day, Year`
 * @param {string} isoDateString 
 * @returns {string}
 */
export function displayIsoDateString(isoDateString) {
  return new Date(Date.parse(isoDateString.slice(0, 10)))
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      // dates are stored as UTC midnight, so don't convert to local time
      timeZone: 'UTC',
    })
}