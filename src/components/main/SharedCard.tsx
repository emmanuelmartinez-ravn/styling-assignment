import "./SharedCard.css";

export type SharedCardProp = {
  id: string;
  collaborators: {
    id: string;
    color: string;
  }[];
  title: string;
  createdAt: string;
};

const SharedCard = ({
  id,
  collaborators,
  title,
  createdAt,
}: SharedCardProp) => {
  if (collaborators.length > 3) {
    throw new Error("Too many collaborators");
  }

  return (
    <div className="shared-card" key={id}>
      <div className="icon-collaborators">
        <div className="shared-icon"></div>

        <div className="collaborators">
          {collaborators.map((collaborator, index) => (
            <div
              key={collaborator.id}
              className="shared-collaborator-circle"
              style={{
                borderColor: collaborator.color,
                zIndex: index + 1,
              }}
            ></div>
          ))}
        </div>
      </div>

      <h3>{title}</h3>
      <p>Created: {createdAt}</p>
    </div>
  );
};
export default SharedCard;
