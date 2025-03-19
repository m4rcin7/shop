import { StaticImageData } from "next/image";

import img1 from "@/images/bunch-flowers.jpg";
import img3 from "@/images/flower-macro.jpg";
import img4 from "@/images/garden-flowers.jpg";
import img5 from "@/images/grass.jpg";
import img6 from "@/images/hand.jpg";
import img7 from "@/images/mountains.jpg";
import img8 from "@/images/purple-tropical.jpg";
import img9 from "@/images/rose.jpg";
import img10 from "@/images/silhouettes.jpg";
import img11 from "@/images/watercolor.jpg";

interface Picture {
  id: number;
  img: StaticImageData;
  title: string;
  price: string;
}

const PICTURE_DATA: Picture[] = [
  { id: 1, img: img1, title: "blossom", price: "123$" },
  { id: 3, img: img3, title: "red flower", price: "41$" },
  { id: 4, img: img4, title: "butterfly", price: "61$" },
  { id: 5, img: img5, title: "meadow", price: "87$" },
  { id: 6, img: img6, title: "nature", price: "76$" },
  { id: 7, img: img7, title: "mountain", price: "52$" },
  { id: 8, img: img8, title: "purple dream", price: "32$" },
  { id: 9, img: img9, title: "rose", price: "190$" },
  { id: 10, img: img10, title: "art black", price: "100$" },
  { id: 11, img: img11, title: "quick picture", price: "97$" },
];

export default PICTURE_DATA;
