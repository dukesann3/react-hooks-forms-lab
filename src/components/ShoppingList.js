import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [userSearch, setUserSearch] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleUserSearchChange(event) {
    setUserSearch(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    }

    return item.category === selectedCategory;

  });

  /* Use this if the other ones don't work
  const itemsToDisplayWUserInput = itemsToDisplay.filter((item) => {
    if(!userSearch){
      return true;
    }

    return userSearch === item.name;
  })
  */

  const itemsToDisplayWUserInput = itemsToDisplay.filter((item) => {

    if(!userSearch){
      return true;
    }
    else if(item.name.includes(userSearch)){
      return true;
    }

    return false;

  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={userSearch} onCategoryChange={handleCategoryChange} onSearchChange={handleUserSearchChange}/>
      <ul className="Items">
        {itemsToDisplayWUserInput.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
