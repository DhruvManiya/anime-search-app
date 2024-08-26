import { Autocomplete, TextField } from "@mui/material";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { X, Trash2 } from "react-feather";

export type ITypes = {
  value:
    | "tv"
    | "movie"
    | "ova"
    | "special"
    | "ona"
    | "music"
    | "cm"
    | "pv"
    | "tv_special";
  label: string;
};

interface IFiltersProps {
  animeStatus: "All" | "Airing" | "Complete" | "Upcoming";
  animeType: ITypes | null;
  setAnimeType: Dispatch<SetStateAction<ITypes | null>>;
  setTab: Dispatch<SetStateAction<number>>;
}

const types: ITypes[] = [
  { value: "tv", label: "TV" },
  { value: "movie", label: "Movie" },
  { value: "ova", label: "OVA" },
  { value: "special", label: "Special" },
  { value: "ona", label: "ONA" },
  { value: "music", label: "Music" },
  { value: "cm", label: "CM" },
  { value: "pv", label: "PV" },
  { value: "tv_special", label: "TV Special" },
];

const Filters: FC<IFiltersProps> = (props) => {
  const { animeStatus, setTab, animeType, setAnimeType } = props;

  return (
    <section className="py-8 w-full">
      <div className="flex items-center w-full gap-6 mb-6">
        <Autocomplete
          options={types}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField {...params} label="Types" placeholder="Types" />
          )}
          className="w-56"
          onChange={(e, v) => setAnimeType(v)}
          value={animeType}
        />
      </div>

      <div className="flex items-center">
        {animeStatus !== "All" && (
          <>
            <div className="flex items-center">
              Types:
              <span className="px-3 py-1 rounded-xl ml-2 bg-red-300 text-xs flex items-center w-fit">
                {animeStatus}{" "}
                <X
                  onClick={() => setTab(0)}
                  className="ml-2 inline size-4 cursor-pointer rounded-full p-[2px] hover:bg-red-200"
                />
              </span>
              <span className="mx-2 inline">|</span>
            </div>
          </>
        )}
        {animeType && (
          <>
            <div className="flex items-center">
              Status:
              <span className="px-3 py-1 rounded-xl ml-2 bg-red-300 text-xs flex items-center w-fit">
                {animeType.label}{" "}
                <X
                  onClick={() => setTab(0)}
                  className="ml-2 inline size-4 cursor-pointer rounded-full p-[2px] hover:bg-red-200"
                />
              </span>
              <span className="mx-2 inline">|</span>
            </div>
          </>
        )}
        {(animeStatus !== "All" || animeType) && (
          <span
            onClick={() => {
              setTab(0);
              setAnimeType(null);
            }}
            className="px-3 cursor-pointer py-1 rounded-xl bg-red-600 text-white text-xs flex items-center w-fit"
          >
            Clear
            <Trash2 className="ml-2 inline size-4 rounded-full p-[2px] text-white" />
          </span>
        )}
      </div>
    </section>
  );
};

export default Filters;
