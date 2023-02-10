import Image from "next/image";
import styles from ".//imageBox.module.css";
import testimg from "public/test.jpeg";

interface ImageBoxProps {
  src: string;
}

export default function ImageBox({ src }: ImageBoxProps) {
  return (
    <div className={styles.imageBox}>
      <Image src={src} alt="photo" className={styles.image} loading="lazy" />
    </div>
  );
}
