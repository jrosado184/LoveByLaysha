import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import { disabledDays } from "./data/Disabled";

const Book = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [info, setInfo] = useState({
    date: null,
    time: "",
    name: "",
    phone: "",
    set: "none",
    refill: false,
    refillSet: "none",
    soak: false,
    details: "",
    image: null,
  });

  const handleChange = (e) => {
    setInfo({
      ...info,
      date: selectedDate,
      image: e.target.files,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col ml-10 bg-pink my-6"
      >
        <Calendar
          onChange={setSelectedDate}
          calendarClassName="border-2 border-pink-200"
          colorPrimary="#f8a4d1"
          value={selectedDate}
          minimumDate={utils().getToday()}
          disabledDays={disabledDays}
        />
        <select
          name="time"
          value={info.time}
          onChange={handleChange}
          className="w-[88%] h-10 my-4 border-2 border-pink-300 pl-2 rounded-full shadow-md"
        >
          <option value="">select a time</option>
          <option data-testid="time" value="10:00">
            10:00 AM
          </option>
          <option data-testid="time" value="10:30">
            10:30 AM
          </option>
          <option data-testid="time" value="11:00">
            11:00 AM
          </option>
          <option value="11:30">11:30 AM</option>
          <option value="12:00">12:00 PM</option>
          <option value="12:30">12:30 PM</option>
          <option value="1:00">1:00 PM</option>
          <option value="1:30">1:30 PM</option>
          <option value="2:00">2:00 PM</option>
          <option value="2:30">2:30 PM</option>
          <option value="3:00">3:00 PM</option>
          <option value="3:30">3:30 PM</option>
          <option value="4:00">4:00 PM</option>
          <option value="4:30">4:30 PM</option>
          <option value="5:30">5:00 PM</option>
          <option value="5:30">5:30 PM</option>
          <option value="6:00">6:00 PM</option>
        </select>
        <input
          data-testid="name"
          className="pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md"
          type="text"
          placeholder="Name"
          name="name"
          value={info.name}
          onChange={handleChange}
        />
        <input
          data-testid="phone"
          name="phone"
          value={info.phone}
          onChange={handleChange}
          className="pl-3 my-6 w-[88%] h-10 rounded-full border-2 border-pink-300 shadow-md"
          type="tel"
          placeholder="Phone number"
        />
        <select
          name="set"
          value={info.set}
          onChange={handleChange}
          disabled={info.refill}
          className={
            !info.refill
              ? "w-[88%] h-10 my-4 border-2 border-pink-300 pl-2 rounded-full shadow-md"
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
        <label>
          <input
            data-testid="rinput"
            name="refill"
            className="mr-2 my-4"
            type="radio"
            onChange={() => setInfo({ ...info, refill: true })}
            value={info.refill}
          />
          Refill
        </label>
        <select
          data-testid="refill"
          name="refillSet"
          value={info.refillSet}
          onChange={handleChange}
          className={
            info.refill
              ? "w-[88%] h-10 mb-1 border-2 border-pink-300 pl-2 rounded-full"
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
        <label className="flex my-4">
          <input
            value={info.soak}
            onChange={() => setInfo({ ...info, soak: true })}
            className="mr-2 my-[1.5%]"
            type="radio"
          />
          <p>Soak Off</p>
          <p className="ml-52 text-pink-300">$10</p>
        </label>
        <label className=" my-2">
          Additional Details:
          <input
            data-testid="details"
            name="details"
            value={info.details}
            onChange={handleChange}
            className="w-80 h-20 border-2 border-gray-400"
          />
        </label>
        <label className=" my-4">
          Have a specific set in mind?
          <input
            name="image"
            onChange={handleChange}
            className="w-100 my-2 file:rounded-full file:border-0 file:bg-pink-100 file:font-semibold
             file:text-pink-300 file:pl-[3%] file:pr-[3%] file:py-[1%] file:pb-[1%]"
            type="file"
          />
        </label>
        <input
          data-testid="bookbtn"
          className="w-20 h-8 my-3 ml-28 border-2 border-pink-300 bg-pink-100 text-pink-300 rounded-full"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Book;
