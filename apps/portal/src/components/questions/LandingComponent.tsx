import { useState } from 'react';
import { Button, Select } from '@tih/ui';

import NavBar from '~/components/questions/NavBar';

import {
  COMPANIES,
  LOCATIONS,
  QUESTION_TYPES,
} from '~/utils/questions/constants';

export type LandingQueryData = {
  company: string;
  location: string;
  questionType: string;
};

export type LandingComponentProps = {
  onLanded: (data: LandingQueryData) => void;
};

export default function LandingComponent({
  onLanded: handleLandingQuery,
}: LandingComponentProps) {
  const [landingQueryData, setLandingQueryData] = useState<LandingQueryData>({
    company: 'google',
    location: 'singapore',
    questionType: 'coding',
  });

  const handleChangeCompany = (company: string) => {
    setLandingQueryData((prev) => ({ ...prev, company }));
  };

  const handleChangeLocation = (location: string) => {
    setLandingQueryData((prev) => ({ ...prev, location }));
  };

  const handleChangeType = (questionType: string) => {
    setLandingQueryData((prev) => ({ ...prev, questionType }));
  };

  return (
    <main className="flex flex-1 flex-col items-stretch overflow-y-auto bg-white">
      <div className="pb-4">
        <NavBar></NavBar>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-3">
        <div className="flex items-center justify-center">
          <img alt="app logo" className=" h-20 w-20" src="/logo.svg"></img>
          <h1 className="text-primary-600 px-4 text-center text-5xl font-bold">
            Tech Interview Question Bank
          </h1>
        </div>
        <p className="mx-auto max-w-lg py-6 px-4 text-center text-xl text-black sm:max-w-3xl">
          Get to know the latest SWE interview questions asked by top companies
        </p>

        <div className="mx-auto mt-6 flex max-w-lg items-baseline gap-3 px-4 text-center text-xl text-black sm:max-w-3xl">
          <p>Find</p>
          <div className=" space-x-2">
            <Select
              isLabelHidden={true}
              label="Type"
              options={QUESTION_TYPES}
              value={landingQueryData.questionType}
              onChange={handleChangeType}
            />
          </div>
          <p>questions from</p>
          <Select
            isLabelHidden={true}
            label="Company"
            options={COMPANIES}
            value={landingQueryData.company}
            onChange={handleChangeCompany}
          />
          <p>in</p>
          <Select
            isLabelHidden={true}
            label="Location"
            options={LOCATIONS}
            value={landingQueryData.location}
            onChange={handleChangeLocation}
          />
          <Button
            label="Go"
            variant="primary"
            onClick={() => handleLandingQuery(landingQueryData)}></Button>
        </div>
        <div>
          <p className="py-20 text-center">CAROUSELL PLACEHOLDER</p>
        </div>
      </div>
    </main>
  );
}
