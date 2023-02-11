import Link from "next/link";
import testimg from "public/test.jpeg";
import ImageBox from "@/components/imageBox";
import styles from "./imgScreen.module.css";

export default function ImageScreen(imageList: string[]) {
  const image: any = testimg;
  console.log(imageList);
  return (
    <div className={styles.imageScreen}>
      <h1>이미지 화면</h1>
      <div className={styles.imageContainer}>
        <ImageBox src={image} />
      </div>

      <Link href="/">home</Link>
    </div>
  );
}
