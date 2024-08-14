"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

export default function Cart() {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const contactPage = () => {
    router.push("/Contact");
  };
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-xs pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-black bg-opacity-85 shadow-xl">
                <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-10">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-white">
                      Logical Labs
                    </DialogTitle>
                  </div>
                  <hr className="mt-2"></hr>
                  <div className="mt-5">
                    <div className="flex">
                      <ul
                        role="list"
                        className="my-3 flex flex-col gap-5 text-white"
                      >
                        <Link href="/">Home</Link>
                        <Link href="/#services">services</Link>
                        <Link href="/#about">About</Link>
                        <Link href="/careers">Careers</Link>
                        <Link href="/">Log Out</Link>
                      </ul>
                    </div>
                    <div className="pt-5">
                      <button
                        onClick={contactPage}
                        className="backgroundColor rounded-md px-5 py-2 text-white"
                      >
                        Book a Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
