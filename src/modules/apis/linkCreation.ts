export const linkCreation = async (link: string): Promise<string | undefined | null> => {
  // console.log(link)

  const uri = `${import.meta.env.VITE_BACKEND_API}/api/links/create`
  // console.log(uri)

  const bodyPayload = {
    link: link,
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

  if (fetchAPI != undefined) {
    link = `${window.location.href}sh/${fetchAPI.payload.slug}`
  }

  return link
}
