"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";

export default function ImagePicker({ label, name }) {
  const [selectedImage, setSelectedImage] = useState();
  const inputRef = useRef();

  function handlClickButton() {
    inputRef.current.click();
  }

  function handleImageChange(ev) {
    const file = ev.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    fileReader = new FileReader();

    fileReader.onload = () => {
      setSelectedImage(fileReader.result);
    };
    fileReader = readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!selectedImage && <p>No image picked yet...</p>}
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Image selected by the user"
              fill
            />
          )}
        </div>
        <input
          type="file"
          id={name}
          accept="image/jpg, image/jpeg"
          name={name}
          className={classes.input}
          ref={inputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlClickButton}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
