import "./Sidebar.css";
import Logo from "./sidebar/Logo.tsx";
import Menu from "./sidebar/Menu.tsx";
import Button from "./sidebar/Button.tsx";
import Tooltip from "./sidebar/Tooltip.tsx";
import type { TooltipItemProp } from "./sidebar/Tooltip.tsx";

const tooltipItems: TooltipItemProp[] = [
  { id: "1", name: "Upload files" },
  { id: "2", name: "Upload folder" },
  { id: "3", name: "New folder" },
  { id: "4", name: "More" },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <Menu />
      <div className="buttons">
        <Tooltip items={tooltipItems} />
        <Button />
      </div>
    </div>
  );
};

export default Sidebar;
