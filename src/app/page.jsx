"use client";
import Nav from "./components/nav";
import React from "react";
import Footer from "./components/Footer";
import toolList from "@/db/tools.json";
import { Card } from "./components/card";
export default function Home() {
  return (
    <main className="" class="bg-gray-900">
      <Nav></Nav>
      <div class="flex justify-center flex-col items-center w-full">
        <div
          id="contributers"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mr-4 p-5  my-9 w-4/5 break-words  py-6 md:p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          {toolList.map((item) => (
            <Card title={item.name} link={item.link} desc={""} />
          ))}
        </div>

        <Footer />
      </div>
    </main>
  );
}
