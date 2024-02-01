import React, { useState } from "react";

function Notification() {
  const [showFullContent, setShowFullContent] = useState(false);

  const notificationContent = `Bạn nhận được 1 voucher giá trị 200.000 VNĐ. Có hiệu lực từ ngày ... đến ... . Chương trình áp lực cho tất cả các phim . Chào bạn !!!`;

  const handleReadMore = () => {
    setShowFullContent(true);
  };

  const closeModal = () => {
    setShowFullContent(false);
  };

  return (
    <div>
      <div className="bg-gray-900 text-white text-3xl font-medium font-mono text-center py-1">
        Thông báo
      </div>
      <div className="w-[80%] h-[500px] mx-auto mt-3 ">
        <div className="flex">
          <div className="font-mono font-medium mt-2 pl-2">
            <p>
              <span>
                {!showFullContent ? (
                  <i className="fa-solid fa-envelope"></i>
                ) : (
                  <i className="fa-solid fa-envelope-open"></i>
                )}
              </span>{" "}
              {notificationContent}
              {!showFullContent && (
                <span
                  className="text-blue-500 cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#notificationModal"
                  onClick={handleReadMore}
                >
                  {" "}
                  Đọc thêm
                </span>
              )}
              {/* Bootstrap Modal */}
              <div
                className="modal fade"
                id="notificationModal"
                tabIndex="-1"
                aria-labelledby="notificationModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="notificationModalLabel">
                        Thông báo
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>{notificationContent}</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary text-gray-800"
                        data-bs-dismiss="modal"
                        onClick={closeModal}
                      >
                        Đóng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
