import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-orange-300 text-orange-950 p-10 shadow-xl">
      <aside>
        <div className="font-bold">
          <div className="flex items-center justify-center gap-2">
            <img
              className="w-16 h-16 rounded-full"
              src="https://i.postimg.cc/zBZSg959/recipee.jpg"
              alt="BiteBloom Logo"
            />
            <h2 className="text-2xl font-extrabold text-orange-900">
              Bite<span className="text-orange-500">Bloom</span>
            </h2>
          </div>
          <br />
          <p className="text-sm font-medium text-orange-800">
            Spreading flavorful recipes with love since 2018 🍽️
          </p>
          <p className="mt-2">
            Contact us:{" "}
            <a
              href="mailto:support@bitebloom.com"
              className="text-orange-700 underline"
            >
              support@bitebloom.com
            </a>
          </p>
          <p>Phone: +1 (234) 567-8901</p>
        </div>
        <p className="mt-3 text-xs text-orange-700">
          &copy; {new Date().getFullYear()} BiteBloom — All rights reserved.
        </p>
      </aside>

      <nav className="grid grid-flow-col gap-4">
        <a
          href="https://policies.google.com/terms?hl=en-BD&fg=1"
          className="link link-hover text-orange-800"
        >
          Terms of Service
        </a>
        <a
          href="https://policies.google.com/privacy?hl=en-BD&fg=1"
          className="link link-hover text-orange-800"
        >
          Privacy Policy
        </a>
        <a
          href="https://developers.google.com/"
          className="link link-hover text-orange-800"
        >
          Developer Zone
        </a>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 duration-300 text-orange-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.05 9.05 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.62 0-4.74 2.13-4.74 4.76 0 .37.04.73.11 1.07A12.94 12.94 0 0 1 3 1.67a4.77 4.77 0 0 0-.64 2.4c0 1.65.83 3.11 2.1 3.96A4.42 4.42 0 0 1 2 7v.06c0 2.3 1.63 4.21 3.77 4.65a4.38 4.38 0 0 1-2.13.08 4.51 4.51 0 0 0 4.2 3.14A9.06 9.06 0 0 1 2 18.58 12.88 12.88 0 0 0 8.29 20c7.55 0 11.68-6.37 11.68-11.9 0-.18 0-.36-.01-.53A8.18 8.18 0 0 0 23 3z" />
            </svg>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 duration-300 text-orange-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.6 3.2c-3.6-.2-11.6-.2-15.2 0-3.9.3-4.4 2.6-4.4 8.8 0 6.2.5 8.5 4.4 8.8 3.6.2 11.6.2 15.2 0 3.9-.3 4.4-2.6 4.4-8.8 0-6.2-.5-8.5-4.4-8.8zM9 16V8l8 4-8 4z" />
            </svg>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 duration-300 text-orange-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.3C0 23.4.6 24 1.3 24h11.5v-9.3H9.6v-3.6h3.2V8.4c0-3.1 1.9-4.8 4.6-4.8 1.3 0 2.4.1 2.7.1v3.2h-1.9c-1.5 0-1.8.7-1.8 1.8v2.3h3.6l-.5 3.6h-3.1V24h6.1c.7 0 1.3-.6 1.3-1.3V1.3c0-.7-.6-1.3-1.3-1.3z" />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
