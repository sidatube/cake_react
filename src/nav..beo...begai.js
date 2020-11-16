import {Link} from "react-router-dom";
import React from "react";

export default function Navbegai(){
return(
    <nav className="section nav">
        <div className="container">
            <div className="top-left-3">
                <ul>
                    <li><a className="top-left-3-1" href="/">HOME</a></li>
                    <li className="top-left-3-2">/</li>
                    <li><a className="top-left-3-1" href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/">BÁNH
                        SINH NHẬT</a></li>
                    <li className="top-left-3-2">/</li>
                    <li><span className="top-left-3-1">BÁNH SINH NHẬT BÉ GÁI</span></li>
                </ul>
            </div>
            <div className="top-right-3">
                <select className="top-right-3-1">
                    <option className="top-right-3-2" value="popularity" selected="selected">Sort by popularity
                    </option>
                    <option className="top-right-3-2" value="rating">Sort by average rating</option>
                    <option className="top-right-3-2" value="date">Sort by latest</option>
                    <option className="top-right-3-2" value="price">Sort by price: low to high</option>
                    <option className="top-right-3-2" value="price-desc">Sort by price: high to low</option>
                    <option className="top-right-3-2" value="random_list">Sắp xếp sản phẩm ngẫu nhiên</option>
                </select>
            </div>
        </div>
    </nav>

)
}