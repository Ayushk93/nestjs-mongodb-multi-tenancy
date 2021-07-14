## Description

NestJS framework TypeScript starter repository with MongoDB, GraphQL integration and multi-tenancy architecture.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Multi Tenant Database Connectivity 
```bash
Pass Database Name in HTTP Headers

{
  "database": "<tenant_name>"
}

```
