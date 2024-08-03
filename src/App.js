/* eslint-disable no-unreachable */
import React, { useState } from "react";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";
import data from "./data";

const menuTitleArray = ["All", ...new Set(data.map((cate) => cate.category))];
//برای از بین بردن داده های تکراری
function App() {
  const [allMenues,setAllMenues]=useState(data);
  const [menuTitle] = useState(menuTitleArray);

  const fiterProduct = (category) => {
 if(category==='All'){
  setAllMenues(data)
  return
 }
 let filteredMenu=data.filter(menu => menu.category === category)
setAllMenues(filteredMenu)

  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories menuTitle={menuTitle} fiterProduct={fiterProduct}/>
        <Menu allMenues={allMenues}/>
      </section>
    </main>
  );
}

export default App;
