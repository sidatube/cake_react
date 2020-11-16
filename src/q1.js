import {Link} from "react-router-dom";

export default function Q1(){
    return(
        <section className="section quang">
            <div className="container">
                <div className="row">
                    <div className="g">
                        <ul>
                            <li>
                                <Link className="g1" to="/">HOME</Link>
                            </li>
                            <li>
                                /
                            </li>
                            <li>
                                <a className="g1" href="#">BÁNH SINH NHẬT</a>
                            </li>
                            <li>
                                /
                            </li>
                            <li>
                                <a className="g1" href="#">BÁNH SINH NHẬT HIỆN ĐẠI</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}