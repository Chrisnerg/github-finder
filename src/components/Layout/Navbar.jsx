import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar shadow-sm bg-base-200 text-white">
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-x-2">
          <FaGithub className="text-3xl" />
          <p>Github Finder</p>
        </Link>
      </div>
      <div className="flex gap-x-3">
        <Link to="/" className="btn btn-ghost">
          <p>Home</p>
        </Link>

        <Link to="/About" className="btn btn-ghost">
          <p>About</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
