import React, {useEffect} from 'react';
import {ComponentProps} from '../../../../model/props/component-props';


export default function (props: ComponentProps): JSX.Element {
    useEffect(() => {
        debugger
        const selectedMenuKey = props?.location?.pathState;
    }, []);
    return (<div>Hello World,manage</div>)
}
