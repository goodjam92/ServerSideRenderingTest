import { GetStaticProps, InferGetServerSidePropsType } from "next/types";
import ImageBox from "@/components/imageBox";
import styles from "style/imgScreen.module.css";
import React from "react";

const ServerSideRendering = ({
  images,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const imageArray: string[] = images;

  function imageListRender() {
    const render = () => {
      const imageInfo: any[] = [];
      for (let i = 0; i < 12; i++) {
        imageInfo.push(<ImageBox src={imageArray[i]} key={`images${i}`} />);
      }
      return imageInfo;
    };
    return <>{render()}</>;
  }

  return (
    <div className={styles.ServerSideRendering}>
      <div className={styles.imageContainer}>{imageListRender()}</div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  images: string[];
}> = async (context) => {
  const images: string[] = [
    "1.jpeg",
    "2.jpeg",
    "3.jpg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
  ];

  return { props: { images } };
};

export default ServerSideRendering;
