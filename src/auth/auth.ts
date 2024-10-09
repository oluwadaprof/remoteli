import { generateCode } from "../utils/generate-code"

export const handleAuth = async () => {
  const { code, hash } = await generateCode()

  sessionStorage.setItem('codeVerifier', code)

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: `${process.env.REACT_APP_CLIENT_ID}`,
    redirect_uri: `${process.env.REACT_APP_REDIRECT_URI}`,
    code_challenge_method: 'S256',
    code_challenge: hash,
  })

  window.location.href = `${process.env.REACT_APP_AUTH_ENDPOINT}?${params.toString()}`
}