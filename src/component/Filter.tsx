import { useState } from "react";

const Filter = (props: {
  currentFilter: string;
  setCurrentFilter: (filter: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const filterList = ["All", "Done", "Undone"];

  const handleSelectedFilter = (filter: string) => {
    props.setCurrentFilter(filter);
    setIsOpen(false);
  };

  return (
    <div className="filter-wrapper">
      <div className="filter-button" onClick={() => setIsOpen(!isOpen)}>
        {props.currentFilter}
        <img
          src="src/assets/chevron-down.svg"
          alt="chevron-down"
          style={{ width: "10px", height: "10px" }}
        />
      </div>
      {isOpen && (
        <div className="filter-menu">
          {filterList.map((filter) => {
            return (
              <div
                onClick={() => handleSelectedFilter(filter)}
                className={
                  props.currentFilter === filter
                    ? "filter-menu-item filter-menu-item--active"
                    : "filter-menu-item"
                }
              >
                {filter}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Filter;
