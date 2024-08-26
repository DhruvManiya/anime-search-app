import axios from "axios";
import { AnimeResponseDTO } from "./dto/anime.type";

export const fetchAnime = async ({
  status,
  type,
  page,
  limit,
}: {
  status: "" | "airing" | "complete" | "upcoming";
  type:
    | ""
    | "tv"
    | "movie"
    | "ova"
    | "special"
    | "ona"
    | "music"
    | "cm"
    | "pv"
    | "tv_special";
  page: number;
  limit: number;
}) => {
  const response = await axios.get<AnimeResponseDTO>(
    `https://api.jikan.moe/v4/anime?status=${status}&type=${type}&page=${page}&limit=${limit}`
  );
  return response.data;
};
