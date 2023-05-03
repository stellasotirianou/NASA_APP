import * as React from "react";
import Dropdown from "react-bootstrap/Dropdown";

import { useEffect, useState } from "react";

const Categories = (props) => {
  const [categories, setCategories] = useState([]);
  const { selectedCategory, setSelectedCategory } = props;
  useEffect(() => {
    fetch("https://eonet.gsfc.nasa.gov/api/v2.1/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelect = (e) => {
    setSelectedCategory(e);
  };
  return (
    <>
      <Dropdown className="d-inline mx-2" onSelect={handleSelect}>
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Category : {selectedCategory}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {categories.map((category) => (
            <Dropdown.Item href="#" eventKey={category.title}>
              {category.title}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Categories;
