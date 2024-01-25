import React, { useState } from "react";
import { Link } from "react-router-dom";

function Point() {
  return (
    <div>
      <div className="bg-gray-900 text-white text-3xl font-medium font-mono text-center py-1">
        Điểm thưởng
      </div>
      <div className="border-b-2 border-gray-800 mt-3 pb-2">
        <h1 className="text-3xl font-bold font-mono">Tổng quan </h1>
      </div>

      <div className="flex justify-around pt-3">
        <div className="flex gap-5 ">
          <div className="text-lg font-normal font-mono">
            <p className="pt-3">Tổng chi tiêu 2024:</p>
            <p className="pt-3">Điểm sẽ nhận:</p>
            <p className="pt-3">Điểm hiện tại</p>
          </div>
          <div className="text-lg font-bold font-mono">
            <p className="pt-3">
              <span>0</span> VNĐ
            </p>
            <p className="pt-3">
              <span>0</span> Point
            </p>
            <p className="pt-3">
              <span>0</span> Point
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
  );
}

export default Point;
