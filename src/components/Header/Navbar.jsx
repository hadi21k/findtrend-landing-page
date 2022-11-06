import Logo from "../../assets/logo color.png";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import Menubar from "../../ui/Menubar";

const Navbar = () => {
  return (
    <nav className="fixed inset-0 z-50 h-[65px] bg-black px-2 font-roboto text-white">
      <div className="container mx-auto flex h-full items-center justify-between">
        <img src={Logo} className="h-7" />
        <ul className="flex flex-1 justify-center space-x-6 text-lg max-lg:hidden">
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#how-it-works">
            <li>How it works</li>
          </a>
          <a href="/#pricing">
            <li>Pricing</li>
          </a>
          <a href="/#solution">
            <li>Solution</li>
          </a>
          <a href="/#features">
            <li>Features</li>
          </a>
        </ul>
        <div className="flex items-center space-x-8 max-lg:hidden">
          <Link to="/login">
            <h4>Login</h4>
          </Link>
          <Link to="/register">
            <Button text="Register" color="white" />
          </Link>
        </div>
        <Menubar />
      </div>
    </nav>
  );
};

export default Navbar;
