import "./Menu.css";
import MenuItem from "./MenuItem.tsx";
import type { MenuItemData } from "./MenuItem.tsx";

import { useState } from "react";

const menuItems: MenuItemData[] = [
  { id: "1", name: "Home" },
  { id: "2", name: "My Files" },
  { id: "3", name: "Recent Files" },
  { id: "4", name: "Shared Files" },
  { id: "5", name: "File Request" },
  { id: "6", name: "Trash" },
];

const Menu = () => {
  const [selectedId, setSelectedId] = useState<string>("1");

  return (
    <div className="menu">
      {menuItems.map((item) => (
        <MenuItem
          item={item}
          key={item.id}
          selected={item.id === selectedId}
          onSelect={setSelectedId}
        />
      ))}
    </div>
  );
};

export default Menu;
