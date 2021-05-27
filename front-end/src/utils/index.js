import crypto from 'crypto'

export const getMD5 = (password) => crypto.createHash('md5').update(password, 'utf8').digest('hex');

export const convertImageBuffer = (url) => {
  return Buffer.from(url, 'hex').toString('base64')
}