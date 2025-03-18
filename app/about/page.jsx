import Section from "@/components/Section.jsx";
import H2 from "@/components/H2.jsx";
import Image from "next/image";
import aboutImg from "@/images/aboutImg.jpg";

export default function About() {
  const divStyled =
    "my-[50px] m-auto flex justify-center gap-[50px] items-center";
  const pStyled =
    "w-[500px] p-[25px] shadow-pAboutShadow rounded-[25px] leading-loose";
  const imgStyled = "w-[500px] h-[750px] shadow-imgAboutShadow rounded-[50px]";
  return (
    <Section>
      <H2>About me</H2>
      <div className={divStyled}>
        <p className={pStyled}>
          I am an avid art enthusiast with a deep appreciation for both
          classical and contemporary works. My passion for art began at an early
          age, inspired by visits to local galleries and museums. Over the
          years, I have developed a keen eye for detail and a strong
          understanding of various artistic techniques and styles. I enjoy
          exploring different mediums, from painting and drawing to digital art
          and photography. Art not only serves as a creative outlet for me but
          also as a means of expression and communication. I am constantly
          seeking new inspirations and opportunities to expand my artistic
          horizons. Whether it's through creating my own pieces or admiring the
          work of others, art plays a central role in my life.
        </p>
        <Image className={imgStyled} src={aboutImg} alt="about me image" />
      </div>
    </Section>
  );
}
