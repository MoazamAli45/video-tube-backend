import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "do9edvwmw",
  api_key: "896282331477655",
  api_secret: "jS_SGRa69Mvt0sgENbwlOwdWEIg",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    console.log("Uploading on cloudinary", localFilePath);
    if (!localFilePath) return null;
    const result = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // delete file from local storage
    // synchronously so it will complete then move further

    console.log("Uploaded on cloudinary", result.secure_url);
    fs.unlinkSync(localFilePath);
    return result;
  } catch (error) {
    //  if not uploaded then delete file so maliciuos file not stored
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
