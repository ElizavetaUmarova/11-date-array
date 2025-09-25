const DATA = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];
function transformedDates(array) {
  const result = array
  .filter(dateStr => dateStr.includes('/') || dateStr.includes('-')) 
  .map(dateStr => {
    if (dateStr.includes('/')) {
      const parts = dateStr.split('/')
      return `${parts[1]}-${parts[0]}-${parts[2]}`;
    } else {
      return dateStr;
    }
  })
  .map((dateStr) => dateStr.split('-'))
  .filter((dateStr) => {
    let [day, month] = dateStr;
    if (day > 0 && day <= 31 && month > 0 && month <= 12 ) return true;
  })
  .map((dateStr) => dateStr.join('-'));
  return result;
}

const TRANSFORM_DATA = transformedDates(DATA);

console.log(TRANSFORM_DATA);

