import {RouterProps} from './router-props.interface';

export interface ComponentProps extends RouterProps {
    children?: JSX.Element;
}
