import "./FileCard.css";

export type FileCardProp = {
  id: string;
  color: string;
  name: string;
  members: number;
  lastModified: string;
};

const FileCard = ({ id, color, name, members, lastModified }: FileCardProp) => {
  return (
    <div className="file-card" key={id}>
      <div className="file-name">
        <div className="file-icon" style={{ background: color }}></div>
        <span>{name}</span>
      </div>

      <span className="members">{members}</span>
      <span>{lastModified}</span>
      <div className="file-menu-icon"></div>
    </div>
  );
};

export default FileCard;
