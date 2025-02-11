// import data and components
import footerLinks from "../lib/FooterLink";
import FooterLink from "./organisms/FooterLink ";

const Footer = () => {
  return (
    <footer className="w-full p-4 text-black">
      <div className="flex justify-between px-20 text-xs text-slate-400 max-md:flex-col max-md:gap-5 max-md:px-10 max-md:py-5 max-md:text-center max-sm:p-5">
        <p>
          © 2025, Made with love by DGB Team - For a better web application
        </p>

        <div className="flex gap-16 max-md:justify-center max-sm:flex-wrap max-sm:gap-5">
          {footerLinks.map((link, index) => (
            <FooterLink key={index} {...link} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
