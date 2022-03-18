const Months = (x) => {
  const month = [
    "Empty",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  for (let i = 1; i < month.length - 1; i++) {
    return month[x];
  }
};

export default Months;
