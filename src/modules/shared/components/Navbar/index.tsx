import type { INavbarProps } from "./types";

import PrivateNavbar from "./PrivateNavbar";
import PublicNavbar from "./PublicNavbar";

const Navbar = (props: INavbarProps) =>
  props.isAuthenticated ? <PrivateNavbar /> : <PublicNavbar />;

export default Navbar;
