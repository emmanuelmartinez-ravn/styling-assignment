import "./Sidebar.css";
import Logo from "./sidebar/Logo.tsx";
import Menu from "./sidebar/Menu.tsx";
import Button from "./sidebar/Button.tsx";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <Menu />
      <Button />
    </div>
  );
};

export default Sidebar;
