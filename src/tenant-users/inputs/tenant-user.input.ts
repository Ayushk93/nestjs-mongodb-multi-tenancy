import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { Device, UserRole, UserType, Workgroup } from '../dto/tenant-user.dto';

@InputType()
export class RoleInput extends PartialType(UserRole, InputType) {}

@InputType()
export class CreateUserInput extends OmitType(
  UserType,
  ['devices', 'workgroups', 'user_role'],
  InputType,
) {
  @Field({ nullable: true })
  user_password?: string;

  @Field((type) => [RoleInput], { nullable: true })
  readonly user_role?: RoleInput[];

  @Field((type) => [DeviceInput], { nullable: true })
  readonly devices?: DeviceInput[];

  @Field((type) => [WorkgroupInput], { nullable: true })
  readonly workgroups?: WorkgroupInput[];
}

@InputType()
export class DeviceInput extends PartialType(Device, InputType) {}

@InputType()
export class WorkgroupInput extends PartialType(Workgroup, InputType) {}
@InputType()
export class BulkCreateUserInput {
  @Field((type) => [CreateUserInput], { nullable: true })
  readonly users?: CreateUserInput[];
}
