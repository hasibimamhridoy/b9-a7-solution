import React from "react";

const CookingTable = ({
  wantToCookFoodDatas,
  handlePrepare,
  currentlyCookingDatas,
  sumPrepareTime,
  sumCalorise,
}) => {
  return (
    <div className="border rounded-3xl">
      {/* want to cooking */}
      <div className="p-3">
        <h1 className="text-2xl font-bold text-center">
          Want to cook: {wantToCookFoodDatas?.length}
        </h1>
        <hr className="mt-3" />
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row */}

              {wantToCookFoodDatas?.map((foodData, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{foodData.recipe_name}</td>
                  <td>{foodData.preparing_time} minutes</td>
                  <td>{foodData.calories} calories</td>
                  <td>
                    <button
                      onClick={() => handlePrepare(foodData.recipe_id)}
                      className="btn bg-green-500 px-10 rounded-3xl"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* want to cooking end */}

      {/* Currently  cooking */}
      <div className="p-3 mt-5">
        <h1 className="text-2xl font-bold text-center">
          Currently cooking: {currentlyCookingDatas?.length}
        </h1>
        <hr className="mt-3" />
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {currentlyCookingDatas?.map((foodData, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{foodData.recipe_name}</td>
                  <td>{foodData.preparing_time} minutes</td>
                  <td>{foodData.calories} calories</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Currently  cooking end */}

      <div className="flex justify-end gap-5 mr-5 font-bold">
        <div>
          <h1>Total Time = </h1>
          <h1>{sumPrepareTime} minutes</h1>
        </div>
        <div>
          <h1>Total Calories = </h1>
          <h1>{sumCalorise} calories</h1>
        </div>
      </div>
    </div>
  );
};

export default CookingTable;
