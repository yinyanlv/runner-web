import React, {useState, useEffect} from 'react';
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

export default function Layout1() {

    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
            <div className="back-to-top" id="back-to-top">
                <span>回到顶部</span>
            </div>
        </>
    );
}