import React from "react";
import "./FilterBar.css";

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <button>FILTER</button>
      <button>
        RECOMMENDED{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M2.72125 5.99978L7.06792 10.3464C7.58125 10.8598 8.42125 10.8598 8.93458 10.3464L13.2813 5.99978"
            stroke="#292D32"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>{" "}
    </div>
  );
};

export default FilterBar;
