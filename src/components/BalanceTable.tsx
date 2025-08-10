import React from "react";
import type { MonthlyBalance } from "../types/Balance";

interface Props {
  data: MonthlyBalance;
}

const BalanceTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="balance-table">
      <h3>{data.yearMonth}</h3>
      <table>
        <thead>
          <tr>
            <th>口座</th>
            <th>残高</th>
          </tr>
        </thead>
        <tbody>
          {data.accounts.map((acc, i) => (
            <tr key={i}>
              <td>{acc.accountName}</td>
              <td>{acc.balance.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>収入: {data.income.toLocaleString()}</p>
      <p>支出: {data.expense.toLocaleString()}</p>
      <p>差額: {data.difference.toLocaleString()}</p>
    </div>
  );
};

export default BalanceTable;