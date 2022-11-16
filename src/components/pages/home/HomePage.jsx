import React from 'react';
import DefaultLayout from '../../ui/layout/DefaultLayout';
import HomeHero from '../../modules/home/components/HomeHero';
import HomeHowItWorks from '../../modules/home/components/HomeHowItWorks';
import HomeFeatures from '../../modules/home/components/HomeFeatures';
import HomeChecklists from '../../modules/home/components/HomeChecklists';
import HomePricing from '../../modules/home/components/HomePricing';
import HomeQuestions from '../../modules/home/components/HomeQuestions';

export default function HomePage() {
  return (
    <div>
      <DefaultLayout>
        <HomeHero />
        <HomeHowItWorks />
        <HomeFeatures />
        <HomeChecklists />
        <HomePricing />
        <HomeQuestions />
      </DefaultLayout>
    </div>
  );
}
