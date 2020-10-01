import { IRoleDef } from '../../../Types/Domain/Role';

export interface RoleListProp {
  roleData?:any;
  getData?:any;
  roleDefs: IRoleDef[];
  theme?: any;
}
