

// dynamically adjust callender 
window.onload = function() {

  // get todays date and format to 'yyyy-mm-dd'
  const todayDate = new Date()
  const newDate = new Date(todayDate).toISOString().split('T')[0]

  // API only fetches up to 16 days date becomes limit to be picked
  const dateLimit = new Date()
  dateLimit.setDate(new Date().getDate() + 15)
  const newDateLimit = new Date(dateLimit).toISOString().split('T')[0]

  // dynamically change the date shown on callender to tomorrows date
  var datePicker = document.querySelector('input[type="date"]');
  datePicker.value = newDate;
  datePicker.min = newDate;
  datePicker.max = newDateLimit;

};

function startUp() {
  console.log('hey were doing stuff')

}

export { startUp }