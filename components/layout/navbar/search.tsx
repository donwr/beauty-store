'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { createUrl } from 'lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isExpanded, setIsExpanded] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set('q', search.value);
    } else {
      newParams.delete('q');
    }

    router.push(createUrl('/search', newParams));
  }

  return (
    <div className="search-bar flex items-center" >
      <div className="flex h-full justify-center items-center" onClick={() => setIsExpanded(!isExpanded)}>
        <MagnifyingGlassIcon className="search-icon h-4" />
      </div>
      <form
        onSubmit={onSubmit}
        className={`w-max-[550px] relative${
          isExpanded ? 'search-input expanded xl:w-60 lg:w-40 md:w-40 ml-2' : 'search-input w-0'
        }`}
      >
        <input
          type="text"
          name="search"
          placeholder="Search ..."
          autoComplete="off"
          defaultValue={searchParams?.get('q') || ''}
          className="w-full bg-white border-b py-2 text-sm text-black placeholder:text-neutral-500"
        />
      </form>
    </div>
  );
}
