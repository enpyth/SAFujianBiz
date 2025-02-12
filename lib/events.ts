import { db } from '@vercel/postgres';

const client = await db.connect();

export async function getEventById(id: number) {
  const result = await client.sql`
    SELECT * FROM FJSH_events WHERE id = ${id};
  `;
  return result.rows[0]; // Return the first result, or undefined if not found
}

export async function getUpcomingEvents() {
  const result = await client.sql`
    SELECT * FROM FJSH_events WHERE status = 'upcoming';
  `;
  return result.rows; // Return all upcoming events
}

export async function getAllEvents() {
  const result = await client.sql`
    SELECT * FROM FJSH_events;
  `;
  return result.rows; // Return all upcoming events
}
