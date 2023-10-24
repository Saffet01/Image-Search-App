import React from "react";

const ImageItem = ({ image }) => {
  console.log(image);
  return (
    <div>
      <img
        className="ImageListImg"
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageItem;
