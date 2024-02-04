import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications, readNotifications } from "../../redux/api/service/customerRequest";


function Notification() {
  const [showModal, setShowModal] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const storedToken = localStorage.getItem("accessToken");
  const token = storedToken && storedToken.startsWith('"') && storedToken.endsWith('"') ? storedToken.slice(1, -1) : storedToken;
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.customer.getNotifications.listNotification);

  useEffect(() => {
    getNotifications(dispatch, token);
  }, [dispatch, token]);

  const handleReadMore = (notification) => {
    console.log(notification.id);
    readNotifications(dispatch, notification.id);
    setSelectedNotification(notification);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedNotification(null); // Clear selected notification on close
  };

  return (
    <div>
      <div className="bg-gray-900 text-white text-3xl font-medium font-mono text-center py-1">
        Thông báo
      </div>
      {notifications && notifications.map((notification, index) => (
        <div className="w-[80%] h-[50px] mx-auto mt-3 " key={index}>
          <div className="flex">
            <div className="font-mono font-medium mt-2 pl-2">
              <p>
                <span>
                  {notification.read === false ? (
                    <i className="fa-solid fa-envelope"></i>
                  ) : (
                    <i className="fa-solid fa-envelope-open"></i>
                  )}
                </span>{" "}
                {notification.title}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleReadMore(notification)}
                >
                  {" "}
                  Đọc thêm
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
      {showModal && selectedNotification && (
        <div className={`modal ${showModal ? "d-block" : ""}`} tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedNotification.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                {selectedNotification.message}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;
