import React from "react";
import {Link} from "react-router-dom";

export default function Section(){
    return(
        <section className="section main">
            <div className="col-md-12 margintopbot "></div>

            <div className="container text-left">
                <aside className="aside">
                    <div className="search">
                        <h4 className="tuade1">TÌM SẢN PHẨM</h4>
                        <div className="gachnho"></div>
                        <p className="paddingtop2"></p>
                        <form method="get" className="searchform" action="WEB-của-ta" role="search">

                            <input type="search" className="col-md-10 vien1px" name="s" value="" id="s"
                                   placeholder="Tìm sản phẩm" autoComplete="off"/>

                                <button type="submit" className="nutsearch btn-danger vien1px" aria-label="Submit">
                                    <i className="fas fa-search"></i></button>
                        </form>
                        <p className="paddingtop2"></p>
                        <h4 className="tuade1">DANH MỤC BÁNH SINH NHẬT</h4>
                        <div className="gachnho"></div>
                        <p className="paddingtop2"></p>
                        <ul className="ulnostyle font-size">
                            <li type="">Bánh sinh nhật
                                <button onClick={myFunction} className="nutan" id="toggle">
                                    <i className="fas fa-chevron-down"></i>
                                </button>
                                <ul id="anhien" className="ulnostyle2">
                                    <li className="ctt-4-1a"><Link className="ctt-4-2"
                                                                to="/bánh sinh nhật hiện đại">Bánh
                                        sinh nhật hiện đại</Link></li>
                                    <li className="ctt-4-1a"><Link className="ctt-4-2" to="/bánh sinh nhật bé trai">Bánh sinh
                                        nhật bé trai</Link></li>
                                    <li className="ctt-4-1a"><Link className="ctt-4-2"
                                                                to="/bánh sinh nhật bé gái">Bánh
                                        sinh nhật bé gái</Link></li>
                                    <li className="ctt-4-1a"><a className="ctt-4-2"
                                                                href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật 2 tầng</a></li>
                                    <li className="ctt-4-1a"><a className="ctt-4-2"
                                                                href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật đồ chơi</a></li>
                                    <li className="ctt-4-1a"><a className="ctt-4-2"
                                                                href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật người lớn</a></li>
                                    <li className="ctt-4-1a"><a className="ctt-4-2"
                                                                href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật trẻ em</a></li>
                                    <li className="ctt-4-1a"><a className="ctt-4-2"
                                                                href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        tặng người yêu</a></li>
                                    <li className="ctt-4-1a"><a className="ctt-4-2"
                                                                href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật doanh nghiệp</a></li>
                                    <li className="ctt-4-1a"><a className="ctt-4-2"
                                                                href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật fondant</a></li>
                                    <li className="ctt-4-1a"><a className="ctt-4-2"
                                                                href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật in ảnh</a></li>
                                    <li className="ctt-4-1a"><a className="ctt-4-2"
                                                                href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật hoa socola</a></li>
                                    <li className="ctt-4-1a"><a className="ctt-4-2"
                                                                href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật oto</a></li>
                                    <li className="ctt-4-1a"><a className="ctt-4-2"
                                                                href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật siêu nhân</a></li>
                                    <li className="ctt-4-1a"><a className="ctt-4-2"
                                                                href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        tặng bà và mẹ</a></li>
                                    <li className="ctt-4-1a"><a className="ctt-4-2"
                                                                href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật kem sữa chua</a></li>
                                    <li className="ctt-4-1a"><a className="ctt-4-2"
                                                                href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        kỉ niệm ngày cưới</a></li>
                                    <li className="ctt-4-1-last"><a className="ctt-4-2"
                                                                    href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/banh-3-tang/">Bánh
                                        sinh nhật trường lớp</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </aside>
                <article className="content">
                    <div className="content-body row borderleft2">
                        <div className="col-md-12 row">
                            <h2 className="bgachngang">
                                <b></b>
                                <span>BÁNH SINH NHẬT BÁN CHẠY TRONG THÁNG</span>
                                <b></b>
                            </h2>
                            <div className="row">
                                <div className="col-md-3 text-center">
                                    <img src="imgcake/bánh-rượu-Oreo-sz16-1-768x768.jpg"/>
                                        <p className="chumo"><b>Bánh Sinh Nhật</b></p>
                                        <p className="tenbanh ">
                                            <a className="linkden"
                                               href="https://tokyogateaux.vn/san-pham/banh-ruou-chivas-sz16/">Bánh sinh
                                                nhật rượu Chivas socola sz16</a></p>
                                        <span className=" row "><bdi><b>230.000₫</b></bdi></span>
                                        <a href="#" className="add-to-cart text-uppercase">Add To Cart</a>
                                </div>
                                <div className="col-md-3 text-center">
                                    <img src="imgcake/73-768x768.jpg"/>
                                        <p className="chumo"><b>Bánh Sinh Nhật</b></p>
                                        <p className="tenbanh ">
                                            <a className="linkden"
                                               href="https://tokyogateaux.vn/san-pham/banh-sinh-nhat-cong-chua-elsa-ao-tim-sz18/">Bánh
                                                sinh nhật công chúa Elsa áo tím sz18</a></p>
                                        <span className=" row "><bdi><b>340.000₫</b></bdi></span>
                                        <a href="#" className="add-to-cart text-uppercase">Add To Cart</a>
                                </div>
                                <div className="col-md-3 text-center">
                                    <img src="imgcake/Bánh-sinh-nhật-hiện-dại-hoa-kem-tươi-768x768.jpg" />

                                    <p className="chumo"><b>Bánh Sinh Nhật</b></p>
                                        <p className="tenbanh ">
                                            <a className="linkden"
                                               href="https://tokyogateaux.vn/san-pham/banh-ruou-chivas-sz16/">Bánh hồng
                                                trà sz18</a></p>
                                        <span className=" row "><bdi><b>280.000₫</b></bdi></span>
                                        <a href="#" className="add-to-cart text-uppercase">Add To Cart</a>
                                </div>
                                <div className="col-md-3 text-center">
                                    <img
                                        src="https://tokyogateaux.vn/wp-content/uploads/2020/08/ba%CC%81nh-sinh-nha%CC%A3%CC%82t-ca%CC%89nh-sa%CC%81t-bie%CC%82%CC%81n-hi%CC%80nh-POLI-768x768.jpg"
                                        alt=""/>
                                        <p className="chumo"><b>Bánh Sinh Nhật</b></p>
                                        <p className="tenbanh ">
                                            <a className="linkden"
                                               href="https://tokyogateaux.vn/san-pham/banh-sinh-nhat-robocar-poli-sz16-cao-10cm/">Bánh
                                                sinh nhật Robocar Poli sz16 cao ~10cm</a></p>
                                        <span className=" row "><bdi><b>300.000₫</b></bdi></span>
                                        <a href="#" className="add-to-cart text-uppercase">Add To Cart</a>
                                </div>
                                <a className="xem-them" href="#">Xem thêm...</a>
                            </div>
                        </div>
                        <div className="row col-md-12">
                            <h2 className="bgachngang">
                                <b></b>
                                <span>MẪU BÁNH SINH NHẬT MỚI NHẤT</span>
                                <b></b>
                            </h2>
                            <div className="row">
                                <div className="col-md-3 text-center">
                                    <img
                                        src="https://tokyogateaux.vn/wp-content/uploads/2020/08/Ba%CC%81nh-sinh-nha%CC%A3%CC%82t-doa%CC%80n-ta%CC%80u-va%CC%80-bie%CC%82%CC%89n-ca%CC%89-3-768x768.jpg"
                                        alt=""/>
                                        <p className="chumo"><b>Bánh Sinh Nhật</b></p>
                                        <p className="tenbanh ">
                                            <a className="linkden"
                                               href="https://tokyogateaux.vn/san-pham/banh-doan-tau-va-bien-ca-sz16-10cm/">Bánh
                                                đoàn tàu và biển cả sz16 ~10cm</a></p>
                                        <span className=" row "><bdi><b>340.000₫</b></bdi></span>
                                        <a href="#" className="add-to-cart text-uppercase">Add To Cart</a>
                                </div>
                                <div className="col-md-3 text-center">
                                    <img src="https://tokyogateaux.vn/wp-content/uploads/2020/09/me%CC%A3-768x768.jpg"
                                         alt=""/>
                                        <p className="chumo"><b>Bánh Sinh Nhật</b></p>
                                        <p className="tenbanh ">
                                            <a className="linkden"
                                               href="https://tokyogateaux.vn/san-pham/banh-sinh-nhat-me-yeu-sz18/">Bánh
                                                sinh nhật mẹ yêu sz18
                                            </a></p>
                                        <span className=" row "><bdi><b>330.000₫</b></bdi></span>
                                        <a href="#" className="add-to-cart text-uppercase">Add To Cart</a>
                                </div>
                                <div className="col-md-3 text-center">
                                    <img src="https://tokyogateaux.vn/wp-content/uploads/2020/10/109-768x768.jpg"
                                         alt=""/>
                                        <p className="chumo"><b>Bánh Sinh Nhật</b></p>
                                        <p className="tenbanh ">
                                            <a className="linkden"
                                               href="https://tokyogateaux.vn/san-pham/banh-sinh-nhat-sieu-nhan-nhi-sz22x28-40-mieng/">Bánh
                                                sinh nhật siêu nhân nhí sz22x28 40 miếng
                                            </a></p>
                                        <span className=" row "><bdi><b>540.000₫</b></bdi></span>
                                        <a href="#" className="add-to-cart text-uppercase">Add To Cart</a>
                                </div>
                                <div className="col-md-3 text-center">
                                    <img
                                        src="https://tokyogateaux.vn/wp-content/uploads/2020/08/Ba%CC%81nh-sinh-nha%CC%A3%CC%82t-vie%CC%82%CC%80n-hoa-kem-su%CC%9B%CC%83a-chua-lovely-june-2-768x768.jpg"
                                        alt=""/>
                                        <p className="chumo"><b>Bánh Sinh Nhật</b></p>
                                        <p className="tenbanh ">
                                            <a className="linkden"
                                               href="https://tokyogateaux.vn/san-pham/banh-sinh-nhat-vien-hoa-kem-sua-chua-sz20/">Bánh
                                                sinh nhật viền hoa kem sữa chua sz20
                                            </a></p>
                                        <span className=" row "><bdi><b>300.000₫</b></bdi></span>
                                        <a href="#" className="add-to-cart text-uppercase">Add To Cart</a>
                                </div>
                                <a className="xem-them" href="#">Xem thêm...</a>
                            </div>
                        </div>
                        <div className="row col-md-12">
                            <h2 className="bgachngang">
                                <b></b>
                                <span>DANH MỤC BÁNH SINH NHẬT</span>
                                <b></b>
                            </h2>
                            <div className="row">
                                <a className="linkden" href="#">
                                    <div className="col-md-3 text-center">
                                        <img
                                            src="https://tokyogateaux.vn/wp-content/uploads/2020/08/Bánh-sinh-nhật-máy-bay-siêu-dẳng-3-500x500.jpg"
                                            alt=""/>
                                            <h3 className="khubanh ">
                                                Bánh sinh nhật trẻ em
                                            </h3>
                                    </div>
                                </a>
                                <a className="linkden" href="#">
                                    <div className="col-md-3 text-center">
                                        <img
                                            src="https://tokyogateaux.vn/wp-content/uploads/2020/08/Bánh-sinh-nhật-ngôi-sao-bạc-500x500.jpg"
                                            alt=""/>
                                            <h3 className="khubanh ">
                                                Bánh sinh nhật người lớn
                                            </h3>
                                    </div>
                                </a>
                                <a className="linkden" href="#">
                                    <div className="col-md-3 text-center">
                                        <img
                                            src="https://tokyogateaux.vn/wp-content/uploads/2020/08/Bánh-sinh-nhật-vẽ-hình-Kitty-500x500.jpg"
                                            alt=""/>
                                            <h3 className="khubanh ">
                                                Bánh sinh nhật bé gÁI
                                            </h3>
                                    </div>
                                </a>
                                <a className="linkden" href="#">
                                    <div className="col-md-3 text-center">
                                        <img
                                            src="https://tokyogateaux.vn/wp-content/uploads/2020/08/24.6.16-500x500.jpg"
                                            alt=""/>
                                            <h3 className="khubanh ">
                                                Bánh sinh nhật bé trai
                                            </h3>
                                    </div>
                                </a>
                                <a className="xem-them" href="#">Xem thêm...</a>
                                <div className="col-md-12">
                                    <h2 className="bgachngang"><b></b></h2>
                                </div>
                            </div>

                        </div>


                        <div className="row col-md-12 paddingtop">
                            <div className="row">
                                <div className="col-md-4 marginbot">
                                    <div className="boxcon height300px">
                                        <div className=" hovericon  fb size40"><i
                                            className="tron far fa-grin-stars"></i></div>
                                        <h4 className="uppercase center">Đặt bánh sinh nhật lấy ngay trong 30'</h4>
                                        <p>Bạn không có nhiều thời gian để ở lại cửa hàng nhưng lại muốn có một chiếc
                                            bánh sinh nhật phù hợp nhất. Tokyo Gâteaux sẽ giúp bạn phần còn lại để có
                                            một chiếc bánh hài hòa nhất. Chỉ mất tầm 30 phút – 60 phút, bánh kem sẽ được
                                            hoàn thành.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 borderleft">
                                    <div className="boxcon height300px">
                                        <div className=" hovericon  fb size40"><i
                                            className="tron far fa-grin-stars"></i></div>
                                        <h4 className="uppercase center">GIAO BÁNH SINH NHẬT NỘI THÀNH HÀ NỘI</h4>
                                        <p>Tiệm Bánh Sinh Nhật Tokyo Gâteaux nhận giao bánh sinh nhật trong nội thành Hà
                                            Nội, thời gian giao khoảng 30′, phí giao hàng giao động từ 20 – 30k.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 borderleft">
                                    <div className="boxcon height300px">
                                        <div className=" hovericon  fb size40"><i
                                            className="tron far fa-grin-stars"></i></div>
                                        <h4 className="uppercase center">BÁNH SINH NHẬT CAO CẤP</h4>
                                        <p>Tokyo Gâteaux được biết đến là một cửa hàng chuyên cung cấp các loại bánh
                                            sinh nhật cao cấp. Với đa dạng hình dáng, màu sắc, mẫu mã thu hút mọi lứa
                                            tuổi với chất lượng được nhiều khách hàng tin tưởng, sử dụng.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </article>

            </div>
        </section>

)
}
function myFunction() {
    var anhien = document.getElementById('anhien');
    var yt = document.getElementById('toggle');
    var iconup = "<i class=\"fas fa-chevron-up\"></i>";
    var icondown= "<i class=\"fas fa-chevron-down\"></i>";
    if (anhien.style.display === 'block') {
        anhien.style.display = 'none';
        yt.innerHTML=icondown;
    } else {
        anhien.style.display = 'block';
        yt.innerHTML=iconup;


    }
}
