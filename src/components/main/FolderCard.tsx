import "./FolderCard.css";

export type FolderCardProp = {
  id: string;
  collaboratorsTotal: number;
  title: string;
  createdAt: string;
};

const FolderCard = ({
  id,
  collaboratorsTotal,
  title,
  createdAt,
}: FolderCardProp) => {
  const MAX_VISIBLE = 3;
  const visibleCount = Math.min(collaboratorsTotal, MAX_VISIBLE);
  const excess = collaboratorsTotal - MAX_VISIBLE;

  return (
    <div className="folder-card" key={id}>
      <div className="menu-icon"></div>
      <div className="folder-icon"></div>

      <div className="collaborators">
        {Array.from({ length: visibleCount }).map((_, index) => {
          const isLast = index === visibleCount - 1;
          const showExcess = isLast && excess > 0;

          return (
            <div
              key={index}
              className="collaborator-circle"
              style={{ zIndex: index + 1 }}
            >
              {showExcess ? `+${excess}` : ""}
            </div>
          );
        })}
      </div>

      <h3>{title}</h3>
      <p>Created: {createdAt}</p>
    </div>
  );
};

export default FolderCard;
