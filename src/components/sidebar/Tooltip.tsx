import { Fragment } from "react/jsx-runtime";
import "./Tooltip.css";
export type TooltipItemProp = {
  id: string;
  name: string;
};

const Tooltip = ({ items }: { items: TooltipItemProp[] }) => {
  return (
    <div className="tooltip">
      {items.map((item) => (
        <Fragment key={item.id}>
          <div className="icon"></div>
          <span className="tooltip-text">{item.name}</span>
        </Fragment>
      ))}
    </div>
  );
};

export default Tooltip;
