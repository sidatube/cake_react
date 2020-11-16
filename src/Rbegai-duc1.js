import {Link} from "react-router-dom";

export default function Rnavbegai(){
    return(
    <nav className="section r-nav">
        <div className="container">
            <div className="r-top-1">
                <ul>
                    <li><Link className="r-top-1-1" to="/">HOME</Link></li>
                    <li className="r-top-1-2">/</li>
                    <li><a className="r-top-1-1" href="https://tokyogateaux.vn/banh-sinh-nhat/banh-sinh-nhat/">BÁNH
                        SINH NHẬT</a></li>
                    <li className="r-top-1-2">/</li>
                    <li><a className="r-top-1-1" href="#">ÁNH SINH NHẬT BÉ GÁI</a></li>
                </ul>
            </div>
        </div>
    </nav>

    )
}

