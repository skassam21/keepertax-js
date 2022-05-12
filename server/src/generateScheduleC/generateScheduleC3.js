/* eslint-disable no-console */
const multipliers3 = {
  meal: 0.5,
  car: 0.4,
  home: 0.1,
  phone: 0.5,
};

const transactions3 = [
  {
    id: 't1',
    category: 'meal',
    amount: 32.5,
    jobId: 'j1',
  },
  {
    id: 't2',
    category: 'meal',
    amount: 51.33,
    jobId: 'j2',
  },
  {
    id: 't3',
    category: 'car',
    amount: 300.02,
    jobId: 'j2',
  },
  {
    id: 't4',
    category: 'car',
    amount: 350.61,
    jobId: 'j2',
  },
  {
    id: 't5',
    category: 'meal',
    amount: 49.68,
    jobId: 'j1',
  },
  {
    id: 't6',
    category: 'payment',
    amount: 45.0,
    jobId: 'j1',
  },
  {
    id: 't7',
    category: 'home',
    amount: 550.0,
    jobId: 'j1',
  },
  {
    id: 't8',
    category: 'phone',
    amount: 81.98,
    jobId: 'j2',
  },
  {
    id: 't9',
    category: 'phone',
    amount: 81.98,
    jobId: 'j2',
  },
];

const jobs3 = [
  {
    id: 'j1',
  },
  {
    id: 'j2',
  },
];

function generateScheduleC3(multipliers, transactions, jobs) {
  return [
    {
      meal: 0,
      car: 0,
      payment: 0,
      home: 0,
      phone: 0,
    },
    {
      meal: 0,
      car: 0,
      payment: 0,
      home: 0,
      phone: 0,
    },
  ];
}

if (module === require.main) {
  console.log(generateScheduleC3(multipliers3, transactions3, jobs3));
}

module.exports = { multipliers3, transactions3, generateScheduleC3 };
