import styles from "./imgScreen.module.css";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import { doc, getDoc } from "firebase/firestore";
import { dbService } from "@/lib/firebase/firebaseConfig";
import ImageBox from "@/components/imageBox";

const ImageScreen = ({
  images,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const imageArray: string[] = images;

  function imageListRender() {
    const render = () => {
      const imageInfo: any[] = images.map((image: string) => {
        return <ImageBox src={image} key={`images${image}`} />;
      });
      return imageInfo;
    };
    return <>{render()}</>;
  }

  return (
    <div className={styles.imageScreen}>
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

export default ImageScreen;
