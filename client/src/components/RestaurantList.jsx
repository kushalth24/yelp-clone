import React, { useContext, useEffect } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../context/RestaurantContext";
import { useNavigate } from "react-router-dom";
const RestaurantList = (props) => {
    const {restaurants, setRestaurants}=useContext(RestaurantContext);
    let navigate=useNavigate();
    const deleteRestaurant= async (id)=>{
        try{
            const response= await RestaurantFinder.delete(`/deleteRestaurants/${id}`);
            setRestaurants(restaurants.filter(restaurant=>{
              return restaurant.id!==id;
            }))
            console.log(response);
          }catch(e){
            console.log(e);
          }
    }
    const updateRestaurant=(id)=>{
      navigate(`restaurants/${id}/update`);
    }
  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const result = await RestaurantFinder.get("/");
        setRestaurants(result.data.result);
      } catch (err) {}
    }
    fetchRestaurants();
  });
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Restaurant Name</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Reviews</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants && restaurants.map((restaurant,index)=>(
            <tr key={restaurant.id}>
                <td>{index+1}</td>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.price_range)}</td>
                <td>⭐⭐✨🌟🌟</td>
                <td><button onClick={()=>updateRestaurant(restaurant.id)} className="btn btn-warning">Update</button></td>
                <td><button onClick={()=>deleteRestaurant(restaurant.id)} className="btn btn-danger">Delete</button></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
