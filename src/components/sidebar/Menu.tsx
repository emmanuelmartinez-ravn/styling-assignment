import "./Menu.css";
import MenuItem from "./MenuItem.tsx";
import type { MenuItemProps } from "./MenuItem.tsx";

const Menu = () => {
  const menuItems: MenuItemProps[] = [
    { id: "1", name: "Home", selected: true },
    { id: "2", name: "My Files", selected: false },
    { id: "3", name: "Recent Files", selected: false },
    { id: "4", name: "Shared Files", selected: false },
    { id: "5", name: "File Request", selected: false },
    { id: "6", name: "Trash", selected: false },
  ];
  return (
    <div className="menu">
      {menuItems.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Menu;
