import type { FileCardProp } from "./FileCard";
import "./Files.css";
import FileCard from "./FileCard";

const Files = () => {
  const files: FileCardProp[] = [
    {
      id: "1",
      color: "#FF9F00",
      name: "Travel Landing Page",
      members: 5,
      lastModified: "Mar 8, 2020",
    },
    {
      id: "2",
      color: "#4AC29D",
      name: "True Photos",
      members: 12,
      lastModified: "Mar 8, 2020",
    },
    {
      id: "3",
      color: "#FF6860",
      name: "Dashboard Structure",
      members: 10,
      lastModified: "Mar 9, 2020",
    },
    {
      id: "4",
      color: "#FF9F00",
      name: "Character Illustration",
      members: 3,
      lastModified: "Mar 10, 2020",
    },
  ];
  return (
    <div className="files">
      <div className="title">
        <h2>Recent Files</h2>
        <button>View all</button>
      </div>
      <div className="headers">
        <span>Name</span>
        <span>Members</span>
        <span>Last Modified</span>
        <span></span>
      </div>
      {files.map((file) => (
        <FileCard key={file.id} {...file} />
      ))}
    </div>
  );
};

export default Files;
