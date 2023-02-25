export const Options = ({ disabledTimes }) => {
  const times = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
  ];

  const isTimeUnavailable = (index) => {
    let map = {};
    let queue = [];

    disabledTimes.map((val) => queue.push(val));

    while (queue.length) {
      let left =
        times.indexOf(queue[0]) - 5 < 0 ? 0 : times.indexOf(queue[0]) - 5;
      let right =
        times.indexOf(queue[0]) + 5 > times.length - 1
          ? times.length - 1
          : times.indexOf(queue[0]) + 5;
      for (let i = left; i <= right; i++) {
        map[i] = times[i];
      }
      queue.shift();
    }
    return index in map;
  };

  return (
    <>
      <option disabled={isTimeUnavailable(0)} value='10:00 AM'>
        10:00 AM
      </option>
      ;
      <option disabled={isTimeUnavailable(1)} value='10:30 AM'>
        10:30 AM
      </option>
      ;
      <option disabled={isTimeUnavailable(2)} value='11:00 AM'>
        11:00 AM
      </option>
      ;
      <option disabled={isTimeUnavailable(3)} value='11:30 AM'>
        11:30 AM
      </option>
      ;
      <option disabled={isTimeUnavailable(4)} value='12:00 PM'>
        12:00 PM
      </option>
      ;
      <option disabled={isTimeUnavailable(5)} value='12:30 PM'>
        12:30 PM
      </option>
      ;
      <option disabled={isTimeUnavailable(6)} value='1:00 PM'>
        1:00 PM
      </option>
      ;
      <option disabled={isTimeUnavailable(7)} value='1:30 PM'>
        1:30 PM
      </option>
      ;
      <option disabled={isTimeUnavailable(8)} value='2:00 PM'>
        2:00 PM
      </option>
      ;
      <option disabled={isTimeUnavailable(9)} value='2:30 PM'>
        2:30 PM
      </option>
      ;
      <option disabled={isTimeUnavailable(10)} value='3:00 PM'>
        3:00 PM
      </option>
      ;
      <option disabled={isTimeUnavailable(11)} value='3:30 PM'>
        3:30 PM
      </option>
      ;
      <option disabled={isTimeUnavailable(12)} value='4:00 PM'>
        4:00 PM
      </option>
      ;
      <option disabled={isTimeUnavailable(13)} value='4:30 PM'>
        4:30 PM
      </option>
      ;
      <option disabled={isTimeUnavailable(14)} value='5:00 PM'>
        5:00 PM
      </option>
      ;
      <option disabled={isTimeUnavailable(15)} value='5:30 PM'>
        5:30 PM
      </option>
      ;
      <option disabled={isTimeUnavailable(16)} value='6:00 PM'>
        6:00 PM
      </option>
      ;
    </>
  );
};

export const styles = [
  "Shorties Full Set",
  "Medium Full Set",
  "Long Full Set",
  "XL Full Set",
  "XXL Full Set",
  "Extendo Full Set",
  "Freestyle",
];

export const refillSet = [
  "Shorties Full Set",
  "Medium Full Set",
  "Long Full Set",
  "XL Full Set",
  "XXL Full Set",
  "Extendo Full Set",
  "Freestyle",
];
