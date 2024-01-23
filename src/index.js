import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Thêm import cho Provider
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store"; // Thêm import cho store

const root = ReactDOM.createRoot(document.getElementById("root"));
// Sử dụng root.hydrate nếu nội dung được server-rendered
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// Nếu bạn muốn đo lường hiệu suất trong ứng dụng của mình, hãy truyền một hàm
// để ghi lại kết quả (ví dụ: reportWebVitals(console.log))
// hoặc gửi đến một điểm cuối phân tích. Tìm hiểu thêm tại: https://bit.ly/CRA-vitals
reportWebVitals();
