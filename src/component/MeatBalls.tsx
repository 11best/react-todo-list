const MeatBalls = (props: {
  setIsOpen: () => void;
  isOpen: boolean;
  onDelete: () => void;
}) => {
  return (
    <>
      <div className="meatballs-icon-wrapper" onClick={props.setIsOpen}>
        <div className="meatball-dot"></div>
        <div className="meatball-dot"></div>
        <div className="meatball-dot"></div>
      </div>
      {props.isOpen && (
        <div className="meatballs-menu">
          <div
            className="meatballs-menu-item"
            style={{ paddingTop: "16px", paddingBottom: "8px" }}
          >
            Edit
          </div>
          <div
            onClick={props.onDelete}
            className="meatballs-menu-item"
            style={{
              paddingBottom: "16px",
              paddingTop: "8px",
              color: "#E07C7C",
            }}
          >
            Delete
          </div>
        </div>
      )}
    </>
  );
};

export default MeatBalls;
