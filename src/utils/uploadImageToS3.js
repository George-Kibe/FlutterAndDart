
const S3_ACCESS_KEY=process.env.EXPO_PUBLIC_S3_ACCESS_KEY || "";
const S3_SECRET_ACCESS_KEY=process.env.EXPO_PUBLIC_S3_SECRET_ACCESS_KEY || "";
const S3_BUCKET_NAME = 'buenare-images-bucket';

// const uploadImageToS3 = async (imageUri:String, mimetype:String, ext:String)

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

export const uploadImageToS3 = async (imageUri, mimetype, ext) => {
  const s3Client = new S3Client({
    region: 'eu-west-1', // Replace with your desired region
    credentials: {
      accessKeyId: S3_ACCESS_KEY,
      secretAccessKey: S3_SECRET_ACCESS_KEY,
    },
  });
  const fileName = `${Date.now()}.${ext}`;

  const params = {
    Bucket: S3_BUCKET_NAME,
    Key: fileName,
    Body: imageUri,
    ContentType: 'image/jpeg', // Set the appropriate content type
  };

  try {
    const command = new PutObjectCommand(params);
    const response = await s3Client.send(command);

    console.log('Image uploaded successfully with aws-sdk:', response);
    // return response.Location

    // Handle success
  } catch (error) {
    console.error('Error uploading image from aws sdk:', error);
    return false;
    // Handle error
  }
};
