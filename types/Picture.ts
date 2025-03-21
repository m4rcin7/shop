import { StaticImageData } from "next/image";

export interface Picture {
  id: number;
  img: StaticImageData;
  title: string;
  price: string;
  quantity?: number;
}
