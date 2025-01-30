import React, { useState } from "react";
import { Icon } from "@iconify/react";
import logoImg from "../assets/images/fav.png";
import logoImg2 from "../assets/images/icon/cropped cross country logo no background.png";
import config from "../config.json";
import Image from "astro/components/Image.astro";

const Nav = ({ navIsSticky = true }: { navIsSticky?: boolean }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div
      className={`py-2 px-4 bg-white shadow ${
        navIsSticky ? "sticky" : ""
      } top-0 left-0 z-50 w-full`}
    >
      <nav className="flex justify-between items-center w-full text-black max-xl:hidden max-w-screen-xl mx-auto">
        <a href="/" className="text-2xl font-bold flex gap-2">
          <img src={logoImg2.src} alt="logo" className="h-16 bg-white rounded-sm" />
        </a>
        <ul className="flex gap-4 items-center text-sm">
          {config.pages.map((page) => (
            <li key={page.name} className="relative">
              {page.name === "Services" ? (
                <div>
                  <button
                    onClick={toggleDropdown}
                    className="hover:text-gray-600 transition flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-md"
                  >
                    {page.name}
                    <Icon icon="mdi:chevron-down" />
                  </button>
                  {isDropdownOpen && (
                    <ul
                      className="absolute bg-white shadow-lg p-2 rounded-md mt-2 w-48"
                      onMouseLeave={closeDropdown}
                    >
                      {config.services.map((service) => (
                        <li key={service.name}>
                          <a
                            href={service.url}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {service.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  href={page.url}
                  className="px-3 py-2 bg-gray-100 rounded-md hover:text-gray-600 transition"
                >
                  {page.name}
                </a>
              )}
            </li>
          ))}
        </ul>
        <a href={config.bookingLink} target="_blank">
          <button className="btn btn-primary text-white rounded-md">Enquire</button>
        </a>
      </nav>
      {/* Mobile Menu */}
      <nav className="flex justify-between items-center xl:hidden">
        <div className="flex items-center gap-2">
          <label htmlFor="my-drawer" className="drawer-button">
            <Icon icon="mdi:menu" className="text-black text-3xl" />
          </label>
          <a href="/" className="flex items-center gap-2">
            <img src={logoImg2.src} alt="logo" className="h-16 bg-white rounded-sm" />
          </a>
        </div>
        <a href={config.bookingLink} target="_blank">
          <button className="btn btn-primary btn-sm text-white rounded-md">Enquire</button>
        </a>
      </nav>
      <div className="drawer xl:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-white text-black min-h-full w-80 p-4 text-base">
            {config.pages.map((page) => (
              <li key={page.name}>
                <a
                  href={page.url}
                  className="px-3 py-2 rounded-md hover:text-gray-600"
                >
                  {page.name}
                </a>
                {page.name === "Services" && (
                  <ul className="ml-4">
                    {config.services.map((service) => (
                      <li key={service.name}>
                        <a
                          href={service.url}
                          className="px-3 py-2 rounded-md hover:text-gray-600"
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="mt-auto">
              <div className="flex items-center gap-2">
                <img
                  src={logoImg2.src}
                  alt="logo"
                  width={300}
                  height={300}
                  className="h-16 rounded-md object-contain bg-white"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;