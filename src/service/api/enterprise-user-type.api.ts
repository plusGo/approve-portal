import {JpaPage} from '../../model/dto/jpa-page.model';
import {EnterpriseUserType} from '../../model/biz/enterprise-user-type.model';

export class EnterpriseUserTypeApi {
    static findPage(): Promise<JpaPage<EnterpriseUserType>> {
        return null;
    }
}
