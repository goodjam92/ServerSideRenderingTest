import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import { StaticImageData } from "next/image";
import { doc, getDoc } from "firebase/firestore";
import { dbService } from "@/lib/firebase/firebaseConfig";
import ImageBox from "@/components/imageBox";
import testImg from "public/assets/images/test.jpeg";
import styles from "./imgScreen.module.css";

const ServerSideRendering = ({
  images,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const imageArray: string[] = images;
  const tempImg: StaticImageData = testImg;

  function imageListRender() {
    const render = () => {
      const imageInfo: any[] = [];
      for (let i = 0; i < 8; i++) {
        imageInfo.push(<ImageBox src={tempImg} key={`images${i}`} />);
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

export const getServerSideProps: GetServerSideProps<{
  images: string[];
}> = async (context) => {
  const TEST_DOCUMENT_ID = "oCo3iiCdSBI0TNf7Nk43";
  const docRef = doc(dbService, "RenderTest", TEST_DOCUMENT_ID);
  const docSnap = (await getDoc(docRef)).data();
  const images = docSnap?.images;

  return { props: { images } };
};

export default ServerSideRendering;
