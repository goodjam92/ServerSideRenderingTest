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
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Aerial_view_of_National_Museum_of_American_History.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/2/23/%281%29Moonrise_Darling_Harbour.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/8/88/12-07-13-washington-by-RalfR-10.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/64/%27Witch_Head%27_Brews_Baby_Stars_%2810592267924%29.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/2/2b/%27Zur_steinernen_Glocke_%27_Altst%C3%A4dter_Ring.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/7/71/%281%29Campbells_Stores.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/f/f6/%281%29Beauchamp_Falls_Blue_Mountains.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/%281%29Bare_Island.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/f/f6/%281%29Darling_Harbour_concert.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/%281%29Figtree_House_Hunters_Hill-1.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/e/e9/%281%29Sydney_Opera_House.jpg?uselang=ko",
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/%281%29Vailele_Hunters_Hill.jpg?uselang=ko",
  ];

  return { props: { images } };
};

export default ServerSideRendering;
