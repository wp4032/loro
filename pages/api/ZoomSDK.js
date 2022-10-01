import crypto from 'crypto';
var Buffer = require('buffer/').Buffer;
const KJUR = require('jsrsasign');

export function generateSignature(sdkKey, sdkSecret, meetingNumber, role) {
  const timestamp = new Date().getTime() - 30000;
  const msg = Buffer.from(sdkKey + meetingNumber + timestamp + role).toString('base64');
  const hash = crypto.createHmac('sha256', sdkSecret).update(msg).digest('base64');
  const signature = Buffer.from(sdkKey, meetingNumber, timestamp, role, hash).toString('base64')
  return signature;
}

export function generateJWT(sdkKey, sdkSecret, meetingNumber, role) {
  const iat = Math.round((new Date().getTime() / 1000) - 30);
  const exp = iat + 60 * 60 * 2;
  const oHeader = { alg: 'HS256', typ: 'JWT' };

  const oPayload = {
    sdkKey: sdkKey,
    mn: meetingNumber,
    role: role,
    iat: iat,
    exp: exp,
    appKey: sdkKey,
    tokenExp: exp
  };
  console.log(oHeader);
  console.log(oPayload);

  const sHeader = JSON.stringify(oHeader);
  const sPayload = JSON.stringify(oPayload);

  console.log(sHeader);
  console.log(sPayload);
  const sdkJWT = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, sdkSecret)
  return sdkJWT
}