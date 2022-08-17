import React from "react";

export default function ImageFluid({ imageName, imageStyle }) {
  return (
    <img
      src={`${import.meta.env.VITE_PUBLIC_URL}/assets/img/${imageName}.jpg`}
      alt=""
      className={imageStyle ? imageStyle : "img-fluid"}
    />
  );
}
