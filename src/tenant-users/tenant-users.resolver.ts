import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserType } from './dto/tenant-user.dto';
import { TenantUsersService } from './tenant-users.service';

@Resolver()
export class TenantUsersResolver {
  constructor(private readonly tenantUsersService: TenantUsersService) {}

  @Query(() => [UserType])
  findAll() {
    return this.tenantUsersService.findAll();
  }
}
