import {BaseEntity} from '../base/base-entity.model';

export interface EnterpriseUserType extends BaseEntity {
    description?: string;
    enterpriseId?: string;
    id?: string;
    name?: string;
    orderId?: string;
    value?: string;
}
