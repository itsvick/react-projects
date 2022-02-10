import React from "react";
import MenuCard from "./MenuCard";

export default function MenuList(props) {
  const { menus, activeCategory } = props;

  const menuList = menus.filter((item) => {
    if (activeCategory === "all") {
      return true;
    }
    return item.category === activeCategory;
  });

  return (
    <section className="container">
      {menuList.map((item, index) => {
        
        return <MenuCard item={item} key={item.id} />;
      })}
    </section>
  );
}
