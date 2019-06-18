import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import './Layout1.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PageLogin from '../../pages/Login/Login';
import PageHome from '../../pages/Home/Home';
import Aside from '../../components/Aside/Aside';
import MobileSearch from '../../components/MobileSearch/MobileSearch';
import BackToTop from '../../components/BackToTop/BackToTop';
import PageTopicEdit from '../../pages/topic/Edit/Edit';
import PageTopicDetail from '../../pages/topic/Detail/Detail';

class Layout1 extends React.PureComponent {

    render() {
        return (
            <>
                <Header/>
                <section className="frame-content">
                    <div className="frame-wrapper">
                        <MobileSearch/>
                        <section>
                            <div className="block-main">
                                <div className="panel">
                                    <Switch>
                                        <Route path={"/login"} exact={true} component={PageLogin}/>
                                        <Route path={"/"} exact={true} component={PageHome}/>
                                        <Route path={"/topic/create"} exact={true} component={PageTopicEdit}/>
                                        <Route path={"/topic/create/:id"} exact={true} component={PageTopicEdit}/>
                                        <Route path={"/topic/detail/:id"} exact={true} component={PageTopicDetail}/>
                                        <Redirect to={"/404"}/>
                                    </Switch>
                                </div>
                            </div>
                            <Aside/>
                        </section>
                    </div>
                </section>
                <Footer/>
                <BackToTop/>
            </>
        );
    }
}

export default Layout1;