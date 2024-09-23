import { AxiosResponse } from "axios";
import { Book } from "@/entities/book/model/types";
import axiosConfigBooks from "@/shared/api/books";

interface IFetchBooks {
  numFound: number;
  start: number;
  docs: Book[];
}

export const fetchBooks = async (
  page: number,
): Promise<AxiosResponse<IFetchBooks>> => {
  return await axiosConfigBooks.get<IFetchBooks>("search.json", {
    params: {
      q: "the+lord+of+the+rings",
      page,
      limit: "",
    },
  });
};
