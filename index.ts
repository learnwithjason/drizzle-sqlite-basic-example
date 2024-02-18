import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import {
	users,
	ideas,
	type NewIdea,
	type NewUser,
	type User,
} from './db/schema.js';
import { eq } from 'drizzle-orm';

const sqlite = new Database('./db/demo.db');
const db = drizzle(sqlite);

async function addUser(user: NewUser): Promise<User> {
	return (await db.insert(users).values(user).returning()).at(0)!;
}

async function addIdea(idea: NewIdea) {
	await db.insert(ideas).values(idea);
}

async function getIdeas() {
	return await db
		.select({
			id: ideas.id,
			text: ideas.text,
			status: ideas.status,
			creator: users.name,
		})
		.from(ideas)
		.leftJoin(users, eq(ideas.creator, users.id));
}

const user = await addUser({ name: 'Jane Developer' });

await addIdea({
	text: 'Learn how ORMs work',
	status: 'pending',
	creator: user.id,
});

const allIdeas = await getIdeas();

console.log(allIdeas);
