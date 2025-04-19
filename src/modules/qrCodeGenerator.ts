import QRCode from 'qrcode'

export const CodeGenerator = async (link: string) => {
  const qrCodeImage = await QRCode.toDataURL(link)

  return qrCodeImage
}
