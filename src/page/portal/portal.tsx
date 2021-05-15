import React, {Fragment} from 'react';
import {TopLayout} from '../../component/top-layout/top-layout';

export default function PortalPage(): JSX.Element {

    return (
        <Fragment>
            <TopLayout>
                <Fragment>
                    <div>Hello World,I am portal</div>
                </Fragment>
            </TopLayout>
        </Fragment>
    )
}
