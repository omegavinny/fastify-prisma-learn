import schedule from "node-schedule";

// executa de segunda as sexta as 6h;
schedule.scheduleJob({ hour: 6, minute: 0, dayOfWeek: [1, 2, 3, 5, 6], tz: 'Etc/GMT+3' }, () => {
  console.log('Task runs!');
});

// executa de segunda as sexta as 12h;
schedule.scheduleJob({ hour: 12, minute: 0, dayOfWeek: [1, 2, 3, 5, 6], tz: 'Etc/GMT+3' }, () => {
  console.log('Task runs!');
});

// executa de segunda as sexta as 18h;
schedule.scheduleJob({ hour: 18, minute: 0, dayOfWeek: [1, 2, 3, 5, 6], tz: 'Etc/GMT+3' }, () => {
  console.log('Task runs!');
});
