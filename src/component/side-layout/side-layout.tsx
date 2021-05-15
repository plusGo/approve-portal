import React from 'react';

export interface SideLayoutProps {
    children?: JSX.Element[];
}

export const SideLayout = (props: SideLayoutProps): JSX.Element => {

    return (

        <div className="loading-wrapper">
            <div className="loading-inner">
                <div>{props?.children}</div>
            </div>
        </div>
    );
};
