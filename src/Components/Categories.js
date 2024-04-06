import React, { useState } from "react";

const Categories = ({menuTitle,fiterProduct}) => {

  const[categorySelect,setCategorySelect]=useState('All')
  const selectcategoryFunc = (category) => {
    setCategorySelect(category);
  };

  return (
    <>
      <div  className="btn-container">
        {menuTitle.map((category,index) => (
          <>
   
            <button
              type="button"
              className={
                category === categorySelect
                ? "filter-btn highlight"
                : "filter-btn"
              }
              onClick={() => {
                selectcategoryFunc(category)
                fiterProduct(category)
              }
            }
            key={index+1}
            >
              {category}
            </button>
          </>
        ))}
      </div>
    </>
  );
};

export default Categories;
