# task_backend
Backend del proyecto Task, utilizando GraphQL, TypeScript, TypeORM y MySQL.


```bash
$ http://localhost:4000/v1
```

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
$ npm run build
```
## Seeder

```bash
# Config Seeder
$ npm run seed:config

# Run Seeds
$ npm run seed:run

# Drop Database and Seeder
$ npm run schema:drop && npm run seed:run
```

## Environments

```bash
# Database config
$ cp ormconfig.env.example ormconfig.env

# App config
$ cp .env.example .env
