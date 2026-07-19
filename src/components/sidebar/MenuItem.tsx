import "./MenuItem.css";
export type MenuItemProps = {
  id: string;
  name: string;
  selected: boolean;
};

const MenuItem = ({ item }: { item: MenuItemProps }) => {
  return (
    <div className={`menu-item ${item.selected ? "selected" : ""}`}>
      <div className="icon"></div>
      <span>{item.name}</span>
    </div>
  );
};

export default MenuItem;
