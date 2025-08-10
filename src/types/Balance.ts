export interface MonthlyBalance {
  yearMonth: string; // YYYY-MM
  income: number;
  expense: number;
  difference: number;
  accounts: {
    accountName: string;
    balance: number;
  }[];
}