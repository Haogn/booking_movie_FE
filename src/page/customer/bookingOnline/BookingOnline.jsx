import React from 'react'
import './BookingOnline.css'
import { Outlet } from 'react-router-dom'
function BookingOnline() {
    return (
        <>
            <div className='booking_online'>
                <div className="head_booking_online">
                    <h1>BOOKING ONLINE</h1>
                </div>
                <div class="product-primary">
                    <p>CGV Vincom Thủ Đức | Cinema 1 | Số ghế (<em>175</em>/175)</p>
                    <p>23/01/2024 14:30 ~ 23/01/2024 16:37</p>
                </div>
                <Outlet></Outlet>
                <div className="foot_booking_online">
                    <div>
                        <div className="previous">
                            <i class="fas fa-chevron-left"></i>
                            <span>previous</span>
                        </div>
                    </div>
                    {/*  */}
                    <table class="info-wrapper">
                        <tbody>
                            <tr>
                                <td>
                                    <img src="https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/dc33889b0f8b5da88052ef70de32f1cb/p/o/poster_mat_vu_ong_5.jpg" alt="" />
                                </td>
                                <td>
                                    <ul>
                                        <li>MẬT VỤ ONG</li>
                                        <li>2D</li>
                                        <li>T18</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/*  */}
                    <table class="info-wrapper">
                        <tbody>
                            <tr>
                                <td class="label">Rạp</td>
                                <td>CGV Vincom Thủ Đức</td>
                            </tr>
                            <tr>
                                <td class="label">Suất chiếu</td>
                                <td>
                                    14:30, 23/01/2024</td>
                            </tr>
                            <tr>
                                <td class="label">Phòng chiếu</td>
                                <td>Cinema 1</td>
                            </tr>
                            <tr class="block-seats">
                                <td class="label">Ghế</td>
                                <td class="data"><span>Thường</span><span>B10</span></td>
                            </tr>
                        </tbody>
                    </table>
                    {/*  */}
                    <table class="info-wrapper">
                        <thead>
                            <tr class="block-box">
                                <td class="label">Giá ghế</td>
                                <td class="price">75.000₫</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr class="block-con">
                                <td class="label">Combo</td>
                                <td class="price">0đ</td>
                            </tr>
                        </tbody>

                        <tfoot class="block-price">
                            <tr>
                                <td class="label">Tổng</td>
                                <td class="price">75.000₫</td>
                            </tr>
                        </tfoot>
                    </table>
                    {/*  */}
                    <div>
                        <div className="next">
                            <i class="fas fa-chevron-right"></i>
                            <span>next</span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default BookingOnline