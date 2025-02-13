import { db } from '@vercel/postgres';
import { genSaltSync, hashSync } from 'bcrypt-ts';

const client = await db.connect();

export async function getUser(email: string) {
  console.log('log: get a user')
  const result = await client.query(`
    SELECT email, name, role FROM "fjsh_users" WHERE email = $1
  `, [email]);
  return result.rows; // Return the rows from the query
}

export async function createUser(email: string, password: string, name: string) {
  console.log('log: create a user')
  let salt = genSaltSync(10);
  let hash = hashSync(password, salt);

  await client.query(`
    INSERT INTO "fjsh_users" (email, password, name) VALUES ($1, $2, $3)
  `, [email, hash, name]);
}

export async function registerUser(formData: FormData) {
  console.log('log: register a user')
  let name = formData.get('name') as string;
  let email = formData.get('email') as string;
  let password = formData.get('password') as string;
  let user = await getUser(email);

  if (user.length > 0) {
    throw new Error('User already exists'); // Throw an error to be handled in the API route
  } else {
    await createUser(email, password, name);
    return { message: 'User registered successfully' }; // Return success message for new user
  }
}

export async function userExisted(formData: FormData)  {
  console.log('log: check if user user is existed')
  let email = formData.get('email') as string;
  let user = await getUser(email);

  if (user.length > 0) return true;
  return false;
}