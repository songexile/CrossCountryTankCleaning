import React from "react";
import { Icon } from "@iconify/react";
import logoImg from "../assets/images/fav.png";
import config from "../config.json";

const Nav = ({ navIsSticky = true }: { navIsSticky?: boolean }) => {
  return (
    <div
      className={`py-2 px-4 bg-white shadow ${
        navIsSticky ? "sticky" : ""
      } top-0 left-0 z-50 w-full`}
    >
      <nav className="flex justify-between items-center w-full text-black max-md:hidden max-w-screen-xl mx-auto">
        <a href="/" className="text-2xl font-bold">
          <img src={logoImg.src} alt="logo" className="w-10 bg-white rounded-sm h-auto" />
        </a>
        <ul className="flex gap-4 items-center text-sm">
          <li>
            <details className="dropdown">
              <summary className="flex items-center cursor-pointer">
                Services
                <Icon icon="mdi:chevron-down" className="ml-1" />
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                {config.services.map((service) => (
                  <li key={service.name}>
                    <a href={service.url}>{service.name}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          {config.pages.map((page) => (
            <li key={page.name}>
              <a href={page.url} className="hover:text-gray-600 transition">{page.name}</a>
            </li>
          ))}
        </ul>
        <a href={config.bookingLink}>
          <button className="btn btn-primary text-white rounded-md">Book Now</button>
        </a>
      </nav>
      <nav className="flex justify-between items-center md:hidden">
        <div className="flex items-center gap-4">
          <label htmlFor="my-drawer" className="drawer-button">
            <Icon icon="mdi:menu" className="text-black text-3xl" />
          </label>
          <a href="/">
            <img
              src={logoImg.src}
              alt="logo"
              width={400}
              height={400}
              className="w-6 bg-white rounded-md"
            />
          </a>
        </div>
        <a href={config.bookingLink}>
          <button className="btn btn-primary btn-sm text-white rounded-md">Book Now</button>
        </a>
      </nav>
      <div className="drawer md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-white text-black min-h-full w-80 p-4 text-base">
            <li>
              <details>
                <summary className="flex items-center">
                  Services
                 
                </summary>
                <ul className="p-2">
                  {config.services.map((service) => (
                    <li key={service.name}>
                      <a href={service.url}>{service.name}</a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            {config.pages.map((page) => (
              <li key={page.name}>
                <a href={page.url}>{page.name}</a>
              </li>
            ))}
            <img
              src={logoImg.src}
              alt="logo"
              width={300}
              height={300}
              className="w-12 mt-auto rounded-md object-contain bg-white"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;