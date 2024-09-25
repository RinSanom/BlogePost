import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Dropdown,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { PiNotePencilLight } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import {
  getAccessToken,
  removeAccessToken,
} from "../../lib/secureLocalStorage";
import { useEffect, useState } from "react";

export function NavbarComponent({ username, profileUrl, bio }) {
  const [accessToken, setAccessToken] = useState("");
  const location = useLocation();
  useEffect(() => {
    const token = getAccessToken();
    setAccessToken(token);
  }, []);

  // Handle logout
  const handleLogout = () => {
    removeAccessToken();
  };

  return (
    <Navbar
      fluid
      rounded
      className="bg-slate-100 shadow-md  h-[70px]  transition duration-300 ease-in-out"
    >
      <NavbarBrand className="flex items-center">
        <img
          src="./public/assets/LogoFinal.png"
          alt="Logo"
          className="h-8 mr-3"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-secondary200 hidden sm:block">
          STORYBRIDGED
        </span>
      </NavbarBrand>

      <div className="flex items-center md:order-2">
        {accessToken ? (
          <>
            <div className="icon flex items-center justify-center ">
              <Link
                to="/postcard"
                className="text-2xl mt-3 mr-5 text-primary200 hover:text-primary100 transition duration-200"
              >
                <PiNotePencilLight className="w-9 h-9 mb-3 hover:scale-110 " />
              </Link>
            </div>
            <div className="">
              <Dropdown
                label={
                  <div className="profile">
                    <img
                      className="w-11 h-11 rounded-full border-2 border-primary100 transition duration-300 hover:scale-110 object-cover"
                      src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                      alt="Profile"
                    />
                  </div>
                }
                inline
              >
                <Dropdown.Item
                  as={Link}
                  to="/profile"
                  state={{ username, bio, profileUrl }}
                >
                  View Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/editprofile">
                  Edit Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
              </Dropdown>
            </div>
          </>
        ) : (
          <>
            <Button
              as={Link}
              to="/register"
              className="bg-primary100 hover:bg-primary200 hidden sm:block transition duration-200"
            >
              Register
            </Button>
            <Button
              as={Link}
              to="/login"
              className="ml-2 bg-primary100 hover:bg-primary200 hidden sm:block transition duration-200"
            >
              Login
            </Button>
          </>
        )}
        <NavbarToggle />
      </div>

      {/* For medium and larger screens: */}
      <NavbarCollapse className="hidden md:flex flex-col md:flex-row md:items-center">
        <NavbarLink
          as={Link}
          to="/"
          active
          className={`my-2 md:my-0 md:mr-4 ${
            location.pathname === "/" ? "text-primary200" : "text-secondary200"
          } hover:text-primary100 transition duration-200`}
        >
          Home
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/aboutus"
          className={`my-2 md:my-0 md:mr-4 ${
            location.pathname === "/aboutus"
              ? "text-primary200"
              : "text-secondary200"
          } hover:text-primary100 transition duration-200`}
        >
          About Us
        </NavbarLink>
      </NavbarCollapse>

      {/* For small screens (hidden until toggle): */}
      <NavbarCollapse className="md:hidden">
        <NavbarLink
          as={Link}
          to="/"
          active
          className={`my-2 md:my-0 md:mr-4 ${
            location.pathname === "/" ? "text-primary200" : "text-secondary200"
          } hover:text-primary100 transition duration-200`}
        >
          Home
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/aboutus"
          className={`my-2 md:my-0 md:mr-4 ${
            location.pathname === "/aboutus"
              ? "text-primary200"
              : "text-secondary200"
          } hover:text-primary100 transition duration-200`}
        >
          About Us
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
