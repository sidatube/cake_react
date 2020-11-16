import {Link} from "react-router-dom";

export  default function Begai(){
    return(

        <article><div className="row">
            <aside id="aside" className="section aside" style={{marginLeft: '50px'}} />
            <div className="col-md-8">
                <h3 className="text-center">Bánh sinh nhật bé gái </h3>
                <div className="row">
                    <div className="col-md-4 text-center as">
                        <Link to="/bánh sinh nhật bé gái/Bánh sinh nhật hiện đại socola sz18"> <img src="https://tokyogateaux.vn/wp-content/uploads/2020/08/7.6.23.jpg" height={768} width={768} /></Link>
                        <span className="article-2-1">BÁNH SINH NHẬT</span><br />
                        <p><a className="article-2-2">Bánh sinh nhật hiện đại socola sz18</a></p><br />
                        <p className="article-2-3">270.000₫</p>
                        <button type="submit" className="btn btn-danger">ADD TO CARD</button>
                    </div>
                    <div className="col-md-4 text-center as">
                        <Link to="/bánh sinh nhật bé gái/Bánh sinh nhật hiện đại mini hồng sz16"> <img src="https://tokyogateaux.vn/wp-content/uploads/2020/08/Ba%CC%81nh-sinh-nha%CC%A3%CC%82t-hie%CC%A3%CC%82n-da%CC%A3i-mini-2-1.jpg" height={768} width={768} /></Link>
                        <span className="article-2-1">BÁNH SINH NHẬT</span><br />
                        <p><a className="article-2-2">Bánh sinh nhật hiện đại mini hồng sz16 </a></p><br/>
                        <p className="article-2-3">180.000₫</p>
                        <button type="submit" className="btn btn-danger">ADD TO CARD</button>
                    </div>
                    <div className="col-md-4 text-center as">
                        <Link to="/bánh sinh nhật bé gái/Bánh hồng trà sz18"> <img src="https://tokyogateaux.vn/wp-content/uploads/2020/08/Ba%CC%81nh-sinh-nha%CC%A3%CC%82t-hie%CC%A3%CC%82n-da%CC%A3i-hoa-kem-tu%CC%9Bo%CC%9Bi.jpg" height={768} width={768} /></Link>
                        <span className="article-2-1">BÁNH SINH NHẬT</span><br />
                        <p><a className="article-2-2">Bánh hồng trà sz18</a></p><br />
                        <p className="article-2-3">280.000₫</p>
                        <button type="submit" className="btn btn-danger">ADD TO CARD</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-center as">
                        <Link to="/bánh sinh nhật bé gái/Bánh cô gái váy hoa sz18">    <img src="https://tokyogateaux.vn/wp-content/uploads/2020/08/Tie%CC%82%CC%89u-thu%CC%9B-va%CC%81y-hoa-sz16-1.jpg" height={800} width={800} /></Link>
                        <span className="article-2-1">BÁNH SINH NHẬT</span><br />
                        <p><a className="article-2-2">Bánh cô gái váy hoa sz18</a></p><br />
                        <p className="article-2-3">290.000₫</p>
                        <button type="submit" className="btn btn-danger">ADD TO CARD</button>
                    </div>
                    <div className="col-md-4 text-center as">
                        <Link to="/bánh sinh nhật bé gái/Bánh 5">   <img src="https://tokyogateaux.vn/wp-content/uploads/2020/08/24.6.29.jpg" height={800} width={800} /> </Link>
                        <span className="article-2-1">BÁNH SINH NHẬT</span><br />
                        <p><a className="article-2-2">Bánh sinh nhật Drip cake sz16</a></p><br />
                        <p className="article-2-3">250.000đ</p>
                        <button type="submit" className="btn btn-danger">ADD TO CARD</button>
                    </div>
                    <div className="col-md-4 text-center as">
                        <Link to="/bánh sinh nhật bé gái/Bánh sinh nhật tạo hình heo vàng Anna sz18 4lớp">   <img src="https://tokyogateaux.vn/wp-content/uploads/2020/10/1.jpg" height={800} width={800} /> </Link>
                        <span className="article-2-1">BÁNH SINH NHẬT</span><br />
                        <p><a className="article-2-2">Bánh sinh nhật tạo hình heo vàng Anna sz18 4lớp</a></p><br/>
                        <p className="article-2-3">750.000₫</p>
                        <button type="submit" className="btn btn-danger">ADD TO CARD</button>
                    </div>
                </div>
                <nav aria-label="Page navigation example" className="navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex={-1} />
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#"> </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <footer id="footer" className="section footer" />
        </div></article>


)
}