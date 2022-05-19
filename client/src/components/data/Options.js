export const Options = ({ disabledTimes }) => {
  const times = [
    { time: '10:00 AM' },
    { time: '10:30 AM' },
    { time: '11:00 AM' },
    { time: '11:30 AM' },
    { time: '12:00 AM' },
    { time: '12:30 AM' },
    { time: '1:00 PM' },
    { time: '1:30 PM' },
    { time: '2:00 PM' },
    { time: '2:30 PM' },
    { time: '3:00 PM' },
    { time: '3:30 PM' },
    { time: '4:00 PM' },
    { time: '4:30 PM' },
    { time: '5:00 PM' },
    { time: '5:30 PM' },
    { time: '6:00 PM' },
  ];

  return (
    <>
      <option disabled={disabledTimes.includes(times[0].time)} value='10:00 AM'>
        10:00 AM
      </option>
      ;
      <option disabled={disabledTimes.includes(times[1].time)} value='10:30 AM'>
        10:30 AM
      </option>
      ;
      <option disabled={disabledTimes.includes(times[2].time)} value='11:00 AM'>
        11:00 AM
      </option>
      ;
      <option disabled={disabledTimes.includes(times[3].time)} value='11:30 AM'>
        11:30 AM
      </option>
      ;
      <option disabled={disabledTimes.includes(times[4].time)} value='12:00 PM'>
        12:00 PM
      </option>
      ;
      <option disabled={disabledTimes.includes(times[5].time)} value='12:30 PM'>
        12:30 PM
      </option>
      ;
      <option disabled={disabledTimes.includes(times[6].time)} value='1:00 PM'>
        1:00 PM
      </option>
      ;
      <option disabled={disabledTimes.includes(times[7].time)} value='1:30 PM'>
        1:30 PM
      </option>
      ;
      <option disabled={disabledTimes.includes(times[8].time)} value='2:00 PM'>
        2:00 PM
      </option>
      ;
      <option disabled={disabledTimes.includes(times[9].time)} value='2:30 PM'>
        2:30 PM
      </option>
      ;
      <option disabled={disabledTimes.includes(times[10].time)} value='3:00 PM'>
        3:00 PM
      </option>
      ;
      <option disabled={disabledTimes.includes(times[11].time)} value='3:30 PM'>
        3:30 PM
      </option>
      ;
      <option disabled={disabledTimes.includes(times[12].time)} value='4:00 PM'>
        4:00 PM
      </option>
      ;
      <option disabled={disabledTimes.includes(times[13].time)} value='4:30 PM'>
        4:30 PM
      </option>
      ;
      <option disabled={disabledTimes.includes(times[14].time)} value='5:00 PM'>
        5:00 PM
      </option>
      ;
      <option disabled={disabledTimes.includes(times[15].time)} value='5:30 PM'>
        5:30 PM
      </option>
      ;
      <option disabled={disabledTimes.includes(times[16].time)} value='6:00 PM'>
        6:00 PM
      </option>
      ;
    </>
  );
};

export const styles = [
  'Shorties Full Set',
  'Medium Full Set',
  'Long Full Set',
  'XL Full Set',
  'XXL Full Set',
  'Extendo Full Set',
  'Freestyle',
];

export const refillSet = [
  'Shorties Full Set',
  'Medium Full Set',
  'Long Full Set',
  'XL Full Set',
  'XXL Full Set',
  'Extendo Full Set',
  'Freestyle',
];
