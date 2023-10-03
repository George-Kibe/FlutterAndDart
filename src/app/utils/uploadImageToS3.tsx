import { RNS3 } from 'react-native-aws3';
//function to upload images to s3 bucket
const S3_ACCESS_KEY=""
const S3_SECRET_ACCESS_KEY=""
const bucket ="buenare-images-bucket"
// const S3_ACCESS_KEY=process.env.EXPO_PUBLIC_S3_ACCESS_KEY || "";
// const S3_SECRET_ACCESS_KEY=process.env.EXPO_PUBLIC_S3_SECRET_ACCESS_KEY || "";

export const uploadImageToS3 = async (imageUri:String, mimetype:String, ext:String) => {
  // Prepare the S3 options for the image
  // Generate a unique key for the uploaded image
  console.log(imageUri, mimetype, ext)
  const fileName = `${Date.now()}.${ext}`;
  const file = {
    uri: imageUri,
    name: fileName,
    type: mimetype,
  };

  let options = {
    // keyPrefix: s3Options.keyPrefix,
    bucket: bucket,
    region: "eu-west-1",
    accessKey: S3_ACCESS_KEY,
    secretKey: S3_SECRET_ACCESS_KEY,
    successActionStatus: 201,
    headers: {
        'Content-Type': mimetype,
    }
  };
//   // Set the Content-Type header explicitly
//   if (mimetype) {
//     options.headers = {
      
//     };
//   }
  try {
    const response = await RNS3.put(file, options);
    if (response.status !== 201) {
      throw new Error('Failed to upload image to S3');
    }
    console.log('Image uploaded successfully:', response.body.postResponse.location);
    // You can perform further actions with the uploaded image location here
    return response.body.postResponse.location
  } catch (error) {
    console.error('Error uploading image:', error);
    // Handle error
  }
};