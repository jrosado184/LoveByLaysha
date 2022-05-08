const aws = require('aws-sdk');
const crypto = require('crypto');
import { promisify } from 'util';

const randomBytes = promisify(crypto.randomBytes);

const region = 'us-east-1';
const bucketName = 'lovebylaysha-client-images';
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4',
});

export const genUploadUrl = async () => {
  const rawBytes = await randomBytes(16);
  const nails = rawBytes.toLocaleString('hex');
  const params = {
    Bucket: bucketName,
    Key: nails,
    Expires: 60,
  };

  const uploadURL = await s3.getSignedUrlPromise('putObject', params);
  return uploadURL;
};
