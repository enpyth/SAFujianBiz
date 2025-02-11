'use client'; // Client Component

import Link from 'next/link';
import { Form } from '@/components/ui/form-signup';
import { useState } from 'react';
import { SubmitButton } from '@/components/ui/submit-button';
import { Alert } from '@mui/material';
import { registerUser } from '@/app/actions/registerAction'; // Import the server action

export default function SignUp() {
  const [error, setError] = useState<string | null>(null);

  async function register(formData: FormData) {
    try {
      await registerUser(formData); // Call the server-side action
      window.location.href = '/sign-in'; // Redirect on success (client-side redirect)
    } catch (err: any) {
      setError(err.message); // Handle any error (user already exists, etc.)
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <p className="text-sm text-gray-500">
            Create an account with your email and password
          </p>
        </div>

        {error && (
          <Alert severity="warning" className="mx-4 mt-4">
            {error} {/* Display the error message */}
          </Alert>
        )}

        <Form action={register}>
          <SubmitButton>Sign Up</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {'Already have an account? '}
            <Link href="/sign-in" className="font-semibold text-gray-800">
              Sign in
            </Link>
            {' instead.'}
          </p>
        </Form>
      </div>
    </div>
  );
}
