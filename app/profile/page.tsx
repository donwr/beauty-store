'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LoadingScreen } from './loadingScreen';

const Profile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Immediately redirect if not authenticated
    if (status === 'unauthenticated') {
      router.push('/auth/login?callbackUrl=/profile');
    }
  }, [status, router]);

  if (status === 'loading' || status !== 'authenticated') {
    // Show loading only or a message indicating redirection
    return <LoadingScreen />; // Enhanced user feedback during redirection
  }

  // Authenticated user content
  return (
    <div className="bg-[#F7F7F7] py-8">
      <div>
        {/* Profile header */}
        <div className="flex flex-col items-center space-y-4 py-8 text-center">
          <img
            src="profile-picture-url"
            alt="Profile"
            className="h-24 w-24 rounded-full border-2 border-white object-cover shadow-lg"
          />
          <div>
            <h1 className="text-2xl font-bold">Marques Simons</h1>
            <p className="text-sm text-gray-600">Los Angeles, CA</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 ">
        {/* spacer */}
        <div className="hidden md:col-span-2 md:block"></div>
        {/* Sidebar navigation */}
        <div className="col-span-12 bg-white md:col-span-2 lg:min-h-[28rem]">
          <div className="sticky top-10 px-4 py-10">
            <nav className="flex md:block lg:space-y-1">
              <a
                href="#"
                className="block border-pink-200 p-2 font-semibold text-pink-700 lg:border-r-2"
              >
                Profile info
              </a>
              <a href="#" className="block p-2 hover:border-r-pink-200 lg:hover:border-r-2">
                My orders
              </a>
              <a href="#" className="block p-2 hover:border-r-pink-200 lg:hover:border-r-2">
                Security
              </a>
              {/* ... other nav items ... */}
              <a href="#" className="block p-2 hover:border-r-pink-200 lg:hover:border-r-2">
                Sign out
              </a>
            </nav>
          </div>
        </div>

        {/* Profile content */}

        <div className="col-span-12 space-y-6 bg-white px-4 py-10 md:col-span-6 lg:min-h-[28rem]">
          {/* Profile form */}
          <form className="max-w-4xl space-y-4">
            <div>
              <label htmlFor="full-name" className="text-sm font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="mt-1 w-full rounded border border-gray-300 px-4 py-2 shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 w-full rounded border border-gray-300 px-4 py-2 shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="birth-date" className="text-sm font-semibold">
                Birth date
              </label>
              {/* Date picker inputs or select elements */}
            </div>
            <fieldset>
              <legend className="text-sm font-semibold">Mostly interested in:</legend>
              <label className="mr-8 mt-1 inline-flex items-center">
                <input type="radio" name="interest" value="womenswear" className="form-radio" />
                <span className="ml-2">Womenswear</span>
              </label>
              <label className="mt-1 inline-flex items-center">
                <input type="radio" name="interest" value="menswear" className="form-radio" />
                <span className="ml-2">Menswear</span>
              </label>
            </fieldset>
            <button
              type="submit"
              className="border border-transparent bg-pink-400 px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              Save edits
            </button>
          </form>
        </div>

        {/* spacer */}
        <div className="hidden md:col-span-2"></div>
      </div>
    </div>
  );
};

export default Profile;
