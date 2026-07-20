import "./FolderSize.css";

export type FolderData = {
  id: string;
  name: string;
  files: number;
  size: number;
  color: string;
};

const FolderSize = ({ data }: { data: FolderData[] }) => {
  return (
    <div className="folder-size">
      {data.map((folder) => (
        <div className="folder-row" key={folder.id}>
          <div
            className="folder-color"
            style={{ background: folder.color }}
          ></div>
          <div className="folder-info">
            <span className="folder-name">{folder.name}</span>
            <span className="folder-files">{folder.files} files</span>
          </div>

          <span className="size-badge">{folder.size} GB</span>
        </div>
      ))}
    </div>
  );
};

export default FolderSize;
