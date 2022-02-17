import { string as whatev } from 'whatev'

export async function handler (event) {
    console.log('using esm whatev')
    return { whatev, ...event }
  }
