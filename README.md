# Minimal Drizzle + SQLite Node App

This is a bare bones Node app that uses:

- TypeScript
- ES Modules
- [Drizzle ORM](https://orm.drizzle.team/)
- SQLite

This was built as part of a [get started with Drizzle + SQLite](https://www.learnwithjason.dev/blog/drizzle-orm-sqlite-create-tables) guide I wrote as I was trying to figure out how Drizzle works.

## Quickstart

```sh
# clone the repo
gh repo clone learnwithjason/drizzle-sqlite-basic-example
cd ./drizzle-sqlite-basic-example/

# install deps
npm i

# initialize the database
npm run db:generate
npm run db:push

# start the dev server
npm run dev
```

Right now `index.ts` will continually add more entries to the database. After running, you can review the data in Drizzle Studio:

```sh
npm run db:studio
```
