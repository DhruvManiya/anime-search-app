import { Anime, AnimeResponseDTO } from "@/app/api/dto/anime.type";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, {
  Dispatch,
  FC,
  HTMLAttributes,
  SetStateAction,
  useState,
} from "react";

interface TTableProps extends HTMLAttributes<HTMLElement> {
  columns: string[];
  rows?: Anime[];
  rowsPerPage: number;
  page: number;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  setPage: Dispatch<SetStateAction<number>>;
  counts?: number;
  hasNextPage?: boolean;
}

const TTable: FC<TTableProps> = (props) => {
  const {
    columns,
    rows,
    counts,
    page,
    rowsPerPage,
    setPage,
    setRowsPerPage,
    ...otehr
  } = props;

  return (
    <section className="border-2 rounded-xl">
      <TableContainer>
        {!!rows ? (
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            // size={dense ? "small" : "medium"}
          >
            {/* table head */}
            <TableHead>
              <TableRow>
                {columns.map((headCell) => (
                  <TableCell key={headCell} align={"left"} padding={"normal"}>
                    {headCell}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* table body */}
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow
                    hover
                    // onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    // aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={index}
                    // selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                    component={Link}
                    href={row.url}
                    target="_blank"
                  >
                    <TableCell align={"left"} padding={"normal"}>
                      {row.images && (
                        <Image
                          src={row.images.jpg.image_url}
                          alt={row.title}
                          width={100}
                          height={100}
                          className="max-w-20 m-4 h-auto"
                        />
                      )}
                    </TableCell>
                    <TableCell align={"left"} padding={"normal"}>
                      <h6 className="text-xl">{row.title}</h6>
                    </TableCell>
                    <TableCell align={"left"} padding={"normal"}>
                      {row.status}
                    </TableCell>
                    <TableCell align={"left"} padding={"normal"}>
                      {row.type}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        ) : (
          <h3>No data found</h3>
        )}
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={counts ?? 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(e, v) => setPage(v)}
        onRowsPerPageChange={(e) => setRowsPerPage(Number(e.target.value))}
      />
    </section>
  );
};

export default TTable;
