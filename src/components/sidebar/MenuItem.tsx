import "./MenuItem.css";
export type MenuItemData = {
  id: string;
  name: string;
};

export type MenuItemProps = {
  item: MenuItemData;
  selected: boolean;
  onSelect: (id: string) => void;
};

const MenuItem = ({ item, selected, onSelect }: MenuItemProps) => {
  return (
    <button
      className={`menu-item ${selected ? "selected" : ""}`}
      onClick={() => onSelect(item.id)}
    >
      <div className={`selector ${selected ? "selected" : ""}`}></div>
      <div className="icon"></div>
      <span>{item.name}</span>
    </button>
  );
};

export default MenuItem;
