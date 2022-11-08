import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

const Dropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left px-3 -py-2">
      <div>
        <Menu.Button
          className={`${styles.navLink1} ${styles.navLinkLtr} tracking-wider`}
        >
          EVENTS
          {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
        </Menu.Button>
      </div>

      <Transition as={Fragment}>
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href="/events/pitch2win">
                  <a
                    className={
                      // active ? 'bg-gray-100 ' : 'text-gray-700 block px-4 py-2 text-sm'
                      `text-gray-700 block px-4 py-2 text-sm`
                    }
                  >
                    Pitch2Win
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/events/toptalks">
                  <a
                    className={
                      // active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 block px-4 py-2 text-sm'
                      `text-gray-700 block px-4 py-2 text-sm`
                    }
                  >
                    TopTalks
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/events/aquizition">
                  <a
                    className={
                      // active ? `bg-gray-100 text-gray-900` : `text-gray-700 block px-4 py-2 text-sm`
                      `text-gray-700 block px-4 py-2 text-sm`
                    }
                  >
                    Aquizition
                  </a>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
