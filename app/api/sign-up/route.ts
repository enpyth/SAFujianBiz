// ./app/api/register/route.ts

import { registerUser, userExisted } from '@/lib/db_user';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.formData();  // Use formData instead of json()
  
  console.log('Received form data:', Object.fromEntries(formData.entries()));
  
  try {
    // Optional: You can add validation for formData here
    if (!formData.get('email') || !formData.get('password')) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }
    
    // Call the userExisted function to check if the user already exists
    const exists = await userExisted(formData);
    if (exists) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 }); // Return JSON response
    }

    const result = await registerUser(formData);  // Get the result from registerUser
    return NextResponse.json(result, { status: 200 }); // Return success message for new user
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 }); // Return JSON response for errors
  }
}
