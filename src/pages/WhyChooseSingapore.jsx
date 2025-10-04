// 例子：正確的組件導出方式
import React from 'react';
import WhySGHero from '../components/WhyChooseSingapore/WhySGHero'; // 假設這是正確的路徑
import FivePointers from '../components/WhyChooseSingapore/FivePointers';
import StudyExpensesSection from '../components/WhyChooseSingapore/StudyExpensesSection';
import QASection from '../components/WhyChooseSingapore/QASection';
const WhyChooseSingapore = () => {
  return (
    <div>
      <WhySGHero />
      <FivePointers />
      <StudyExpensesSection />
      <QASection />
    </div>
  );
};

export default WhyChooseSingapore; // 這行必須有
