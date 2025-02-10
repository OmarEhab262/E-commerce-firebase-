import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font  bg-[#160a36]">
        <div className=" px-5 py-5 mx-auto flex flex-wrap justify-between items-center sm:flex-row flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <span className="text-xl font-bold">
                <span className="text-[#FB64B6] text-[21px] font-bold">E-</span>
                <span className="text-[19px]">Commerce</span>
              </span>
            </a>
            <p className="text-sm text-gray-100  sm:border-gray-200">
              © 2024 Omar Ehab —
              <Link
                to={"/"}
                className="text-gray-100 ml-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                @OmarEhab
              </Link>
            </p>
          </div>
          <div className="flex gap-2">
            <Facebook strokeWidth={0.5} color="white" fill="white" />
            <Twitter strokeWidth={0.5} color="white" fill="white" />
            <Instagram color="white" />
            <Linkedin color="white" strokeWidth={1} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
