import NotFondImage from "@/assets/Illustration/_404.svg?react";
import { ArrowLeft } from "lucide-react";

export const RootNotFound = () => {
  return (
    <section>
      <div className="container min-h-[80vh] px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-main-green ">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn't exist.Here are some
            helpful links:
          </p>
          <div className="flex items-center mt-6 gap-x-3">
            <button className="w-1/2 flex items-center justify-center text-nowrap px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
              <ArrowLeft />
              <span>Go back</span>
            </button>
            <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-main-black transition-colors duration-200 bg-main-green rounded-lg shrink-0 sm:w-auto hover:bg-main-green dark:hover:bg-main-green dark:bg-main-green">
              Take me home
            </button>
          </div>
        </div>
        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <NotFondImage className="w-full max-w-lg lg:mx-auto " />
        </div>
      </div>
    </section>
  );
};
