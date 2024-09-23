import { Link } from "react-router-dom";
import { TfiPencilAlt } from "react-icons/tfi";
const UserData = (email) => {
  const userData = localStorage.getItem(email);
  return userData ? JSON.parse(userData) : null;
};
const HandleLogout = () => {
  localStorage.removeItem(UserData);
};
export function NavbarComponent() {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./public/assets/LogoFinal.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-secondary200">
            STORYBRIDGE
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {!UserData ? ( // Check if UserData is not present
            <>
              <Link to="/login">
                <button
                  type="button"
                  className="text-white bg-primary100 hover:bg-primary200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4"
                >
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button
                  type="button"
                  className="text-white bg-primary100 hover:bg-primary200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center shadow-lg transition duration-300 ease-in-out transform hover:scale-105 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Register
                </button>
              </Link>
            </>
          ) : (
            <>
              <div className="flex items-center">
                <TfiPencilAlt className="text-primary200 mr-4 text-3xl" />
                <Link to="/Profile">
                  <div className="w-12 h-12 bg-black rounded-full mr-4">
                    <img src=".src/assete/_MG_1803 copy.jpg" alt="" />
                  </div>
                </Link>
                <button
                  onClick={() => HandleLogout}
                  type="button"
                  className="text-white bg-primary100 hover:bg-primary200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center  duration-300 ease-in-out transform hover:scale-105 dark:bg-blue-600  dark:focus:ring-blue-800"
                >
                  Logout
                </button>
              </div>
            </>
          )}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
