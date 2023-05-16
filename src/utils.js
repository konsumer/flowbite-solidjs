// Generate a random, but safe for HTML class/id or URL ID
export const genId = () => btoa((Math.random(0, (new Date()).getTime())).toString()).slice(0, -10)
