import React from "react";
import {Link} from "react-router-dom";

export  default function Asidetu(){
    return(
        <aside id="aside">
            <aside className="ctt">
                <div className="ctt-body text-left ">
                    <h4><b className="ctt-1">TÌM SẢN PHẨM</b></h4>
                    <div className="ctt-2"></div>
                    <form className="ctt-3" method="get" action="https://tokyogateaux.vn/" role="search">
                        <div>
                            <input className="ctt-3-1" type="search" placeholder="Tìm sản phẩm"/>
                                <button className="ctt-3-2" type="submit" aria-label="submit">
                                    <i className="fas fa-search ctt-3-3"></i>
                                </button>
                        </div>
                    </form>
                    <div className="ctt-4">
                        <h4><b className="ctt-1">DANH MỤC SẢN PHẨM</b></h4>
                        <div className="ctt-2"></div>
                        <ul>
                            <li className="ctt-4-1"><Link className="ctt-4-2"
                                                       to="/bánh sinh nhật hiện đại">Bánh
                                sinh nhật hiện đại</Link></li>
                            <li className="ctt-4-1"><Link className="ctt-4-2"
                                                       to="/bánh sinh nhật bé trai">Bánh
                                sinh nhật bé trai</Link></li>
                            <li className="ctt-4-1"><Link className="ctt-4-2"
                                                       to="/bánh sinh nhật bé gái">Bánh
                                sinh nhật bé gái</Link></li>
                            <li className="ctt-4-1"><a className="ctt-4-2"
                                                       href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                sinh nhật 2 tầng</a></li>
                            <li className="ctt-4-1"><a className="ctt-4-2"
                                                       href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                sinh nhật đồ chơi</a></li>
                            <li className="ctt-4-1"><a className="ctt-4-2"
                                                       href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                sinh nhật người lớn</a></li>
                            <li className="ctt-4-1"><a className="ctt-4-2"
                                                       href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                sinh nhật trẻ em</a></li>
                            <li className="ctt-4-1"><a className="ctt-4-2"
                                                       href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                tặng người yêu</a></li>
                            <li className="ctt-4-1"><a className="ctt-4-2"
                                                       href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                sinh nhật doanh nghiệp</a></li>
                            <li className="ctt-4-1"><a className="ctt-4-2"
                                                       href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                sinh nhật fondant</a></li>
                            <li className="ctt-4-1"><a className="ctt-4-2"
                                                       href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                sinh nhật in ảnh</a></li>
                            <li className="ctt-4-1"><a className="ctt-4-2"
                                                       href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                sinh nhật hoa socola</a></li>
                            <li className="ctt-4-1"><a className="ctt-4-2"
                                                       href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                sinh nhật oto</a></li>
                            <li className="ctt-4-1"><a className="ctt-4-2"
                                                       href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                sinh nhật siêu nhân</a></li>
                            <li className="ctt-4-1"><a className="ctt-4-2"
                                                       href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                tặng bà và mẹ</a></li>
                            <li className="ctt-4-1"><a className="ctt-4-2"
                                                       href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                sinh nhật kem sữa chua</a></li>
                            <li className="ctt-4-1"><a className="ctt-4-2"
                                                       href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                kỉ niệm ngày cưới</a></li>
                            <li className="ctt-4-1"><a className="ctt-4-2"
                                                       href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                sinh nhật trường lớp</a></li>
                        </ul>
                    </div>
                </div>
            </aside>
        </aside>    );
}