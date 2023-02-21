import React from "react";
import { IKContext, IKImage, IKUpload } from "imagekitio-react";

const publicKey = "public_pGJHd78butYMHwkLsNwpH+OgTkY=";
const urlEndpoint = "https://ik.imagekit.io/1fwfez3pd/";
const authenticationEndpoint = "http://localhost:8080/image-upload-auth";

const onError = (err) => {
  console.log("Error", err);
};

// const onSuccess = (res) => {
//   console.log("Success", res);
// };

function ImageUpload({ onSuccess }) {
  return (
    <div>
      <IKContext
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticationEndpoint={authenticationEndpoint}
      >
        <p>Upload an image</p>
        <IKUpload
          fileName="test-upload.png"
          onError={onError}
          onSuccess={onSuccess}
        />
      </IKContext>
    </div>
  );
}

export default ImageUpload;
