const weekdata = ():Array<any> => {
  let week = [];

  for (let i = 0; i <= 6; i++) {
    let first = new Date().getDate() - new Date().getDay() + i;
    let day = new Date(new Date().setDate(first)).toISOString().slice(0, 10);
    let _tday = new Date(new Date().setDate(first)).toDateString()[0]
    let month = new Date(new Date().setDate(first)).toDateString().split(" ")[1]
        week.push({
        date:day,
        day:_tday,
        month:month
    });
  }
let title = week[0].month === week[6].month ? `${week[0].month} ${new Date().getFullYear()}` : `${week[0].month} ${new Date().getFullYear()} - ${week[6].month} ${new Date().getFullYear()}`
  return [week,title];
};

export {
    weekdata
}