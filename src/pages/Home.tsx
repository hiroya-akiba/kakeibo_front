import React, { useEffect, useState } from "react";
import { fetchHomeData } from "../api/home";
import type { MonthlyBalance } from "../types/Balance";
import MonthNavigator from "../components/MonthNavigator";
import BalanceTable from "../components/BalanceTable";

const Home: React.FC = () => {
  const [balances, setBalances] = useState<MonthlyBalance[]>([]);
  const [currentIndex, setCurrentIndex] = useState(3); // 前後3ヶ月のうち、真ん中が現在月

  useEffect(() => {
    fetchHomeData().then(setBalances);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < balances.length - 1) setCurrentIndex(currentIndex + 1);
  };

  if (balances.length === 0) return <div>読み込み中...</div>;

  return (
    <div>
      <h2>ホーム</h2>
      <MonthNavigator
        currentMonth={balances[currentIndex].yearMonth}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <BalanceTable data={balances[currentIndex]} />
    </div>
  );
};

export default Home;