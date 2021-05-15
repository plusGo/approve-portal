import React from 'react';
import './loading.scss';

export const Loading = (): JSX.Element => {

    return (
        <div className="loading-wrapper">
            <div className="loading">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};
