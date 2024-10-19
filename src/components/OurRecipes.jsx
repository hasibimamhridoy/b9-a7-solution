import React, { useEffect, useState } from "react";
import CookingTable from "./CookingTable";
import FoodCard from "./FoodCard";
import SectionTitle from "./SectionTitle";

const OurRecipes = () => {
  const [foodDatas, setFoodDatas] = useState([]);
  const [wantToCookFoodDatas, setWantToCookFoodDatas] = useState([]);
  const [currentlyCookingDatas, setCurrentlyCookingDatas] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFoodDatas(data);
      });

    // const fetchData = async () => {
    //   const res = await fetch("recipe.json");
    //   const data = await res.json();
    // //   console.log(data);
    //   return data;
    // };
    // fetchData();
  }, []);

  //   console.log(foodDatas);

  const handleWantToCook = (recipe_id) => {
    console.log(recipe_id);
    const findData = foodDatas.find(
      (food_data) => food_data.recipe_id === recipe_id
    );
    const updatedAllData = [...wantToCookFoodDatas, findData];

    const isExists = wantToCookFoodDatas.find(
      (food_data) => food_data.recipe_id === recipe_id
    );
    if (isExists) {
      alert("Already Exits");
    } else {
      setWantToCookFoodDatas(updatedAllData);
    }

    // console.log(findData);
  };
  const handlePrepare = (recipe_id) => {
    //remove cooking items for prepare
    console.log(recipe_id);
    const remainingData = wantToCookFoodDatas.filter(
      (foodData) => foodData.recipe_id !== recipe_id
    );
    setWantToCookFoodDatas(remainingData);

    //add cooking items for prepare

    const findData = foodDatas.find(
      (food_data) => food_data.recipe_id === recipe_id
    );
    const updatedAllData = [...currentlyCookingDatas, findData];
    setCurrentlyCookingDatas(updatedAllData);
  };

  console.log(currentlyCookingDatas);

  const sumPrepareTime = currentlyCookingDatas.reduce(
    (sum, data) => sum + parseFloat(data.preparing_time),
    0
  );
  const sumCalorise = currentlyCookingDatas.reduce(
    (sum, data) => sum + parseFloat(data.calories),
    0
  );
  console.log(sumPrepareTime);
  console.log(sumCalorise);

  return (
    <div>
      <SectionTitle></SectionTitle>
      <div className="flex gap-3">
        <div className="grid grid-cols-2 gap-3">
          {foodDatas?.map((foodData) => (
            <FoodCard
              foodDataProps={foodData}
              handleWantToCook={handleWantToCook}
            ></FoodCard>
          ))}
        </div>
        <div>
          <CookingTable
            wantToCookFoodDatas={wantToCookFoodDatas}
            handlePrepare={handlePrepare}
            currentlyCookingDatas={currentlyCookingDatas}
            sumPrepareTime={sumPrepareTime}
            sumCalorise={sumCalorise}
          ></CookingTable>
        </div>
      </div>
    </div>
  );
};

export default OurRecipes;
