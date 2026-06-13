import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      console.log(json);

      const restaurants =
        json?.data?.cards
          ?.find(
            (card) =>
              card?.card?.card?.gridElements?.infoWithStyle?.restaurants
          )
          ?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="search-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.1
            );

            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <RestaurantCard
              resName={restaurant?.info?.name}
              cuisine={restaurant?.info?.cuisines?.join(", ")}
              image={
                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                restaurant?.info?.cloudinaryImageId
              }
              rating={restaurant?.info?.avgRating}
              deliveryTime={
                restaurant?.info?.sla?.deliveryTime + " Minutes"
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;