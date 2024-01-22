import React from 'react'
import { Route, Routes } from "react-router-dom";
function Routes() {
  return (

      <Route path="/admin" element={<IndexCustomer />}>
          <Route index element={<HomeCustomer />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/profile" element={<IndexProfile />}>
            {/* <Route index element={<Profile />}></Route>
            <Route path="/point" element={<Point />}></Route> */}
          </Route>
        </Route>
   

  )
}

export default Routes