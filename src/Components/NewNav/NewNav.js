import React from 'react';

const NewNav = () => {
    return (
        <div>
            {/* <!-- Navigation HTML --> */}
<nav class="bg-gray-800">
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <a class="flex-shrink-0 text-white" href="#">
          Logo
        </a>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline">
            <a class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900" href="#">Home</a>
            <a class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700" href="#">About</a>
            <a class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700" href="#">Services</a>
            <a class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700" href="#">Contact</a>
          </div>
        </div>
      </div>
      <div class="-mr-2 flex md:hidden">
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
          {/* <!-- Icon when menu is closed. --> */}
          <svg class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          {/* <!-- Icon when menu is open. --> */}
          <svg class="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* <!-- Mobile menu, toggle classes based on menu state. --> */}
  <div class="hidden md:hidden">
    <div class="px-2 pt-2 pb-3">
      <a class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900" href="#">Home</a>
      <a class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700" href="#">About</a>
      <a class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700" href="#">Services</a>
      <a class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700" href="#">Contact</a>
    </div>
  </div>
</nav>

        </div>
    );
};

export default NewNav;