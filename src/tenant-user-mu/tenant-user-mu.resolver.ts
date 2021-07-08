import { Query, Resolver } from '@nestjs/graphql';
import { UserType } from 'src/tenant-users/dto/tenant-user.dto';
import { TenantUserMuService } from './tenant-user-mu.service';

@Resolver()
export class TenantUserMuResolver {
  constructor(private readonly tenantUserMuService: TenantUserMuService) {}

  @Query(() => [UserType])
  findAllAn() {
    return this.tenantUserMuService.findAll();
  }
}
