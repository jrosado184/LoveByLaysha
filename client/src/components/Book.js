import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import { disabledDays } from "./data/Disabled";
import { connect } from "react-redux";
import {
  postAppointments,
  getAppointments,
} from "../redux/actions/appointment-actions";

const Book = (props) => {
  const { dispatch, fetchAppointments } = props;
  const nav = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [info, setInfo] = useState({
    appointment_date: selectedDate,
    appointment_time: "",
    client_name: "",
    client_phone: "",
    client_set: "none",
    client_refill: false,
    client_refillSet: "none",
    client_Soak: false,
    client_details: "",
  });

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  const handleChange = (e) => {
    setInfo({
      ...info,
      appointment_date: `${selectedDate.month}/${selectedDate.day}/${selectedDate.year}`,
      // image: e.target.files,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postAppointments(info));
    nav(
      `/confirm/${
        fetchAppointments[fetchAppointments.length - 1].appointment_id
      }`
    );
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="sm:pl-10 py-4 desktop:ml-[7%] w-full"
      >
        <div className="sm:  md:flex">
          <Calendar
            onChange={setSelectedDate}
            calendarClassName="border-2 border-pink-200"
            colorPrimary="#f8a4d1"
            value={selectedDate}
            minimumDate={utils().getToday()}
            disabledDays={disabledDays}
          />
          <div className="md:w-[60%]">
            <select
              name="appointment_time"
              value={info.appointment_time}
              onChange={handleChange}
              className="w-[88%] h-10 my-4 border-2 border-pink-300 pl-2 rounded-full shadow-md md:ml-6"
            >
              <option value="">select a time</option>
              <option data-testid="time" value="10:00 AM">
                10:00 AM
              </option>
              <option data-testid="time" value="10:30 AM">
                10:30 AM
              </option>
              <option data-testid="time" value="11:00 AM">
                11:00 AM
              </option>
              <option value="11:30 AM">11:30 AM</option>
              <option value="12:00 AM">12:00 PM</option>
              <option value="12:30 PM">12:30 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="1:30 PM">1:30 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="2:30 PM">2:30 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="3:30 PM">3:30 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="4:30 PM">4:30 PM</option>
              <option value="5:30 PM">5:00 PM</option>
              <option value="5:30 PM">5:30 PM</option>
              <option value="6:00 PM">6:00 PM</option>
            </select>
            <input
              data-testid="name"
              className="pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md md:ml-6"
              type="text"
              placeholder="Name"
              name="client_name"
              value={info.client_name}
              onChange={handleChange}
            />
            <input
              data-testid="phone"
              name="client_phone"
              value={info.client_phone}
              onChange={handleChange}
              className="pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md md:ml-6"
              type="tel"
              placeholder="Phone number"
            />
            <select
              name="client_set"
              value={info.client_set}
              onChange={handleChange}
              disabled={info.client_refill}
              className={
                !info.client_refill
                  ? "w-[88%] h-10 my-4 border-2 border-pink-300 pl-2 rounded-full shadow-md md:ml-6"
                  : "hidden"
              }
            >
              <option value="">select a new set</option>
              <option value="Shorties Full Set">Shorties Full Set $50+</option>
              <option value="Medium Full Set">Medium Full Set $60+</option>
              <option value="Long Full Set">Long Full Set $70+</option>
              <option value="XL Full Set">XL Full Set $85+</option>
              <option value="XXL Full Set">XXL Full Set $100+</option>
              <option value="Extendo Full Set">Extendo Full Set $120+</option>
              <option value="Freestyle">Freestyle $80-$120</option>
            </select>
            <label className="flex items-center">
              <input
                data-testid="rinput"
                name="client_refill"
                className="mr-2 my-4 md:ml-6"
                type="radio"
                onChange={() => setInfo({ ...info, client_refill: true })}
                value={info.client_refill}
              />
              Refill
            </label>
            <select
              data-testid="refill"
              name="client_refillSet"
              value={info.client_refillSet}
              onChange={handleChange}
              className={
                info.client_refill
                  ? "w-[88%] h-10 mb-1 border-2 border-pink-300 pl-2 rounded-full md:ml-6"
                  : "hidden"
              }
            >
              <option value="">select refill</option>
              <option value="Shorties Full Set">Shorties</option>
              <option value="Medium Full Set">Medium</option>
              <option value="Long Full Set">Long</option>
              <option value="XL Full Set">XL</option>
              <option value="XXL Full Set">XXL</option>
              <option value="Extendo Full Set">Extendo </option>
              <option value="Freestyle">Freestyle</option>
            </select>
            <label className="flex items-center my-4 md:ml-6">
              <input
                name="client_Soak"
                value={info.client_Soak}
                onChange={() => setInfo({ ...info, client_Soak: true })}
                className="mr-2 my-1"
                type="radio"
              />
              <p>Soak Off</p>
              <p className="ml-52 text-pink-300">$10</p>
            </label>
            <label className=" my-2 md:ml-6">
              Additional Details:
              <input
                data-testid="details"
                name="client_details"
                value={info.client_details}
                onChange={handleChange}
                className="w-[88%] h-20 border-2 border-gray-400 md:ml-6"
              />
            </label>
            <label className=" my-4 flex flex-col shrink md:ml-6">
              Have a specific set in mind?
              <input
                name="client_image"
                onChange={handleChange}
                className="w-100 my-2 file:rounded-full file:border-0 file:bg-pink-100 file:font-semibold
              file:text-pink-300 file:pl-[3%] file:pr-[3%] file:py-[1%] file:pb-[1%]"
                type="file"
              />
            </label>
            <input
              data-testid="bookbtn"
              className="w-20 h-8 my-3 ml-28 border-2 border-pink-300 bg-pink-100 ml-[30%] text-pink-300 rounded-full sm2:ml-[70%] md:ml-[74%] lg:ml-[80%]"
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    addAppointments: state.appointments.addAppointments,
    fetchAppointments: state.appointments.fetchAppointments,
  };
};
export default connect(mapStateToProps)(Book);
