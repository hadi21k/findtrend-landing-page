import { Dialog } from "@headlessui/react";
import { Bars2Icon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

export default function Menubar() {
  const items = [
    { name: "About", href: "#about" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Solution", href: "#solution" },
    { name: "Features", href: "#features" },
    { name: "Login", href: "/login" },
  ];
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={openModal}
        className="rounded-md bg-black bg-opacity-20 px-4 py-2 focus:outline-none"
      >
        <Bars2Icon className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <Dialog
            as="div"
            className="relative z-50"
            open={isOpen}
            onClose={closeModal}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black bg-opacity-50"
            />
            <div className="fixed inset-0 overflow-y-auto">
              <div className="mt-[50px] ">
                <Dialog.Panel
                  as={motion.div}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full overflow-hidden bg-black p-6 text-white"
                >
                  <div className="flex flex-col space-y-4 overflow-y-auto px-1 py-2">
                    {items.map(({ name, href }, i) => (
                      <div key={i}>
                        <a href={href} onClick={closeModal}>
                          <h1 className="relative flex h-16 w-full items-center justify-center rounded-md px-2 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-primary hover:text-black">
                            {name}
                          </h1>
                        </a>
                      </div>
                    ))}
                    <div className="flex items-center justify-center">
                      <Button text="Register" color="white" />
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}

// </Menu.Items>
