'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { User } from 'react-feather';

const AuthDropdown = () => {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  if (session) {
    return (
      <div className="relative hidden lg:block">
        <button
          onClick={toggleDropdown}
          className="bg-[#F4A482] px-4 py-2 text-sm text-white md:block"
        >
          {/* {(session!.user as { email: string }).email} */}

          <User className="h-5 w-5" />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg">
            <ul className="py-1">
              <li>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </Link>
              </li>
              <li>
                <hr className="my-2" />
              </li>
              <li>
                <button
                  onClick={() => signOut()}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="relative hidden lg:block">
        <button
          onClick={toggleDropdown}
          className="bg-[#F4A482] px-4 py-2 text-sm text-white md:block"
        >
          {/* {(session!.user as { email: string }).email} */}

          <User className="h-5 w-5" />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg">
            <ul className="py-1">
              <li>
                <Link
                  href="/auth/login"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
};

export default AuthDropdown;
