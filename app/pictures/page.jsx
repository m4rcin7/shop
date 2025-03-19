import Section from "@/components/Section";
import PICTURE_DATA from "./data.ts";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";

export default function SectionPictures() {
  const divWrapper =
    "p-[50px] flex flex-wrap gap-[50px] justify-center items-center ";
  const divPicture =
    "p-[20px] w-[250px] h-max flex flex-col items-center gap-[15px] border-2 border-neutral-900 bg-neutral-300 rounded-xl drop-shadow-xl";
  const imgStyled = "border-[15px] border-neutral-950";
  const divDescription =
    "p-[5px] w-full flex justify-between items-center uppercase text-center font-bold ";
  const priceStyled = "text-red-400 italic";
  const buttonAddStyled =
    "p-2 text-2xl text-neutral-100 bg-neutral-800 rounded-full hover:bg-neutral-500";

  return (
   <Section title="Pictures" className="text-center">
      <div className={divWrapper}>
        {PICTURE_DATA.map((picture) => (
          <div key={picture.id} id={picture.id} className={divPicture}>
            <Image
              className={imgStyled}
              src={picture.img}
              alt={picture.title}
            />
            <div className={divDescription}>
              <div>
                <h3>: {picture.title}</h3>
                <h3 className={priceStyled}>P: {picture.price}</h3>
              </div>
              <button className={buttonAddStyled}>
                <IoMdAdd />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
