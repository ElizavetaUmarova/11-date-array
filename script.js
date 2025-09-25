const DATA = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

const FILTER_DATA = DATA
.filter(data => data.includes('/') || data.includes('-'))
.map((data) => data.split(/[/-]/))
.filter((data) => {
  let [day, month] = data;
  if (day > 0 && day <= 31 && month > 0 && month <= 12 ) return true;
})
.map((data) => data.join('-'));
console.log(FILTER_DATA);