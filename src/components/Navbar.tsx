// import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
// import Button from "../components/Button";

export default function Navbar() {
  return (
    <>  
        <nav className="z-10 fixed left-0 top-0 w-full bg-gradient-to-b from-white via-white 75% to-transparent">
        <div className="flex justify-between items-center py-1 bg-grey text-xs">
          <div className="flex items-center space-x-4">
            <span id="et-info-phone">T. 644 17 70 68</span>
            <ul className="flex space-x-4">
              <li>
                <a href="https://www.instagram.com/artcabell_perruqueria/" className="icon ds-iparty-icon brands">
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Logo />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Art&Cabell</span>
            </a>
            <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">

                <button data-collapse-toggle="navbar-language" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
            </div>

            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                  <a href="#" className="block py-2 px-3 text-black bg-black-700 rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-black bg-black-700 rounded md:bg-transparent md:p-0">About</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-black bg-black-700 rounded md:bg-transparent md:p-0">Services</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-black bg-black-700 rounded md:bg-transparent md:p-0">Pricing</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-black bg-black-700 rounded md:bg-transparent md:p-0">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
  );
}