/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./imageBox.module.css";

interface ImageBoxProps {
  src: string;
}

export default function ImageBox({ src }: ImageBoxProps) {
  return (
    <div className={styles.imageBox}>
      <Image
        src={src}
        alt="photo"
        className={styles.image}
        width={240}
        height={240}
      />
    </div>
  );
}
