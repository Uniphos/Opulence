import React from 'react';
import NavBar from './navBar/navBar';

const PageLayout = ({children}) => {
    return (
        <div className="page-layout">
            <NavBar />
            <div>
                {children}
            </div>
        </div>
    );
};

export default PageLayout;