"use client";
import Link from "next/link";
import { Libre_Bodoni } from "next/font/google";
import LogInComp from "@/components/SEC/loginComp";
import SearchComp from "./search/search";
import { userAppStore } from "@/store/store";
import Schedule from "@/components/common/Schedule";

// google fonts
const bodoni = Libre_Bodoni({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const HeaderComponent = ({ children }) => {
  const { showScheduleBar } = userAppStore();
  const api = process.env.NEXT_PUBLIC_apiKey
  console.log(api)
  return (
    <div className="sticky top-0 z-30 w-full shadow-sm">
      <header
        className={`w-full bg-white dark:bg-gray-900 flex flex-col justify-center transition-all duration-300
    ${!showScheduleBar ? "border-b border-b-gray-200" : "shadow-sm"}
    `}
      >
        <div
          className="container w-full pb-4 sm:pb-0 mx-auto px-5 md:px-4 lg:px-3 xl:px-2"
          aria-label="Global"
        >
          <div className="relative md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className={`flex-none text-2xl font-bold  ${bodoni.className} bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent`}
                aria-label="Brand"
              >
                Dwelling
              </Link>
              <div className="md:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="hs-collapse-open:hidden w-4 h-4"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden w-4 h-4"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            </div>
            <div>{!showScheduleBar && <SearchComp />}</div>

            <div
              id="navbar-collapse-with-animation"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 md:block"
            >
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
                <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                  <a
                    className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500"
                    href= "/dwepartner"
                  >
                    Work with us
                  </a>
                  <div className="pt-3 md:pt-0">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {<LogInComp />}
      {showScheduleBar && (
        <div className="flex justify-center bg-white dark:bg-gray-900">
          <Schedule />
        </div>
      )}
    </div>
  );
};

export default HeaderComponent;
