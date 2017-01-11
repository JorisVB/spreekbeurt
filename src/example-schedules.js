import { scheduleTypes, occurrenceTypes } from './consts';

const exampleSchedules = [
  {
    id: 1,
    name: "Voorbeeld schedule 1",
    scheduleType: scheduleTypes.ADD.key,
    hours: [7, 14],
    occursEveryType: occurrenceTypes.WEEKLY.key,
    occursEveryAmount: 3,
    occurs: [],
    startDate: new Date(2011, 1, 1),    
    endDate: new Date(2021, 1, 1),       
  },
  {
    id: 2,
    name: "Voorbeeld schedule 2",
    scheduleType: scheduleTypes.ADD.key,
    hours: [8, 9],
    occursEveryType: occurrenceTypes.DAILY.key,
    occursEveryAmount: 2,    
    occurs: [1, 3, 4],
    startDate: new Date(2011, 1, 1),
    endDate: new Date(2012, 1, 1), 
  },
  {
    id: 3,
    name: "Voorbeeld schedule 3",
    scheduleType: scheduleTypes.CANCEL.key,
    hours: [8, 5],
    occursEveryType: occurrenceTypes.MONTHLY.key,
    occursEveryAmount: 1,    
    occurs: [1, 12, 18],
    startDate: new Date(2011, 1, 1), 
    endDate: new Date(2021, 1, 1),    
  }
]

export { exampleSchedules }