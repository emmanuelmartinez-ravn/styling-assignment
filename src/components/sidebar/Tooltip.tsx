import "./Tooltip.css";
export type TooltipItemProp = {
  id: string;
  name: string;
};

const Tooltip = ({ items }: { items: TooltipItemProp[] }) => {
  return (
    <div className="tooltip">
      {items.map((item) => (
        <>
          <div className="icon"></div>
          <span className="tooltip-text" key={item.id}>
            {item.name}
          </span>
        </>
      ))}
    </div>
  );
};

export default Tooltip;
