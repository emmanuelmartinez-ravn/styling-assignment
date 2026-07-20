import "./Shared.css";
import type { SharedCardProp } from "./SharedCard";
import SharedCard from "./SharedCard";

const Shared = () => {
  const shared: SharedCardProp[] = [
    {
      id: "1",
      collaborators: [
        {
          id: "collaborator-1",
          color: "#4AC29D",
        },
        {
          id: "collaborator-2",
          color: "#FF6860",
        },
      ],
      title: "Landing Page",
      createdAt: "20.02.2020",
    },
    {
      id: "2",
      collaborators: [
        {
          id: "collaborator-1",
          color: "#4AC29D",
        },
        {
          id: "collaborator-2",
          color: "#FF6860",
        },
        {
          id: "collaborator-3",
          color: "#FF9F00",
        },
      ],
      title: "Illustration Pack",
      createdAt: "20.02.2020",
    },
    {
      id: "3",
      collaborators: [
        {
          id: "collaborator-1",
          color: "#4AC29D",
        },
        {
          id: "collaborator-3",
          color: "#FF9F00",
        },
      ],
      title: "CV Design",
      createdAt: "20.02.2020",
    },
  ];
  return (
    <div className="shared">
      <div className="shared-title">
        <h2>Shared</h2>
        <button>View all</button>
      </div>
      <div className="shared-cards">
        {shared.map((shared) => (
          <SharedCard key={shared.id} {...shared} />
        ))}
      </div>
    </div>
  );
};

export default Shared;
