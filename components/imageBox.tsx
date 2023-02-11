/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./imageBox.module.css";

interface ImageBoxProps {
  src: string;
}

export default function ImageBox({ src }: ImageBoxProps) {
  return (
    <div className={styles.imageBox}>
      <img src={src} alt="photo" className={styles.image} />
    </div>
  );
}
