export const linkCreation = async (slug: string): Promise<string | undefined | null> => {
  const uri = `${import.meta.env.VITE_BACKEND_API}/api/links/search`
  let rtnLink = ''

  const bodyPayload = {
    slug: slug,
  }

  const fetchAPI = await (
    await fetch(uri, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
      body: JSON.stringify(bodyPayload),
    })
  ).json()

  if (fetchAPI.payload != undefined) {
    rtnLink = `${fetchAPI.payload.real_link}`
  }

  return rtnLink
}
