import axios from "axios";
import type { MonthlyBalance } from "../types/Balance";

export const fetchHomeData = async (): Promise<MonthlyBalance[]> => {
  const res = await axios.get<MonthlyBalance[]>("/api/home");
  return res.data;
};