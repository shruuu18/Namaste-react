import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  useEffect(() => {
    console.log("useEffect called");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.624480699999999&restaurantId=${resId}`
      );
      console.log("Status:", data.status);

      const text = await data.text();
  
      console.log("Response:", text);
    } catch (error) {
      console.log("Error:", error);

      const json = await data.json();

      console.log(json);
    }
  };

  return (
    <div className="menu">
      <h1>Restaurant Menu</h1>

      <h2>Restaurant ID: {resId}</h2>

      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Pizza</li>
        <li>Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;