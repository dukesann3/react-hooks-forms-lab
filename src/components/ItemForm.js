import {React, useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('Produce');

  function handleFormNameChange(event) {
    setName(event.target.value);
  }

  function handleFormCategoryChange(event) {
    setCategory(event.target.value);
  }

  function onSubmitChange(e){
    if(!name){
      return;
    }
    let newForm = {
      id: uuid(),
      name: name,
      category: category
    }
    e.preventDefault();
    onItemFormSubmit(newForm);
  }

  return (
    <form className="NewItem" onSubmit={(e) => onSubmitChange(e)}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleFormNameChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
