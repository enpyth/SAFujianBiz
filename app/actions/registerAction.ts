// app/actions/registerAction.ts
'use server';

import { createUser, getUser } from '@/app/db';

export async function registerUser(formData: FormData) {
  let name = formData.get('name') as string;
  let email = formData.get('email') as string;
  let password = formData.get('password') as string;
  let user = await getUser(email);

  if (user.length > 0) {
    throw new Error('User already exists'); // Throw an error to be handled in the client component
  } else {
    await createUser(email, password, name);
  }
}
