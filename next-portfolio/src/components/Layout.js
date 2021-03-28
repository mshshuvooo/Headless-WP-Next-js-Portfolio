import Head from 'next/head'
import { createContext } from 'react';
import Header from './Header'
import Sidebar from './Sidebar';

export const AppContext = createContext();

const Layout = (props) => {


    return (
        <AppContext.Provider value={props.appCommonData}>
            <Head>
                <title>{props.pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            </Head>

            
            <div className="np-site-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <Header/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <Sidebar/>
                        </div>
                        <div className="col-lg-8">
                            <div className="page-wrapper">
                                <div className="page-shadow">
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppContext.Provider>
        
    );
};

export default Layout;