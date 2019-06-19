import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import './Layout1.scss';
import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';
import {Aside} from '../../components/Aside';
import {MobileSearch} from '../../components/MobileSearch';
import {ScrollToTop} from '../../components/ScrollToTop';
import {PageLogin} from '../../pages/Login';
import {PageHome} from '../../pages/Home';
import {PageTopicEdit} from '../../pages/topic/Edit';
import {PageTopicDetail} from '../../pages/topic/Detail';

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
                <ScrollToTop delayInMs={500} scrollStepInPx={50} />
            </>
        );
    }
}

export default Layout1;