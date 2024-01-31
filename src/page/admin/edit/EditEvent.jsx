import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editEvent } from '../../../redux/api/service/promotionRequest';

function EditEvent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const event = useSelector((state) => state.events.event.currentEvent)
    console.log(event);
    const [eventName, setEventName] = useState(event && event.eventName);
    const [description, setDescription] = useState(event && event.description);
    const [salePrice, setSalesPrice] = useState(event && event.salePrice);
    const [startDate, setStartDate] = useState(event && event.startDate);
    const [endDate, setEndDate] = useState(event && event.endDate);
    const storedToken = localStorage.getItem("acessToken");
    const token =
        storedToken && storedToken.startsWith('"') && storedToken.endsWith('"')
            ? storedToken.slice(1, -1)
            : storedToken;

    const hendleUpdate = (e) => {
        e.preventDefault();
        const eventEdit = {
            id: (event ? event.id : null),
            eventName: eventName,
            description: description,
            salePrice: salePrice,
            startDate: startDate,
            endDate: endDate
        }
        editEvent(eventEdit, dispatch, navigate, token)
    }
    return (
        <div>
            <div className="w-[50%] h-screen mx-auto ">
                <h1 className="text-center text-2xl font-mono font-semibold my-6 pb-3 border-b-2 border-gray-400">
                    Thay đổi thông tin sự kiện
                </h1>
                <form action="" onSubmit={hendleUpdate}>
                    <div className="mb-3">
                        <label className="form-label font-mono font-semibold">
                            Mã: <span>{event.eventCode}</span>
                        </label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label font-mono font-semibold">
                            Tên sự kiện: <span className="text-red-500">*</span>
                        </label>
                        <input
                            onChange={(e) => setEventName(e.target.value)}
                            value={eventName}
                            type="text"
                            className="form-control"
                            placeholder="Tên sự kiện"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label font-mono font-semibold">
                            Thời gian hiệu lực:
                        </label>
                        <div className="flex gap-3">
                            <div>
                                <label className="form-label font-mono font-semibold">
                                    Bắt đầu: <span className="text-red-500">*</span>
                                </label>
                                <input
                                    onChange={(e) => setStartDate(e.target.value)}
                                    value={startDate}
                                    type="date"
                                    className="form-control"
                                    placeholder="Bắt đầu"
                                />
                            </div>
                            <div>
                                <label className="form-label font-mono font-semibold">
                                    Kết thúc: <span className="text-red-500">*</span>
                                </label>
                                <input
                                    onChange={(e) => setEndDate(e.target.value)}
                                    value={endDate}
                                    type="date"
                                    className="form-control"
                                    placeholder="Kết thúc"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label font-mono font-semibold">
                            Giảm giá: <span className="text-red-500">*</span>
                        </label>
                        <select class="form-select" aria-label="Default select example"
                            onChange={(e) => setSalesPrice(e.target.value)}
                            value={salePrice}>
                            <option selected>Giảm giá</option>
                            <option value="5">5%</option>
                            <option value="10">10%</option>
                            <option value="15">15%</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label font-mono font-semibold">
                            Thông tin giảmg giá: <span className="text-red-500">*</span>
                        </label>
                        <input
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            type="text"
                            className="form-control"
                            placeholder="Thông tin giảm giá"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-dark font-mono mb-4 text-gray-950"
                    >
                        Thay đổi
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditEvent