import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEvent, getEvent, selectAllEvent } from '../../../redux/api/service/promotionRequest';
import { useNavigate } from 'react-router-dom';

function ListEvent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0)
    const storedToken = localStorage.getItem("acessToken");
    const token =
        storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
            ? storedToken.slice(1, -1)
            : storedToken;

    const listEvent = useSelector((state) => state.events.event.listEventSelect)
    const [check, setCheck] = useState(true);
    const hendleSubmit = (e) => {
        e.preventDefault();
        setCheck(!check)
    }
    useEffect(() => {
        selectAllEvent(dispatch, token, page, search)
        setSearch("")
    }, [dispatch, page, check])

    const hendleEdit = (id) => {
        return () => {
            getEvent(dispatch, id, navigate);
        };
    }

    const hendleDelete = (id) => {
        return async () => {
            try {
                await deleteEvent(id, dispatch, navigate, token);
                selectAllEvent(dispatch, token, page, search);
            } catch (error) {
                console.error("Error deleting dish:", error);
            }
        }
    }
    return (
        listEvent && <div>
            <div className="w-full h-full px-2 ">
                <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
                    Danh sách sự kiện
                </h1>
                <nav className="navbar bg-body-tertiary mt-3">
                    <div className="container-fluid">
                        <a className="navbar-brand"></a>
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
                                <th scope='col'>STT</th>
                                <th scope="col">Mã</th>
                                <th scope="col">Tên sự kiện</th>
                                <th scope="col">Giá giảm</th>
                                <th scope="col">Thời gian Bắt đầu</th>
                                <th scope="col">Thời gian kết thúc</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listEvent.content.map((e, i) =>
                                    <tr className="text-center ">
                                        <td>{i + 1}</td>
                                        <td>{e.eventCode}</td>
                                        <td>{e.eventName}</td>
                                        <td>{e.salePrice}</td>
                                        <td>{e.startDate}</td>
                                        <td>{e.endDate}</td>
                                        <td colSpan={2}>
                                            <button
                                                onClick={hendleEdit(e.id)}
                                                type="button"
                                                className="btn btn-success text-green-600 mr-2"
                                            >
                                                <i className="fa-solid fa-pen-to-square "></i>
                                            </button>
                                            <button
                                                onClick={hendleDelete(e.id)}
                                                type="button"
                                                className=" btn btn-danger text-red-600"
                                            >
                                                <i className="fa-regular fa-trash-can"></i>
                                            </button>
                                        </td>
                                    </tr>

                                )
                            }
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
                                {listEvent.number + 1}/{listEvent.totalPages}
                            </a>
                        </li>
                        <li className="page-item" onClick={() => setPage(prevPage => (prevPage < listEvent.totalPages - 1 ? prevPage + 1 : prevPage))}>
                            <a className="page-link text-gray-700" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ListEvent