import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-pink-400 to-pink-600 shadow-lg p-4 text-white text-center">
      <nav>
        <ul className="flex flex-col gap-3 p-3">
          {["Home", "About Me", "Pictures", "Contact"].map((name) => (
            <li key={name}>
              <Link
                className="hover:text-neutral-400 transition-all duration-300"
                href={`/${name.toLowerCase().replace(" ", "")}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-center w-1/3 max-md:w-full text-sm">
        <p>
          Discover the unique charm and beauty of my original paintings, crafted
          with passion and creativity. Each piece is a vibrant expression of
          emotion and artistry, perfect for adding a touch of elegance to any
          space.
        </p>
      </div>
      <div className="flex flex-col gap-4 text-sm">
        <div className="flex items-center gap-3">
          <MdOutlineEmail />
          <span>@email</span>
        </div>
        <div className="flex items-center gap-3">
          <FaInstagram />
          <span>@instagram</span>
        </div>
        <div className="flex items-center gap-3">
          <AiFillTikTok />
          <span>@tiktok</span>
        </div>
        <div className="flex items-center gap-3">
          <BsFillTelephoneFill />
          <span>@090909090</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
