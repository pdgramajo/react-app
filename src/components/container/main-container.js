import React from 'react';

const MainContainer = (props) => {
    return (
            <div className="wrapper1">
                <div className="wrapper2">
                    <div className="wrapper3 d-flex align-items-center">
                        <div className="container">
                            <div className="wrapper4">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default MainContainer;
