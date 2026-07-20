import "./Dashboard.css";
import Advertisement from "./dashboard/Advertisement";
import FolderSize from "./dashboard/FolderSize";
import PieChart from "./dashboard/PieChart";
import Profile from "./dashboard/Profile";

import type { Segment } from "./dashboard/PieChart";
import type { FolderData } from "./dashboard/FolderSize";

const Dashboard = () => {
  const segments: Segment[] = [
    { id: "used-1", value: 20, color: "#4AC29D" },
    { id: "used-2", value: 40, color: "#FF9F00" },
    { id: "used-3", value: 25, color: "#689FF8" },
  ];

  const folders: FolderData[] = [
    {
      id: "folder-1",
      name: "Documents",
      files: 720,
      size: 200,
      color: "#FF9F00",
    },
    {
      id: "folder-2",
      name: "Documents",
      files: 720,
      size: 125,
      color: "#689FF8",
    },
    {
      id: "folder-3",
      name: "Documents",
      files: 720,
      size: 75,
      color: "#4AC29D",
    },
    {
      id: "folder-4",
      name: "Documents",
      files: 720,
      size: 50,
      color: "#BCBECA",
    },
  ];

  return (
    <div className="dashboard">
      <Profile />
      <PieChart segments={segments} />
      <FolderSize data={folders} />
      <Advertisement />
    </div>
  );
};

export default Dashboard;
