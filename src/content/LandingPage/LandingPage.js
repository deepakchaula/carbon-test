import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'carbon-components-react';

const LandingPage = () => {
    return (
        <div className="bx--grid bx--grid--full-width landing-page">
            <div className="bx--row landing-page__banner">
                <div className="bx--col-lg-16">
                    <Breadcrumb noTrailingSlash aria-label="Page navigation">
                        <BreadcrumbItem>
                            <a href="/">Getting started</a>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <h1 className="landing-page__heading">
                        Administration
                    </h1>
                </div>
                <p className="landing-page__p">This app uses React, Redux, React Router, and many other helpful libraries.</p>
            </div>
        </div>
    );

};

export default LandingPage;
