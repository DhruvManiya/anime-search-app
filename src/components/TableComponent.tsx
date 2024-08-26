"use client";
import React, { FC, HTMLAttributes, useState } from "react";
import TTable from "./atoms/TTable";
import { useQuery } from "@tanstack/react-query";
import { fetchAnime } from "@/app/api/anime";
import { ITypes } from "./Filters";

interface ITableComponentProps extends HTMLAttributes<HTMLElement> {
  animeStatus: "" | "airing" | "complete" | "upcoming";
  animeType: ITypes | null;
}

const TableComponent: FC<ITableComponentProps> = (props) => {
  const { animeStatus, animeType } = props;

  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [page, setPage] = useState<number>(0);

  const { data } = useQuery({
    queryKey: [
      animeStatus,
      page,
      rowsPerPage,
      animeType ? animeType.value : "",
    ],
    queryFn: () =>
      fetchAnime({
        status: animeStatus,
        type: animeType ? animeType.value : "",
        page: page + 1,
        limit: rowsPerPage,
      }),
  });

  return (
    <TTable
      columns={["Anime", "name", "Type", "Status"]}
      rows={data?.data}
      counts={data?.pagination.items.total}
      rowsPerPage={rowsPerPage}
      page={page}
      setRowsPerPage={setRowsPerPage}
      setPage={setPage}
    />
  );
};

export default TableComponent;
