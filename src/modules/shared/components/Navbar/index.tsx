import PrivateNavbar from "./PrivateNavbar";
import PublicNavbar from "./PublicNavbar";

interface INavbarProps {
  isAuthenticated: boolean;
}

const Navbar = (props: INavbarProps) =>
  props.isAuthenticated ? <PrivateNavbar /> : <PublicNavbar />;

export default Navbar;
