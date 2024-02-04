import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUser, spenlingByYear } from "../../redux/api/service/customerRequest";

function Point() {
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;
  const dispatch = useDispatch();

  const [year, setYear] = useState("2024");

  const spenling = useSelector(
    (state) => state.customer.spenlingByYear.spenling
  );
  const userProfile = useSelector(
    (state) => state.customer.profile.userProfile
  );
  useEffect(() => {
    spenlingByYear(dispatch, token, year);
  }, [dispatch, token, year]);

  useEffect(() => {
    profileUser(dispatch, token);
  }, [dispatch, token]);

  const handleChange = (event) => {
    setYear(event.target.value); 
  };
  return userProfile ? (
    <div>
      <div className="bg-gray-900 text-white text-3xl font-medium font-mono text-center py-1">
        Điểm thưởng
      </div>
      <div className="border-b-2 border-gray-800 mt-3 pb-2">
      <h1 className="text-3xl font-bold font-mono">Tổng quan  
        <select onChange={handleChange} value={year}>
          <option className="text-1xl font-bold font-mono" value="2024">
            2024
          </option>
          <option className="text-1xl font-bold font-mono" value="2023">
            2023
          </option>
          <option className="text-1xl font-bold font-mono" value="2022">
            2022
          </option>
        </select>
      </h1>
      </div>

      <div className="flex justify-around pt-3">
        <div className="flex gap-5 ">
          <div className="text-lg font-normal font-mono">
            <p className="pt-3">Tổng chi tiêu:</p>
            <p className="pt-3">Điểm tích lũy:</p>
          </div>
          <div className="text-lg font-bold font-mono">
            <p className="pt-3">
              <span>{spenling}</span> VNĐ
            </p>
            <p className="pt-3">
              <span>{userProfile.point}</span> Point
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-[250px] h-[150px]"
            src="https://www.cgv.vn/skin//frontend/cgv/default/images/cgv-point.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  ):(<div>
    
  </div>);
}

export default Point;
