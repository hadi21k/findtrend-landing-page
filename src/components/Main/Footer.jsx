import Logo from "../../assets/logo dark.png";

const Footer = () => {
  return (
    <footer className="bg-white py-4 text-black">
      <div className="container mx-auto flex items-center justify-between px-10 max-sm:flex-col max-sm:space-y-2">
        <img src={Logo} alt="findtrend" className="h-8" />
        <ul className="flex items-center space-x-4 max-sm:flex-col max-sm:space-y-2">
          <li className="font-semibold">Privacy Policy</li>
          <li className="font-semibold">Terms and Conditions</li>
          <li className="font-semibold">Contact Us</li>
          <li className="font-semibold">Careers</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
