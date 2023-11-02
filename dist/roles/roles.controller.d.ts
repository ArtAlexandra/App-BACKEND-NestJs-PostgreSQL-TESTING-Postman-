import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create_role.dto';
export declare class RolesController {
    private roleServise;
    constructor(roleServise: RolesService);
    create(dto: CreateRoleDto): Promise<import("./roles.model").Role>;
    getByValue(value: string): Promise<import("./roles.model").Role>;
}
