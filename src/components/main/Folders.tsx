import "./Folders.css";
import type { FolderCardProp } from "./FolderCard";
import FolderCard from "./FolderCard";

const Folders = () => {
  const folders: FolderCardProp[] = [
    {
      id: "1",
      collaboratorsTotal: 2,
      title: "App Project",
      createdAt: "20.02.2020",
    },
    {
      id: "2",
      collaboratorsTotal: 2,
      title: "Project: fitbit",
      createdAt: "28.02.2020",
    },
    {
      id: "3",
      collaboratorsTotal: 5,
      title: "Client Documents",
      createdAt: "4.03.2020",
    },
  ];
  return (
    <div className="folders">
      <div className="title">
        <h2>Recently Used</h2>
        <div className="icons">
          <div className="icon-1"></div>
          <div className="icon-2"></div>
        </div>
      </div>
      <div className="cards">
        {folders.map((folder) => (
          <FolderCard key={folder.id} {...folder} />
        ))}
      </div>
    </div>
  );
};

export default Folders;
