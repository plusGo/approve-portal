import React, {useEffect, useState} from 'react';

export interface LoadingProps {
    error?: boolean;
    timedOut?: boolean;
    pastDelay?: boolean;
}

export const Loading = (props: LoadingProps): JSX.Element => {
    const [message, setMessage] = useState('页面加载中');
    useEffect(() => {
        if (props.error) {
            setMessage('加载页面失败');
        } else if (props.timedOut) {
            setMessage('加载页面超时');

        } else {
            setMessage('页面加载中');
        }
    }, [props]);
    return (
        <div className="loading-wrapper">
            <div className="loading-inner">
                <div>{message}</div>
            </div>
        </div>
    );
};
