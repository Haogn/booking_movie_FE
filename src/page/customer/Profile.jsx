import React, { useState } from "react";

function Profile() {
  const [selectedTab, setSelectedTab] = useState("details"); // Default selected tab

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      <div className="w-[70%] h-[700px] mx-auto mt-4 ">
        <div className="flex w-full h-full gap-3">
          <div className="h-full w-[25%]  pl-2 ">
            <h1 className="text-3xl font-medium font-sans text-red-600 text-center ">
              TÀI KHOẢN CGV
            </h1>
            <div className="flex flex-col gap-3 mt-3">
              <p
                className={`cursor-pointer font-medium text-xl font-mono pl-3 py-2 ${
                  selectedTab === "details"
                    ? "text-white bg-red-500 py-2 rounded-md"
                    : ""
                }`}
                onClick={() => handleTabClick("details")}
              >
                CHI TIẾT TÀI KHOẢN
              </p>
              <p
                className={`cursor-pointer font-medium text-xl font-mono pl-3 py-2 ${
                  selectedTab === "points"
                    ? "text-white bg-red-500 py-2 rounded-md"
                    : ""
                }`}
                onClick={() => handleTabClick("points")}
              >
                ĐIỂM THƯỞNG
              </p>
              <p
                className={`cursor-pointer font-medium text-xl font-mono pl-3 py-2 ${
                  selectedTab === "transactions"
                    ? "text-white bg-red-500 py-2 rounded-md"
                    : ""
                }`}
                onClick={() => handleTabClick("transactions")}
              >
                LỊCH SỬ GIAO DỊCH
              </p>
            </div>
          </div>
          <div className="h-full w-[75%] ">
            <div className="bg-gray-900 text-white text-3xl font-medium font-mono text-center py-1">
              Thông tin tài khoản
            </div>
            <div className="mt-3">
              <form>
                <div className="row">
                  {/* Cột 1 */}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="input1"
                        className="form-label font-mono font-semibold"
                      >
                        Tên <span className="text-red-500">*</span>
                      </label>
                      <input type="text" className="form-control" id="input1" />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="input2"
                        className="form-label font-mono font-semibold"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input type="text" className="form-control" id="input2" />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="input2"
                        className="form-label font-mono font-semibold"
                      >
                        Giới tính <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="genderMale"
                            name="gender"
                            value="Nam"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="genderMale"
                          >
                            Nam
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="genderFemale"
                            name="gender"
                            value="Nữ"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="genderFemale"
                          >
                            Nữ
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cột 2 */}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="input3"
                        className="form-label font-mono font-semibold"
                      >
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <input type="text" className="form-control" id="input3" />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="input4"
                        className="form-label font-mono font-semibold"
                      >
                        Tên <span className="text-red-500">*</span>
                      </label>
                      <input type="text" className="form-control" id="input4" />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="input4"
                        className="form-label font-mono font-semibold"
                      >
                        Sinh nhật <span className="text-red-500">*</span>
                      </label>
                      <p className="font-mono font-semibold">27/02/1998</p>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
