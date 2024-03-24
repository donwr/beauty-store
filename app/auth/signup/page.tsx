'use client';
import LogoIconAlternate from '@/components/icons/logoAlternate';
import { app } from '@/firebase/firebaseClient'; // Adjust the path as necessary
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignupPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  // Redirect to profile or another page if already logged in
  if (session) {
    router.replace('/profile'); // or your preferred page
    return null;
  }

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!agreedToTerms) {
      setError('You must agree to the terms and conditions');
      return;
    }

    try {
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user); // Send verification email
      router.push('/check-email');
    } catch (error: any) {
      console.error('Signup error:', error);
      setError(error.message);
    }
  };

  return (
    <div className="relative flex h-full items-center justify-center gap-x-16 bg-[#DADADA] lg:h-screen lg:bg-white">
      <div className="relative hidden h-screen flex-col justify-end lg:flex lg:w-[40%] xl:w-2/5">
        <Link href="/">
          <LogoIconAlternate className="absolute left-1/2 top-8 z-[3] -translate-x-1/2" />
        </Link>
        <img
          src="/images/signup.png"
          className="absolute left-0 top-0 z-[0] h-full w-full object-cover object-center"
        />
        <div className="overlay absolute left-0 top-0 z-[1] h-full w-full bg-black/30"></div>
        <div className="relative z-[3] h-[17rem] bg-[#222326] text-white">
          <h3 className="py-8 text-center text-[18px] uppercase">
            Only high quality clothes <br /> shoes and accessories
          </h3>
          <p className="px-8 text-center text-sm">
            We exist to give you the confidence to be unique. To be gorgeous. To express yourself.
            To be brave and grab life as the extraordinary adventure it is.
          </p>
        </div>
      </div>
      <div className="relative z-[1] flex h-full min-h-screen flex-1 flex-col items-center justify-center">
        <Link href="/">
          <LogoIconAlternate className="absolute left-1/2 top-8 z-[4] -translate-x-1/2 lg:hidden" />
        </Link>
        <img
          src="/images/signup.png"
          className="absolute left-0 top-0 z-[2] h-full w-full object-cover object-top lg:hidden"
        />
        <div className="overlay absolute left-0 top-0 z-[3] h-full w-full bg-black/30 lg:hidden"></div>
        <div className="relative z-[4] mt-12 flex bg-white max-sm:mx-4 md:mt-16 lg:mt-0">
          <div className="flex min-h-[36rem] max-w-[30rem] flex-col justify-between border p-4 lg:border-none">
            <div className="group mb-8">
              <h2 className="text-lg">Welcome to Loomi</h2>
              <p className="text-xs text-[#7E7B77]">Let&apos;s create your account</p>
            </div>
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold" htmlFor="email">
                  Email
                </label>
                <input
                  className="block h-[2.5rem] w-full border border-[#ECEDEE]"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold" htmlFor="password">
                  Password
                </label>
                <input
                  className="block h-[2.5rem] w-full border border-[#ECEDEE]"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold" htmlFor="confirm-password">
                  Confirm Password
                </label>
                <input
                  className="block h-[2.5rem] w-full border border-[#ECEDEE]"
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              {error && <div>{error}</div>}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="rounded border border-gray-300 text-[#F4A482]"
                  checked={agreedToTerms} // Bind the checked attribute to agreedToTerms state
                  onChange={(e) => setAgreedToTerms(e.target.checked)} // Update state when checkbox is clicked
                  required
                />

                <label htmlFor="terms" className="text-xs text-gray-500">
                  By creating your account, you agree to our{' '}
                  <a href="/terms" className="text-[#F4A482] underline">
                    Terms and Conditions
                  </a>{' '}
                  &{' '}
                  <a href="/privacy" className="text-[#F4A482] underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center bg-[#F4A482] py-3 text-white"
              >
                Sign up
              </button>
            </form>
            <div className="flex min-h-[6rem] flex-col justify-between">
              <p className="mt-4 text-center text-xs text-gray-500">
                Already have an account?{' '}
                <a href="/login" className="text-[#F4A482] underline">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
