"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    //converts file to data-url, which is a value whch can be used as input and the source for image a
    const fileReader = new FileReader();

    //holds data of the file and we can access the file url with this fn
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    //when this is excuted, it triggers onLoad function
    fileReader.readAsDataURL(file);
  }

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          {imageInput.current && (
            <div className={classes.preview}>
              {!pickedImage ? (
                <p>No image was selected.</p>
              ) : (
                <Image src={pickedImage} alt="Selected image by user" fill />
              )}
            </div>
          )}
          <input
            className={classes.input}
            type="file"
            id={name}
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
            required
            accept="image/png, image/jpeg"
          />
        </div>
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Add Image
        </button>
      </div>
    </>
  );
}
