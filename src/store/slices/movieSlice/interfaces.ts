import { IMovie } from "@/models/IMovie";

export interface MovieState {
  data: IMovie[];
  isLoading: boolean;
  isError: null | string;
}
