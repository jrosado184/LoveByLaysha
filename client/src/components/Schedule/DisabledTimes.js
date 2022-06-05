import React from 'react';
import { connect } from 'react-redux';
import trash from './../../assets/trash.png';

const DisabledTimes = ({
  fetchAppointments,
  dispatch,
  disabledTimes,
  enableTime,
}) => {
  const bookedTimes = fetchAppointments.map((time) => time.appointment_time);
  const adminSelectedDaysOff = disabledTimes.filter(
    (time) => !bookedTimes.includes(time)
  );

  return (
    <div>
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
          <p>No selected times off</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(DisabledTimes);
