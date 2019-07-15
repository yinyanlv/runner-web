import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import {Header} from '../../components/Header';
import {MHeader} from '../../components/MHeader';
import {Footer} from '../../components/Footer';
import {Aside} from '../../components/Aside';
import {MSearch} from '../../components/MSearch';
import {ScrollToTop} from '../../components/ScrollToTop';
import {PageLogin} from '../../pages/Login';
import {PageHome} from '../../pages/Home';
import {PageTopicEdit} from '../../pages/topic/Edit';
import {PageTopicDetail} from '../../pages/topic/Detail';
import AppContext from '../../AppContext';

class Layout1 extends React.PureComponent {

    render() {
        return (
            <AppContext.Consumer>
                {
                    (context: any) => {
                        return (
                            <>
                                <section>
                                {
                                    context.isMobile ?  <MHeader/> : <Header/>
                                }
                                </section>
                                <section className="frame-content">
                                    <div className="frame-wrapper">
                                        {
                                            context.isMobile && <MSearch/>
                                        }
                                        <section>
                                            <div className="block-main">
                                                <Switch>
                                                    <Route path={"/login"} exact={true} component={PageLogin}/>
                                                    <Route path={"/"} exact={true} component={PageHome}/>
                                                    <Route path={"/topic/create"} exact={true} component={PageTopicEdit}/>
                                                    <Route path={"/topic/create/:id"} exact={true} component={PageTopicEdit}/>
                                                    <Route path={"/topic/detail/:id"} exact={true} component={PageTopicDetail}/>
                                                    <Redirect to={"/404"}/>
                                                </Switch>
                                            </div>
                                            <Aside/>
                                        </section>
                                    </div>
                                </section>
                                <Footer/>
                                <ScrollToTop delayInMs={30} scrollStepInPx={50} />
                            </>
                        );
                    }
                }
            </AppContext.Consumer>
        );
    }
}

export default Layout1;
