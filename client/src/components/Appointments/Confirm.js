import React, { useEffect, useState } from "react";
import check from "./../../assets/check.svg";
import { connect } from "react-redux";
import { getAppointments } from "../../redux/actions/appointment-actions";
import GoogleMapReact from "google-map-react";

const Confirm = ({ dispatch, fetchAppointments }) => {
  const [map, setMap] = useState({
    center: {
      lat: 40.041585195819714,
      lng: -75.06099370263013,
    },
    zoom: 14,
  });
  useEffect(() => {
    dispatch(getAppointments());
  }, [fetchAppointments]);

  const fil = fetchAppointments.filter(
    (elem) => elem === fetchAppointments[fetchAppointments.length - 1]
  );

  return (
    <div className="flex flex-col items-center justify-center my-4">
      {fil.map((item) => {
        return (
          <div key={item.appointment_id} className="flex flex-col items-center">
            <h1 className="text-3xl text-center my-6">
              {`Thank you for booking ${item.client_name}!`}
            </h1>
            <img
              className="w-12 border-2 border-green-500 rounded-full"
              src={check}
              alt=""
            />
            <p className="font-semibold">Your appointment is confirmed:</p>
            <p className="font-bold underline">{`For ${item.appointment_month} ${item.appointment_day}, ${item.appointment_year} at ${item.appointment_time}`}</p>
            <div className="w-[88%] h-60 my-6 border-2 border-gray-200">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.REACT_APP_GOOGLE,
                }}
                defaultCenter={map.center}
                defaultZoom={map.zoom}
                yesIWantToUseGoogleMapApiInternals
              ></GoogleMapReact>
              <div className="my-4">
                <p className="font-semibold pb-32">
                  {`Hey Love, the address will be sent via text 24 hrs before the
                  appointment. If you need to reschedule please contact me before
                   ${item.appointment_date}, either through the contact form or my instagram @Lovebylaysha, Thank you ♡.`}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchAppointments: state.appointments.fetchAppointments,
  };
};

export default connect(mapStateToProps)(Confirm);
