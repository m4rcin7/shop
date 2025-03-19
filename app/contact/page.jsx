import Section from "@/components/Section";
import { FaInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact() {
  const divContainer = "m-[50px] flex flex-wrap justify-center gap-[50px]";
  const divContainerElements =
    "w-[350px] h-[350px] max-md:w-[250px] max-md:h-[250px] flex flex-col justify-center items-center gap-[20px] border-2 border-neutral-900 rounded-[15px] shadow-divContactShadow";
  const iconStyled = "text-6xl hover:scale-90";
  const descStyled = "font-bold";

  return (
   <Section title="Contact" className="text-center">
      <div className={divContainer}>
        <div className={divContainerElements}>
          <h3 className={iconStyled}>
            <MdOutlineEmail />
          </h3>
          <h4 className={descStyled}>Email: @email</h4>
        </div>
        <div className={divContainerElements}>
          <h3 className={iconStyled}>
            <FaInstagram />
          </h3>
          <h4 className={descStyled}>Instagram: @instagram</h4>
        </div>
        <div className={divContainerElements}>
          <h3 className={iconStyled}>
            <AiFillTikTok />
          </h3>
          <h4 className={descStyled}>TikTok: @tiktok</h4>
        </div>
        <div className={divContainerElements}>
          <h3 className={iconStyled}>
            <BsFillTelephoneFill />
          </h3>
          <h4 className={descStyled}>Telefon: @090909090</h4>
        </div>
      </div>
    </Section>
  );
}
