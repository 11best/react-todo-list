import { useState } from "react";

const Filter = () => {
  const [currentFilter, setCurrentFilter] = useState("All");

  const filterList = ["All", "Done", "Undone"];
  return (
    <div className="filter-wrapper">
      <div className="filter-button">
        {currentFilter}
        <img
          src="src/assets/chevron-down.svg"
          alt="chevron-down"
          style={{ width: "10px", height: "10px" }}
        />
      </div>
      <div className="filter-menu">
        {filterList.map((filter) => {
          return (
            <div
              className={
                currentFilter === filter
                  ? "filter-menu-item filter-menu-item--active"
                  : "filter-menu-item"
              }
            >
              {filter}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
