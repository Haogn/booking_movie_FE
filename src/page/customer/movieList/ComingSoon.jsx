import React from 'react'
import './ComingSoon.css'
import { Link } from 'react-router-dom'
function ComingSoon() {
    return (
        <><div className="title_movie">
            <h1>Phim sắp chiếu</h1>
            <h2>PHIM ĐANG CHIẾU</h2>
        </div>
            <div className="list_movie row">
                <div className="col-3">
                    <div className='body_booking'>
                        <img src="https://demoda.vn/wp-content/uploads/2022/02/anh-anh-da-den-cuoi.jpg" alt="" width={'100%'} height={'350px'} />
                        <Link to={'/detail-movie'}>
                            <h1>Tên phim</h1>
                        </Link>
                        <p><b>Thể loại :</b> <span> cái gì ý</span></p>
                        <p><b>Thời lượng :</b> <span>101</span> phút</p>
                        <p><b>Khởi chiếu :</b> <span>cái gì ý</span></p>
                    </div>
                    <div className='foot_booking'>
                        <span></span>
                        <p>
                            <button className='btn-booking'>Mua vé</button>
                        </p>
                    </div>
                </div>
            </div>
            <div className="pagination">

            </div>
        </>
    )
}

export default ComingSoon