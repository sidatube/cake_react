import React from 'react';
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <header id="header" className="section header">

            <div className="nendo">
                <div className="header-1">
                    <div className="container">
                        <div className="top-left-1">
                            <ul>
                                <li className="top-left-1-1">
                                    <a className="linktrang" href="/"><b>BÁNH SINH NHẬT TOKYO GÂTEAUX</b></a></li>
                                <li className="top-left-1-2">Hotline: 090.2040.990</li>
                                <li className="top-left-1-3">ĐC: 70B An Dương - Yên Phụ - Tây Hồ</li>
                            </ul>
                        </div>
                        <div className="top-right-1">
                            <ul>
                                <li><a href="https://www.facebook.com/tiembanhsinhnhattokyogateaux/"><i
                                    className="fab fa-facebook-f top-right-1-1"></i></a></li>
                                <li><a href="https://www.instagram.com/tokyo.gateaux/"><i
                                    className="fab fa-instagram top-right-1-2"></i></a></li>
                                <li><a href="mailto:tokyogateaux@gmail.com"><i
                                    className="fas fa-envelope top-right-1-3"></i></a></li>
                                <li><a href="tel:0902040990"><i className="fas fa-phone-alt top-right-1-4"></i></a></li>
                                <li><a href="https://www.pinterest.com/tokyogateaux/_created/"><i
                                    className="fab fa-pinterest top-right-1-5"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nentrang">
                <div className="container text-left">
                    <div className="top-left-2">
                        <ul>
                            <li className="top-left-2-0"><Link to="/"><img
                                src="imgcake/Untitled-7.jpg" height="48" width="225"/></Link></li>
                            <li className="top-left-2-1"><a className="top-left-2-2s" href="#"><i
                                className="fas fa-search"></i></a></li>
                            <li className="top-left-2-1"><a className="top-left-2-2s" href="https://tokyogateaux.vn/">TRANG
                                CHỦ</a></li>
                            <li className="top-left-2-1"><a className="top-left-2-2s" href="">BÁNH SINH NHẬT</a>
                                <ul className="sub-menu">
                                    <li className="ctt-4-1"><Link className="ctt-4-2s"
                                                               to="/bánh sinh nhật hiện đại">Bánh
                                        sinh nhật hiện đại</Link></li>
                                    <li className="ctt-4-1"><Link className="ctt-4-2s"
                                                               to="/bánh sinh nhật bé trai">Bánh sinh nhật bé trai</Link></li>
                                    <li className="ctt-4-1"><Link className="ctt-4-2s"
                                                               to="/bánh sinh nhật bé gái">Bánh
                                        sinh nhật bé gái</Link></li>
                                    <li className="ctt-4-1"><a className="ctt-4-2s"
                                                               href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật 2 tầng</a></li>
                                    <li className="ctt-4-1"><a className="ctt-4-2s"
                                                               href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật đồ chơi</a></li>
                                    <li className="ctt-4-1"><a className="ctt-4-2s"
                                                               href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật người lớn</a></li>
                                    <li className="ctt-4-1"><a className="ctt-4-2s"
                                                               href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật trẻ em</a></li>
                                    <li className="ctt-4-1"><a className="ctt-4-2s"
                                                               href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        tặng người yêu</a></li>
                                    <li className="ctt-4-1"><a className="ctt-4-2s"
                                                               href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật doanh nghiệp</a></li>
                                    <li className="ctt-4-1"><a className="ctt-4-2s"
                                                               href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật fondant</a></li>
                                    <li className="ctt-4-1"><a className="ctt-4-2s"
                                                               href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật in ảnh</a></li>
                                    <li className="ctt-4-1"><a className="ctt-4-2s"
                                                               href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật hoa socola</a></li>
                                    <li className="ctt-4-1"><a className="ctt-4-2s"
                                                               href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật oto</a></li>
                                    <li className="ctt-4-1"><a className="ctt-4-2s"
                                                               href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật siêu nhân</a></li>
                                    <li className="ctt-4-1"><a className="ctt-4-2s"
                                                               href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        tặng bà và mẹ</a></li>
                                    <li className="ctt-4-1"><a className="ctt-4-2s"
                                                               href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật kem sữa chua</a></li>
                                    <li className="ctt-4-1"><a className="ctt-4-2s"
                                                               href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        kỉ niệm ngày cưới</a></li>
                                    <li className="ctt-4-1-last"><a className="ctt-4-2s"
                                                                    href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật trường lớp</a></li>
                                </ul>
                            </li>
                            <li className="top-left-2-1"><a className="top-left-2-2s" href="">BLOG</a></li>
                            <li className="top-left-2-1"><a className="top-left-2-2s" href="">GIỎ HÀNG</a></li>
                        </ul>
                    </div>
                    <div className="top-right-2">
                        <ul>
                            <li><a className="top-right-2-1" href="https://tokyogateaux.vn/cart/"><i
                                className="fas fa-shopping-cart"></i></a></li>
                            <li className="top-right-2-2"><a className="top-right-2-3" href="#">CART / 0đ</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </header>

    );
}