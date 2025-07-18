import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


const today = dayjs()



const date = today.add(2, 'days');
console.log(date.format('MMMM D'))

const past = today.subtract(1, 'months')
console.log(past.format('MMMM D'));

console.log(today.format('D dddd'));


function isWeekend(date) {
  const week = date.format('dddd')
  if(week === 'Saturday'){
    return 'Saturday'
  }else if(week === 'Sunday') {
    return 'Sunday'
  }else {
    return 'OK'
  }

}

console.log(isWeekend(date))