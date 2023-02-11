import testimg from "public/test.jpeg";
import ImageBox from "@/components/imageBox";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { doc, getDoc } from "firebase/firestore";
import { dbService, firebaseApp } from "@/lib/firebase/firebaseConfig";

interface IImageContainerProps {
  images: string[];
}

function ImageContainer({
  imageList,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const image: any = testimg;
  return <ImageBox src={image} />;
}

export default ImageContainer;
