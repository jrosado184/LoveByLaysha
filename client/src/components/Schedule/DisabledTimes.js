import React from 'react';
import { connect } from 'react-redux';
import trash from './../../assets/trash.png';
import { Months } from '../../Algos/Months';

const DisabledTimes = ({
  fetchAppointments,
  selectedDate,
  disabledTimes,
  enableTime,
}) => {
  const bookedTimes = fetchAppointments.map((time) => time.appointment_time);
  const adminSelectedDaysOff = disabledTimes.filter(
    (time) => !bookedTimes.includes(time)
  );

  return (
    <div className='w-full h-80'>
      <div className='w-full my-12 border border-pink-200 dark:border-neutral-900 desktop:hidden'></div>
      <div className='w-full flex flex-col items-center border border-pink-400 rounded-md h-60 my-6 dark:border-neutral-900 desktop:my-12'>
        <div className='flex w-full h-8 justify-center items-center border-b border-pink-400 dark:border-neutral-900'>
          <p className='font-medium text-pink-900 dark:text-neutral-100'>{`Disabled times for ${Months(
            selectedDate.month
          )} ${selectedDate.day}, ${selectedDate.year} `}</p>
        </div>
        {adminSelectedDaysOff.length ? (
          <div>
            {adminSelectedDaysOff.map((times, index) => (
              <div key={index} className='flex w-full justify-center my-2'>
                <ul>{times}</ul>
                <div className='w-6 flex items-center justify-center ml-2'>
                  <img
                    onClick={() => enableTime(times)}
                    className='w-3 object-fit cursor-pointer'
                    src={trash}
                    alt=''
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='flex justify-center items-center w-full h-60'>
            <p className='text-pink-900 dark:text-neutral-100'>
              No selected times off
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(DisabledTimes);
