"use client";
import TabsSection from "@/components/TabsSection";
import React, { FC } from "react";

interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = () => {
  return (
    <main className="container min-h-screen w-full flex flex-col justify-center py-12">
      <TabsSection />
    </main>
  );
};

export default HomePage;
