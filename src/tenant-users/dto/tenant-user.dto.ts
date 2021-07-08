import {
  Field,
  ObjectType,
  Int,
  PartialType,
  InputType,
} from '@nestjs/graphql';

@ObjectType()
export class UserRole {
  @Field({ nullable: true })
  role_type?: string;

  @Field({ nullable: true })
  _id?: string;
}

@ObjectType()
export class UserType {
  @Field({ nullable: true })
  readonly _id: string;

  @Field()
  readonly first_name: string;

  @Field()
  readonly last_name: string;

  @Field()
  readonly user_contact: string;

  @Field({ nullable: true })
  readonly user_email: string;

  @Field({ nullable: true })
  readonly user_password?: string;

  @Field({ nullable: true, defaultValue: false })
  readonly isWorkgroupAdmin?: boolean;

  @Field((type) => [UserRole], { nullable: true })
  readonly user_role?: UserRole[];

  @Field((type) => [Device], { nullable: true })
  readonly devices?: Device[];

  @Field((type) => [Workgroup], { nullable: true })
  readonly workgroups?: Workgroup[];

  @Field({ nullable: true })
  readonly tenant_db?: string;

  @Field({ nullable: true })
  readonly jwt_token?: string;
}

@ObjectType()
export class Device {
  @Field({ nullable: true })
  device_name?: string;

  @Field({ nullable: true })
  _id?: string;

  @Field({ nullable: true })
  device_status?: string;
}

@ObjectType()
export class Workgroup {
  @Field({ nullable: true })
  workgroup_name: string;
}

@InputType()
export class DeviceInput extends PartialType(Device, InputType) {}