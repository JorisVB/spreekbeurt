import { scheduleTypes, occurenceTypes } from './consts';

const exampleSchedules = [
  {
    id: 1,
    name: "Voorbeeld schedule 1",
    scheduleType: scheduleTypes.ADD.key,
    hours: [7, 14],
    occursEveryType: occurenceTypes.DAILY.key,
    occursEveryAmount: 3,
    startDate: new Date(2011, 1, 1),    
  },
  {
    id: 2,
    name: "Voorbeeld schedule 2",
    scheduleType: scheduleTypes.ADD.key,
    hours: [8, 9],
    occursEveryType: occurenceTypes.WEEKLY.key,
    occursEveryAmount: 2,    
    occurs: [1, 3, 4],
    startDate: new Date(2011, 1, 1),
    effectiveFrom: new Date(2012, 1, 1),
    effectiveTo: new Date(2014, 1, 1),    
  },
  {
    id: 3,
    name: "Voorbeeld schedule 3",
    scheduleType: scheduleTypes.ADD.key,
    hours: [8, 5],
    occursEveryType: occurenceTypes.MONTHLY.key,
    occursEveryAmount: 1,    
    occursDays: [1, 12, 18],
    occursWorkDays: [3, 5, 7],
    startDate: new Date(2011, 1, 1),    
  }
]

export { exampleSchedules }