
## Project setup

```bash
#project set up
$ nest new project

# we go to the right folder
$ cd project

# install all dependencies
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Prisma + Mongodb setup

```bash
#install prisma and prisma client
$ npm install prisma@5 @prisma/client@5

# create many folder and file about prisma setup
$ npx prisma init
```

## prisma Generate

```bash
# prisma generate
$ npx prisma generate

# migrate
$ npx prisma db push
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
