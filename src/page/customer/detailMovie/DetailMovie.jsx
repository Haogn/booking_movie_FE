import React from 'react'
import './DetailMovie.css'
function DetailMovie() {
    return (
        <div className="detail_movie">
            <div className="title_movie">
                <h1>Nội Dung Phim</h1>
            </div>
            <div className='body_detail_movie row'>
                <div className="left col-3">
                    <img src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/a/w/aw-69k-700x1000.jpg" alt="" />
                </div>
                <div className="right col-9">
                    <div className="tit">
                        <h1>Tên phim</h1>
                    </div>
                    <div className="detail">
                        <p><b>Đạo diễn: </b><span>Park Jin-pyo</span></p>
                        <p><b>Diễn viên: </b><span>Park Jin-pyo</span></p>
                        <p><b>Thể loại: </b><span>Hành động</span></p>
                        <p><b>Khởi chiếu: </b><span>29/01/2024</span></p>
                        <p><b>Thời lượng: </b><span>120</span> phút</p>
                        <p><b>Ngôn Ngữ: </b><span>VI</span></p>
                        <p><b>Rated: </b><span>18 +</span> phút</p>
                        <p>
                            <div className='b'><button className='booking-btn'>Mua vé</button></div>
                        </p>
                    </div>
                </div>
            </div>
            <div className="description">
                <h1>Mô tả</h1>
            </div>
            <p className='des'>Si-min (do Shin Hae-sun thủ vai) là một võ sĩ quyền anh đầy triển vọng nhưng đã từ bỏ quyền thi đấu tại kỳ Thế vận hội Olympic để lấy tiền trả nợ cho cha. Từ đó, Si-min cũng nhận ra rằng, cuộc sống vốn không công bằng và “công lý không thể mài ra cơm”. Si-min gạt phăng giấc mơ trở thành võ sĩ quyền anh và quyết tâm trở thành giáo viên, với mong muốn về một cuộc sống ổn định hơn. Cô trở thành giáo viên hợp đồng của một trường trung học có tiếng cùng mục tiêu trở thành giáo viên chính thức ở đây. Để có thể nhanh chóng hoàn thành nguyện vọng, cô đã nỗ lực kìm nén cái tôi xuống đáy, luôn mỉm cười cho qua, bất chấp mọi tình huống trớ trêu xảy đến với mình. Tuy nhiên, Su-gang (do Lee Jun-young thủ vai) - kẻ cầm đầu của một băng đảng quậy phá, chuyên đi bắt nạt và hành hạ người yếu thế đã phá vỡ quy tắc của Si-min. Không thể chịu đựng được những hành vi bạo lực học đường của Su-gang, Si-min đeo lên một chiếc mặt nạ mèo và dạy cho tên côn đồ một bài học đáng nhớ. Nhận thấy quyền lực của mình bị đe dọa, Su-gang điên cuồng tìm kiếm người đeo mặt nạ mèo, Si-min đứng trước nguy cơ bị bại lộ danh tính và phải đối mặt với sự lựa chọn giữa “CÔNG LÝ hay CÔNG VIỆC.”</p>
        </div>
    )
}

export default DetailMovie