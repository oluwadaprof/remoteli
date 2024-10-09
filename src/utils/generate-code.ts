function generateCodeVerifier() {
  const array = new Uint32Array(32)
  window.crypto.getRandomValues(array)
  return Array.from(array, (dec) => ('0' + dec.toString(16)).substr(-2)).join('')
}

export const generateCode = async () => {
  const codeVerifier = generateCodeVerifier()
  const encoder = new TextEncoder()
  const data = encoder.encode(codeVerifier)

  const hash = await window.crypto.subtle.digest('SHA-256', data)

  const base64String = btoa(String.fromCharCode(...new Uint8Array(hash)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')

  return {
    code: codeVerifier,
    hash: base64String,
  }
}
