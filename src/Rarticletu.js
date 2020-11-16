import React from "react";
export default function Rarticletu(){
    return(
        <article className="article text-left">
            <div className="row">
                <div className="r-item col-md-6">
                    <h2>
                        <a href="#"><img src="../imgs/b1.jpg" /></a>
                        <div className="r-article-1">
                            <a><i className="fas fa-heart"></i></a>
                        </div>
                    </h2>

                </div>
                <div className="col-md-6">
                    <h2 className="text-2"><b>Bánh sinh nhật Robocar Poli sz16 cao ~10cm</b></h2>
                    <div className="ctt-2"></div>
                    <h3 className="text-2">300.000₫</h3>
                    <p className="text-3">(Giá trên chưa bao gồm phí vận chuyển) – Nhận đặt bánh lấy ngay tại cửa hàng
                        sau 1h</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p className="text-3">Thông tin chi tiết:</p>
                    <p className="text-4">
                        _ Bánh cốt vani, kem tươi, trang trí đồ chơi<br/>
                        _ Kích thước: size 16, 4lớp (cao ~10cm)
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p className="text-3">Các kích thước khác: Liên hệ cửa hàng để được tư vấn</p>
                    <div className="amount text-center">
                        <ul>
                            <li className="amount-1">-</li>
                            <li><input className="amount-2" type="number" placeholder="1"/></li>
                            <li className="amount-1">+</li>
                            <button className="amount-3 text-uppercase">Add To Cart</button>
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    )
}