"use client";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TableComponent from "./TableComponent";
import Filters, { ITypes } from "./Filters";

const animeStatus: {
  value: "" | "airing" | "complete" | "upcoming";
  label: "All" | "Airing" | "Complete" | "Upcoming";
}[] = [
  { value: "", label: "All" },
  { value: "airing", label: "Airing" },
  { value: "complete", label: "Complete" },
  { value: "upcoming", label: "Upcoming" },
];

const TabsSection = () => {
  const [tab, setTab] = useState(0);
  const [animeType, setAnimeType] = useState<ITypes | null>(null);

  return (
    <>
      <Tabs
        value={tab}
        onChange={(e, v) => {
          setTab(v);
          setAnimeType(null);
        }}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        {animeStatus.map((item) => (
          <Tab key={item.value} label={item.label} />
        ))}
      </Tabs>
      <Filters
        animeType={animeType}
        setAnimeType={setAnimeType}
        setTab={setTab}
        animeStatus={animeStatus[tab].label}
      />
      {animeStatus.map(
        (item) =>
          item.value === animeStatus[tab].value && (
            <TableComponent animeStatus={item.value} animeType={animeType} />
          )
      )}
    </>
  );
};

export default TabsSection;
