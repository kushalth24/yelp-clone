import React, { useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
const AddRestaurant = () => {
  const[name, setName]=useState("");
  const[location,setLocation]=useState("");
  const[price_range, setPrice]=useState("Price Range");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response= await RestaurantFinder.post("/addRestaurants",{
        name,
        location,
        price_range
      });
      console.log(response);
    }catch(e){
      console.log(e);
    }
  }
  
  return (
    <form className="row gx-3 gy-2 align-items-center">
      <div className="col-sm-3">
        <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Restaurant name"
        />
      </div>
      <div className="col-sm-3">
        <input
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Location"
        />
      </div>
      <div className="col-sm-3">
        <select value={price_range} onChange={(e)=>setPrice(e.target.value)} className="form-select" id="specificSizeSelect" >
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
          <option value="5">$$$$$</option>
        </select>
      </div>
      <div className="col-sm-3">
        <button type="submit" className="btn btn-primary" onClick={(e)=>handleSubmit(e)}>
          ADD
        </button>
      </div>
    </form>
  );
};

export default AddRestaurant;
