import React from "react";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import Nav from "./Nav";
import Navtu from "./Navtu";
import Asidetu from "./Asidetu";
import Articletu from "./Articletu";
import Rnavtu from "./Rnavtu";
import Rarticletu from "./Rarticletu";
import Bnhd from "./Nav-quang";
import ArticalQuang from "./Artical-quang";
import Q1 from "./q1";
import Qa1 from "./qa1";
import Qa2 from "./qa2";
import Qa3 from "./qa3";
import Qa4 from "./qa4";
import Qa5 from "./qa5";
import Qa6 from "./qa6";
import Navbegai from "./nav..beo...begai";
import Begai from "./tuan-begai";
import Rnavbegai from "./Rbegai-duc1";
import Rabegai1 from "./Rabegai1";
import Rabegai2 from "./Rabegai2";
import Rabegai3 from "./Rabegai3";
import Rabegai4 from "./Rabegai4";
import Rabegai5 from "./Rabegai5";
import Rabegai6 from "./Rabegai6";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Nav/>
                    <Section/>
                </Route>
                <Route exact path="/bánh sinh nhật bé trai">
                    <Navtu/>
                    <section className="section main">
                        <div className="col-md-12 margintopbot "></div>

                        <div className="container">
                           <Asidetu/>
                           <Articletu/>

                        </div>
                    </section>
                </Route>
                <Route exact path="/bánh sinh nhật bé trai/Bánh sinh nhật Robocar Poli">
                    <Rnavtu/>
                    <section className="section main">
                        <div className="col-md-12 margintopbot "></div>

                        <div className="container">
                           <Asidetu/>
                           <Rarticletu/>

                        </div>
                    </section>
                </Route>
                <Route exact path="/bánh sinh nhật hiện đại">
                    <Bnhd/>
                    <section className="section main">
                        <div className="col-md-12 margintopbot "></div>

                        <div className="container">
                            <Asidetu/>
                            <ArticalQuang/>

                        </div>
                    </section>
                </Route>
                <Route exact path="/bánh sinh nhật hiện đại/Bánh sinh nhật kem sữa chua mix dâu tây tươi sz16">
                    <Q1/>
                    <section className="section main">
                        <div className="col-md-12 margintopbot "></div>
                        <div className="container">
                            <Asidetu/>
                            <Qa1/>
                        </div>
                    </section>
                </Route>
                <Route exact path="/bánh sinh nhật hiện đại/Bánh sinh nhật đại gia oto nam tính sz18">
                    <Q1/>
                    <section className="section main">
                        <div className="col-md-12 margintopbot "></div>
                        <div className="container">
                            <Asidetu/>
                            <Qa2/>
                        </div>
                    </section>
                </Route>
                <Route exact path="/bánh sinh nhật hiện đại/Bánh sinh nhật phủ socola sz18">
                    <Q1/>
                    <section className="section main">
                        <div className="col-md-12 margintopbot "></div>
                        <div className="container">
                            <Asidetu/>
                            <Qa3/>
                        </div>
                    </section>
                </Route>
                <Route exact path="/bánh sinh nhật hiện đại/Bánh ngôi sao bạc sz18">
                    <Q1/>
                    <section className="section main">
                        <div className="col-md-12 margintopbot "></div>
                        <div className="container">
                            <Asidetu/>
                            <Qa4/>
                        </div>
                    </section>
                </Route>
                <Route exact path="/bánh sinh nhật hiện đại/Bánh sinh nhật rượu Chivas socola sz16">
                    <Q1/>
                    <section className="section main">
                        <div className="col-md-12 margintopbot "></div>
                        <div className="container">
                            <Asidetu/>
                            <Qa5/>
                        </div>
                    </section>
                </Route>
                <Route exact path="/bánh sinh nhật hiện đại/Bánh rượu Ore hồng sz18">
                    <Q1/>
                    <section className="section main">
                        <div className="col-md-12 margintopbot "></div>
                        <div className="container">
                            <Asidetu/>
                            <Qa6/>
                        </div>
                    </section>
                </Route>
                <Route exact path="/bánh sinh nhật bé gái">
                    <Navbegai/>
                    <section className="section main">
                        <div className="col-md-12 margintopbot "></div>
                        <div className="container">
                            <Asidetu/>
                            <Begai/>
                        </div>
                    </section>
                </Route>
                <Route exact path="/bánh sinh nhật bé gái/Bánh sinh nhật hiện đại socola sz18">
                    <Rnavbegai/>
                    <section className="section main">
                        <div className="col-md-12 margintopbot "></div>
                        <div className="container">
                            <Asidetu/>
                            <Rabegai2/>
                        </div>
                    </section>
                </Route>
                <Route exact path="/bánh sinh nhật bé gái/Bánh sinh nhật hiện đại mini hồng sz16">
                    <Rnavbegai/>
                    <section className="section main">
                        <div className="col-md-12 margintopbot "></div>
                        <div className="container">
                            <Asidetu/>
                            <Rabegai1/>
                        </div>
                    </section>
                </Route>
                <Route exact path="/bánh sinh nhật bé gái/Bánh hồng trà sz18">
                    <Rnavbegai/>
                    <section className="section main">
                        <div className="col-md-12 margintopbot "></div>
                        <div className="container">
                            <Asidetu/>
                            <Rabegai3/>
                        </div>
                    </section>
                </Route>
                <Route exact path="/bánh sinh nhật bé gái/Bánh cô gái váy hoa sz18">
                    <Rnavbegai/>
                    <section className="section main">
                        <div className="col-md-12 margintopbot "></div>
                        <div className="container">
                            <Asidetu/>
                            <Rabegai4/>
                        </div>
                    </section>
                </Route>
                <Route exact path="/bánh sinh nhật bé gái/Bánh 5">
                    <Rnavbegai/>
                    <section className="section main">
                        <div className="col-md-12 margintopbot "></div>
                        <div className="container">
                            <Asidetu/>
                            <Rabegai5/>
                        </div>
                    </section>
                </Route>
                <Route exact path="/bánh sinh nhật bé gái/Bánh sinh nhật tạo hình heo vàng Anna sz18 4lớp">
                    <Rnavbegai/>
                    <section className="section main">
                        <div className="col-md-12 margintopbot "></div>
                        <div className="container">
                            <Asidetu/>
                            <Rabegai6/>
                        </div>
                    </section>
                </Route>



            </Switch>

            <Footer/>
        </BrowserRouter>

    </div>
  );
}

export default App;
