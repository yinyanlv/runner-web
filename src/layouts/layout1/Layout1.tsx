import React from 'react';
import {renderRoutes} from 'react-router-config';
import {Header} from '../../components/Header';
import {MHeader} from '../../components/MHeader';
import {Footer} from '../../components/Footer';
import {Aside} from '../../components/Aside';
import {MSearch} from '../../components/MSearch';
import {ScrollToTop} from '../../components/ScrollToTop';
import AppContext from '../../AppContext';
import {routes} from './routes';

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
                                        context.isMobile ? <MHeader/> : <Header/>
                                    }
                                </section>
                                <section className="frame-content">
                                    <div className="frame-wrapper">
                                        {
                                            context.isMobile && <MSearch/>
                                        }
                                        <section>
                                            <div className="block-main">
                                                {
                                                    renderRoutes(routes)
                                                }
                                            </div>
                                            <Aside/>
                                        </section>
                                    </div>
                                </section>
                                <Footer/>
                                <ScrollToTop delayInMs={30} scrollStepInPx={50}/>
                            </>
                        );
                    }
                }
            </AppContext.Consumer>
        );
    }
}

export default Layout1;
