export interface StateCancerDetail {
  totalCases: number;
  rate: number;
  male: number;
  female: number;
  topCancers: { type: string; cases: number; percentage: number }[];
  ageGroups: { group: string; cases: number }[];
  mortalityRate: number;
  treatmentCenters: number;
  survivalRate: number;
  yearlyTrend: { year: number; cases: number }[];
}

export const statesCancerData: Record<string, StateCancerDetail> = {
  "Uttar Pradesh": {
    totalCases: 210000, rate: 85, male: 115000, female: 95000,
    topCancers: [
      { type: "Oral", cases: 44100, percentage: 21 },
      { type: "Lung", cases: 37800, percentage: 18 },
      { type: "Breast", cases: 31500, percentage: 15 },
      { type: "Cervical", cases: 25200, percentage: 12 },
      { type: "Stomach", cases: 18900, percentage: 9 },
      { type: "Colorectal", cases: 14700, percentage: 7 },
      { type: "Liver", cases: 12600, percentage: 6 },
      { type: "Leukemia", cases: 10500, percentage: 5 },
      { type: "Others", cases: 14700, percentage: 7 },
    ],
    ageGroups: [
      { group: "0-19", cases: 8400 }, { group: "20-39", cases: 25200 },
      { group: "40-59", cases: 75600 }, { group: "60-79", cases: 84000 }, { group: "80+", cases: 16800 },
    ],
    mortalityRate: 62, treatmentCenters: 85, survivalRate: 38,
    yearlyTrend: [
      { year: 2018, cases: 170000 }, { year: 2019, cases: 180000 }, { year: 2020, cases: 185000 },
      { year: 2021, cases: 195000 }, { year: 2022, cases: 202000 }, { year: 2023, cases: 210000 },
    ],
  },
  "Maharashtra": {
    totalCases: 165000, rate: 95, male: 82000, female: 83000,
    topCancers: [
      { type: "Breast", cases: 33000, percentage: 20 },
      { type: "Lung", cases: 26400, percentage: 16 },
      { type: "Oral", cases: 23100, percentage: 14 },
      { type: "Cervical", cases: 18150, percentage: 11 },
      { type: "Colorectal", cases: 14850, percentage: 9 },
      { type: "Prostate", cases: 11550, percentage: 7 },
      { type: "Stomach", cases: 9900, percentage: 6 },
      { type: "Liver", cases: 8250, percentage: 5 },
      { type: "Others", cases: 19800, percentage: 12 },
    ],
    ageGroups: [
      { group: "0-19", cases: 6600 }, { group: "20-39", cases: 21450 },
      { group: "40-59", cases: 59400 }, { group: "60-79", cases: 62700 }, { group: "80+", cases: 14850 },
    ],
    mortalityRate: 55, treatmentCenters: 120, survivalRate: 45,
    yearlyTrend: [
      { year: 2018, cases: 135000 }, { year: 2019, cases: 142000 }, { year: 2020, cases: 148000 },
      { year: 2021, cases: 155000 }, { year: 2022, cases: 160000 }, { year: 2023, cases: 165000 },
    ],
  },
  "West Bengal": {
    totalCases: 142000, rate: 110, male: 68000, female: 74000,
    topCancers: [
      { type: "Oral", cases: 29820, percentage: 21 },
      { type: "Lung", cases: 24140, percentage: 17 },
      { type: "Breast", cases: 22720, percentage: 16 },
      { type: "Cervical", cases: 15620, percentage: 11 },
      { type: "Stomach", cases: 12780, percentage: 9 },
      { type: "Colorectal", cases: 9940, percentage: 7 },
      { type: "Liver", cases: 8520, percentage: 6 },
      { type: "Others", cases: 18460, percentage: 13 },
    ],
    ageGroups: [
      { group: "0-19", cases: 5680 }, { group: "20-39", cases: 18460 },
      { group: "40-59", cases: 51120 }, { group: "60-79", cases: 55380 }, { group: "80+", cases: 11360 },
    ],
    mortalityRate: 58, treatmentCenters: 65, survivalRate: 42,
    yearlyTrend: [
      { year: 2018, cases: 118000 }, { year: 2019, cases: 124000 }, { year: 2020, cases: 128000 },
      { year: 2021, cases: 134000 }, { year: 2022, cases: 138000 }, { year: 2023, cases: 142000 },
    ],
  },
  "Kerala": {
    totalCases: 98000, rate: 135, male: 45000, female: 53000,
    topCancers: [
      { type: "Breast", cases: 22540, percentage: 23 },
      { type: "Lung", cases: 14700, percentage: 15 },
      { type: "Colorectal", cases: 11760, percentage: 12 },
      { type: "Thyroid", cases: 9800, percentage: 10 },
      { type: "Oral", cases: 8820, percentage: 9 },
      { type: "Stomach", cases: 7840, percentage: 8 },
      { type: "Prostate", cases: 5880, percentage: 6 },
      { type: "Others", cases: 16660, percentage: 17 },
    ],
    ageGroups: [
      { group: "0-19", cases: 3920 }, { group: "20-39", cases: 11760 },
      { group: "40-59", cases: 35280 }, { group: "60-79", cases: 38220 }, { group: "80+", cases: 8820 },
    ],
    mortalityRate: 48, treatmentCenters: 95, survivalRate: 52,
    yearlyTrend: [
      { year: 2018, cases: 78000 }, { year: 2019, cases: 82000 }, { year: 2020, cases: 86000 },
      { year: 2021, cases: 90000 }, { year: 2022, cases: 94000 }, { year: 2023, cases: 98000 },
    ],
  },
  "Tamil Nadu": {
    totalCases: 95000, rate: 100, male: 46000, female: 49000,
    topCancers: [
      { type: "Breast", cases: 19000, percentage: 20 },
      { type: "Lung", cases: 15200, percentage: 16 },
      { type: "Oral", cases: 13300, percentage: 14 },
      { type: "Cervical", cases: 10450, percentage: 11 },
      { type: "Colorectal", cases: 8550, percentage: 9 },
      { type: "Stomach", cases: 7600, percentage: 8 },
      { type: "Thyroid", cases: 5700, percentage: 6 },
      { type: "Others", cases: 15200, percentage: 16 },
    ],
    ageGroups: [
      { group: "0-19", cases: 3800 }, { group: "20-39", cases: 12350 },
      { group: "40-59", cases: 34200 }, { group: "60-79", cases: 36100 }, { group: "80+", cases: 8550 },
    ],
    mortalityRate: 50, treatmentCenters: 88, survivalRate: 50,
    yearlyTrend: [
      { year: 2018, cases: 78000 }, { year: 2019, cases: 82000 }, { year: 2020, cases: 85000 },
      { year: 2021, cases: 89000 }, { year: 2022, cases: 92000 }, { year: 2023, cases: 95000 },
    ],
  },
  "Karnataka": {
    totalCases: 88000, rate: 90, male: 43000, female: 45000,
    topCancers: [
      { type: "Breast", cases: 17600, percentage: 20 },
      { type: "Lung", cases: 14080, percentage: 16 },
      { type: "Oral", cases: 11440, percentage: 13 },
      { type: "Cervical", cases: 9680, percentage: 11 },
      { type: "Colorectal", cases: 7920, percentage: 9 },
      { type: "Stomach", cases: 6160, percentage: 7 },
      { type: "Others", cases: 21120, percentage: 24 },
    ],
    ageGroups: [
      { group: "0-19", cases: 3520 }, { group: "20-39", cases: 11440 },
      { group: "40-59", cases: 31680 }, { group: "60-79", cases: 33440 }, { group: "80+", cases: 7920 },
    ],
    mortalityRate: 52, treatmentCenters: 75, survivalRate: 48,
    yearlyTrend: [
      { year: 2018, cases: 72000 }, { year: 2019, cases: 76000 }, { year: 2020, cases: 79000 },
      { year: 2021, cases: 83000 }, { year: 2022, cases: 86000 }, { year: 2023, cases: 88000 },
    ],
  },
  "Rajasthan": {
    totalCases: 78000, rate: 72, male: 42000, female: 36000,
    topCancers: [
      { type: "Oral", cases: 18720, percentage: 24 },
      { type: "Lung", cases: 13260, percentage: 17 },
      { type: "Breast", cases: 10140, percentage: 13 },
      { type: "Cervical", cases: 8580, percentage: 11 },
      { type: "Stomach", cases: 6240, percentage: 8 },
      { type: "Others", cases: 21060, percentage: 27 },
    ],
    ageGroups: [
      { group: "0-19", cases: 3900 }, { group: "20-39", cases: 10140 },
      { group: "40-59", cases: 28080 }, { group: "60-79", cases: 29640 }, { group: "80+", cases: 6240 },
    ],
    mortalityRate: 65, treatmentCenters: 42, survivalRate: 35,
    yearlyTrend: [
      { year: 2018, cases: 62000 }, { year: 2019, cases: 66000 }, { year: 2020, cases: 69000 },
      { year: 2021, cases: 73000 }, { year: 2022, cases: 76000 }, { year: 2023, cases: 78000 },
    ],
  },
  "Gujarat": {
    totalCases: 75000, rate: 82, male: 39000, female: 36000,
    topCancers: [
      { type: "Oral", cases: 16500, percentage: 22 },
      { type: "Breast", cases: 12000, percentage: 16 },
      { type: "Lung", cases: 11250, percentage: 15 },
      { type: "Cervical", cases: 8250, percentage: 11 },
      { type: "Colorectal", cases: 6000, percentage: 8 },
      { type: "Others", cases: 21000, percentage: 28 },
    ],
    ageGroups: [
      { group: "0-19", cases: 3000 }, { group: "20-39", cases: 9750 },
      { group: "40-59", cases: 27000 }, { group: "60-79", cases: 28500 }, { group: "80+", cases: 6750 },
    ],
    mortalityRate: 58, treatmentCenters: 55, survivalRate: 42,
    yearlyTrend: [
      { year: 2018, cases: 60000 }, { year: 2019, cases: 63000 }, { year: 2020, cases: 66000 },
      { year: 2021, cases: 70000 }, { year: 2022, cases: 73000 }, { year: 2023, cases: 75000 },
    ],
  },
  "Madhya Pradesh": {
    totalCases: 72000, rate: 68, male: 40000, female: 32000,
    topCancers: [
      { type: "Oral", cases: 17280, percentage: 24 },
      { type: "Lung", cases: 12240, percentage: 17 },
      { type: "Breast", cases: 9360, percentage: 13 },
      { type: "Cervical", cases: 7920, percentage: 11 },
      { type: "Stomach", cases: 5040, percentage: 7 },
      { type: "Others", cases: 20160, percentage: 28 },
    ],
    ageGroups: [
      { group: "0-19", cases: 3600 }, { group: "20-39", cases: 9360 },
      { group: "40-59", cases: 25920 }, { group: "60-79", cases: 27360 }, { group: "80+", cases: 5760 },
    ],
    mortalityRate: 66, treatmentCenters: 38, survivalRate: 34,
    yearlyTrend: [
      { year: 2018, cases: 58000 }, { year: 2019, cases: 61000 }, { year: 2020, cases: 64000 },
      { year: 2021, cases: 67000 }, { year: 2022, cases: 70000 }, { year: 2023, cases: 72000 },
    ],
  },
  "Bihar": {
    totalCases: 70000, rate: 55, male: 38000, female: 32000,
    topCancers: [
      { type: "Oral", cases: 16100, percentage: 23 },
      { type: "Lung", cases: 11900, percentage: 17 },
      { type: "Breast", cases: 9100, percentage: 13 },
      { type: "Cervical", cases: 8400, percentage: 12 },
      { type: "Stomach", cases: 5600, percentage: 8 },
      { type: "Others", cases: 18900, percentage: 27 },
    ],
    ageGroups: [
      { group: "0-19", cases: 4200 }, { group: "20-39", cases: 9800 },
      { group: "40-59", cases: 25200 }, { group: "60-79", cases: 25200 }, { group: "80+", cases: 5600 },
    ],
    mortalityRate: 70, treatmentCenters: 22, survivalRate: 30,
    yearlyTrend: [
      { year: 2018, cases: 55000 }, { year: 2019, cases: 58000 }, { year: 2020, cases: 61000 },
      { year: 2021, cases: 64000 }, { year: 2022, cases: 67000 }, { year: 2023, cases: 70000 },
    ],
  },
  "Andhra Pradesh": {
    totalCases: 65000, rate: 88, male: 32000, female: 33000,
    topCancers: [
      { type: "Breast", cases: 13000, percentage: 20 },
      { type: "Oral", cases: 10400, percentage: 16 },
      { type: "Lung", cases: 9750, percentage: 15 },
      { type: "Cervical", cases: 7800, percentage: 12 },
      { type: "Stomach", cases: 5200, percentage: 8 },
      { type: "Others", cases: 18850, percentage: 29 },
    ],
    ageGroups: [
      { group: "0-19", cases: 2600 }, { group: "20-39", cases: 8450 },
      { group: "40-59", cases: 23400 }, { group: "60-79", cases: 24700 }, { group: "80+", cases: 5850 },
    ],
    mortalityRate: 56, treatmentCenters: 48, survivalRate: 44,
    yearlyTrend: [
      { year: 2018, cases: 52000 }, { year: 2019, cases: 55000 }, { year: 2020, cases: 57000 },
      { year: 2021, cases: 60000 }, { year: 2022, cases: 63000 }, { year: 2023, cases: 65000 },
    ],
  },
  "Odisha": {
    totalCases: 55000, rate: 78, male: 29000, female: 26000,
    topCancers: [
      { type: "Oral", cases: 12100, percentage: 22 },
      { type: "Lung", cases: 9350, percentage: 17 },
      { type: "Breast", cases: 8250, percentage: 15 },
      { type: "Cervical", cases: 6600, percentage: 12 },
      { type: "Stomach", cases: 4400, percentage: 8 },
      { type: "Others", cases: 14300, percentage: 26 },
    ],
    ageGroups: [
      { group: "0-19", cases: 2750 }, { group: "20-39", cases: 7150 },
      { group: "40-59", cases: 19800 }, { group: "60-79", cases: 20900 }, { group: "80+", cases: 4400 },
    ],
    mortalityRate: 63, treatmentCenters: 28, survivalRate: 37,
    yearlyTrend: [
      { year: 2018, cases: 44000 }, { year: 2019, cases: 46000 }, { year: 2020, cases: 48000 },
      { year: 2021, cases: 51000 }, { year: 2022, cases: 53000 }, { year: 2023, cases: 55000 },
    ],
  },
  "Assam": {
    totalCases: 48000, rate: 95, male: 26000, female: 22000,
    topCancers: [
      { type: "Oral", cases: 12000, percentage: 25 },
      { type: "Lung", cases: 8640, percentage: 18 },
      { type: "Stomach", cases: 6240, percentage: 13 },
      { type: "Breast", cases: 5760, percentage: 12 },
      { type: "Cervical", cases: 4320, percentage: 9 },
      { type: "Others", cases: 11040, percentage: 23 },
    ],
    ageGroups: [
      { group: "0-19", cases: 2400 }, { group: "20-39", cases: 6240 },
      { group: "40-59", cases: 17280 }, { group: "60-79", cases: 18240 }, { group: "80+", cases: 3840 },
    ],
    mortalityRate: 68, treatmentCenters: 18, survivalRate: 32,
    yearlyTrend: [
      { year: 2018, cases: 38000 }, { year: 2019, cases: 40000 }, { year: 2020, cases: 42000 },
      { year: 2021, cases: 44000 }, { year: 2022, cases: 46000 }, { year: 2023, cases: 48000 },
    ],
  },
  "Punjab": {
    totalCases: 45000, rate: 105, male: 24000, female: 21000,
    topCancers: [
      { type: "Breast", cases: 9000, percentage: 20 },
      { type: "Lung", cases: 7650, percentage: 17 },
      { type: "Oral", cases: 6300, percentage: 14 },
      { type: "Colorectal", cases: 4950, percentage: 11 },
      { type: "Prostate", cases: 4050, percentage: 9 },
      { type: "Others", cases: 13050, percentage: 29 },
    ],
    ageGroups: [
      { group: "0-19", cases: 1800 }, { group: "20-39", cases: 5850 },
      { group: "40-59", cases: 16200 }, { group: "60-79", cases: 17100 }, { group: "80+", cases: 4050 },
    ],
    mortalityRate: 54, treatmentCenters: 42, survivalRate: 46,
    yearlyTrend: [
      { year: 2018, cases: 36000 }, { year: 2019, cases: 38000 }, { year: 2020, cases: 40000 },
      { year: 2021, cases: 42000 }, { year: 2022, cases: 44000 }, { year: 2023, cases: 45000 },
    ],
  },
  "Jharkhand": {
    totalCases: 38000, rate: 65, male: 21000, female: 17000,
    topCancers: [
      { type: "Oral", cases: 9120, percentage: 24 },
      { type: "Lung", cases: 6460, percentage: 17 },
      { type: "Breast", cases: 4940, percentage: 13 },
      { type: "Cervical", cases: 4560, percentage: 12 },
      { type: "Stomach", cases: 3040, percentage: 8 },
      { type: "Others", cases: 9880, percentage: 26 },
    ],
    ageGroups: [
      { group: "0-19", cases: 2280 }, { group: "20-39", cases: 4940 },
      { group: "40-59", cases: 13680 }, { group: "60-79", cases: 14060 }, { group: "80+", cases: 3040 },
    ],
    mortalityRate: 68, treatmentCenters: 15, survivalRate: 32,
    yearlyTrend: [
      { year: 2018, cases: 30000 }, { year: 2019, cases: 32000 }, { year: 2020, cases: 33000 },
      { year: 2021, cases: 35000 }, { year: 2022, cases: 37000 }, { year: 2023, cases: 38000 },
    ],
  },
  "Telangana": {
    totalCases: 52000, rate: 92, male: 25000, female: 27000,
    topCancers: [
      { type: "Breast", cases: 11440, percentage: 22 },
      { type: "Lung", cases: 8320, percentage: 16 },
      { type: "Oral", cases: 7280, percentage: 14 },
      { type: "Cervical", cases: 5720, percentage: 11 },
      { type: "Colorectal", cases: 4680, percentage: 9 },
      { type: "Others", cases: 14560, percentage: 28 },
    ],
    ageGroups: [
      { group: "0-19", cases: 2080 }, { group: "20-39", cases: 6760 },
      { group: "40-59", cases: 18720 }, { group: "60-79", cases: 19760 }, { group: "80+", cases: 4680 },
    ],
    mortalityRate: 52, treatmentCenters: 52, survivalRate: 48,
    yearlyTrend: [
      { year: 2018, cases: 42000 }, { year: 2019, cases: 44000 }, { year: 2020, cases: 46000 },
      { year: 2021, cases: 48000 }, { year: 2022, cases: 50000 }, { year: 2023, cases: 52000 },
    ],
  },
  "Delhi": {
    totalCases: 32000, rate: 120, male: 16500, female: 15500,
    topCancers: [
      { type: "Breast", cases: 7040, percentage: 22 },
      { type: "Lung", cases: 5760, percentage: 18 },
      { type: "Colorectal", cases: 3840, percentage: 12 },
      { type: "Oral", cases: 3520, percentage: 11 },
      { type: "Prostate", cases: 2880, percentage: 9 },
      { type: "Thyroid", cases: 2240, percentage: 7 },
      { type: "Others", cases: 6720, percentage: 21 },
    ],
    ageGroups: [
      { group: "0-19", cases: 1280 }, { group: "20-39", cases: 4480 },
      { group: "40-59", cases: 11520 }, { group: "60-79", cases: 11840 }, { group: "80+", cases: 2880 },
    ],
    mortalityRate: 45, treatmentCenters: 65, survivalRate: 55,
    yearlyTrend: [
      { year: 2018, cases: 25000 }, { year: 2019, cases: 27000 }, { year: 2020, cases: 28000 },
      { year: 2021, cases: 29000 }, { year: 2022, cases: 31000 }, { year: 2023, cases: 32000 },
    ],
  },
  "Mizoram": {
    totalCases: 8500, rate: 180, male: 4800, female: 3700,
    topCancers: [
      { type: "Stomach", cases: 2210, percentage: 26 },
      { type: "Lung", cases: 1700, percentage: 20 },
      { type: "Oral", cases: 1275, percentage: 15 },
      { type: "Liver", cases: 935, percentage: 11 },
      { type: "Breast", cases: 680, percentage: 8 },
      { type: "Others", cases: 1700, percentage: 20 },
    ],
    ageGroups: [
      { group: "0-19", cases: 425 }, { group: "20-39", cases: 1105 },
      { group: "40-59", cases: 3060 }, { group: "60-79", cases: 3230 }, { group: "80+", cases: 680 },
    ],
    mortalityRate: 72, treatmentCenters: 5, survivalRate: 28,
    yearlyTrend: [
      { year: 2018, cases: 6500 }, { year: 2019, cases: 7000 }, { year: 2020, cases: 7300 },
      { year: 2021, cases: 7800 }, { year: 2022, cases: 8200 }, { year: 2023, cases: 8500 },
    ],
  },
};
