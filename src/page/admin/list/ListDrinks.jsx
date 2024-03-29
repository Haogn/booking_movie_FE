import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDish, selectAllDish, deleteDish } from "../../../redux/api/service/dishRequest";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ListDrinks() {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const storedToken = localStorage.getItem("acessToken");
  const token =
    storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
      ? storedToken.slice(1, -1)
      : storedToken;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listDish = useSelector((state) => state.dishs.dish.listDishSelect)
  console.log(listDish);
  const [check, setCheck] = useState(true);
  const hendleSubmit = (e) => {
    e.preventDefault();
    setCheck(!check)
  }
  useEffect(() => {
    selectAllDish(dispatch, token, page, search)
    setSearch("")
  }, [dispatch, page, check]
  )

  const hendleEdit = (id) => {
    return () => {
      getDish(dispatch, token, id, navigate);
    };
  }

  const hendleDelete = (id) => {
    return async () => {
      try {
        await deleteDish(id, dispatch, navigate, token, toast);
        selectAllDish(dispatch, token, page, search);
      } catch (error) {
        console.error("Error deleting dish:", error);
      }
    }
  }
  return (
    listDish && <div>
      <ToastContainer className="custom-toast-container" />
      <div className="w-full h-full px-2 ">
        <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
          Danh sách
        </h1>
        <nav className="navbar bg-body-tertiary mt-3">
          <div className="container-fluid">
            <Link to={"/admin/create-food"}>
              <a className="btn btn-outline-dark font-mono">Thêm mới</a>
            </Link>
            <form className="d-flex" role="search" onSubmit={hendleSubmit}>
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="form-control me-2"
                type="search"
                placeholder="Tìm Kiếm"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </nav>
        <div class="container mt-4">
          <table class="table table-hover font-mono">
            <thead>
              <tr className="text-center">
                <th scope="col">Id</th>
                <th scope="col">Ảnh</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Giá</th>
                <th scope="col">Thể loại</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {listDish.content.map((dish, i) =>
                <tr className="text-center" key={i}>
                  <td>{i + 1}</td>
                  <td>{dish.image && <img src={dish.image} alt={`Image of ${dish.dishName}`} className="kfc" />}</td>
                  <td>{dish.dishName}</td>
                  <td>
                    <span>{dish.price.toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    })}</span>
                  </td>
                  <td>{dish.category.categoryName}</td>
                  <td colSpan={2}>
                    <button
                      onClick={hendleEdit(dish.id)}
                      type="button"
                      className="btn btn-success text-green-600 mr-2"
                    >
                      <i className="fa-solid fa-pen-to-square "></i>
                    </button>

                    <button
                      type="button"
                      className=" btn btn-danger text-red-600"
                      data-bs-toggle="modal"
                      data-bs-target={`#exampleModal-${dish.id}`}
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                    {/* modal xoá */}
                    <div
                      className="modal fade"
                      id={`exampleModal-${dish.id}`}
                      tabIndex="-1"
                      aria-labelledby={`exampleModalLabel-${dish.id}`}
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            ></h1>
                            <button
                              type="button"
                              className="btn-close text-gray-700"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            Bạn chắc chắn muốn xoá sản phẩm{" "}
                            <span>{dish.dishName}</span>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              data-bs-dismiss="modal"
                              className="btn btn-secondary text-gray-700"
                              onClick={hendleDelete(dish.id)}
                            >
                              Xoá
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <nav
          className="flex justify-center"
          aria-label="Page navigation example"
        >
          <ul className="pagination">
            <li className="page-item" onClick={() => setPage(prevPage => (prevPage > 0 ? prevPage - 1 : prevPage))}>
              <a
                className="page-link text-gray-700"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-gray-700" href="#">
                {listDish?.totalPages === 0 ? 0 : listDish.number + 1}/{listDish.totalPages}
              </a>
            </li>
            <li className="page-item" onClick={() => setPage(prevPage => (prevPage < listDish.totalPages - 1 ? prevPage + 1 : prevPage))}>
              <a className="page-link text-gray-700" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ListDrinks;
