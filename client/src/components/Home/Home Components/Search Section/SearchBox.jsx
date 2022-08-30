import React, { useState } from "react";
import {
  faCalendarDays,
  faLocationCrosshairs,
  faLocationDot,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "./SearchBox.css";
import { parseWithOptions } from "date-fns/fp";

const SearchBox = () => {
  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });
  return (
    <>
      <div className="headerSearch flex items-center justify-around">
        <div className="headerSearchItem flex gap-10 items-center">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-gray-500 headerSearchIcon"
          />
          <input
            type="text"
            placeholder='Search"Thailand,Asia"'
            className="HeaderSearchInput"
          />
          <FontAwesomeIcon
            icon={faLocationCrosshairs}
            className="text-gray-500 headerSearchIcon"
          />
        </div>
        <div className="headerSearchItem flex gap-10 items-center">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="text-gray-500 headerSearchIcon"
          />
          <span
            onClick={() => setOpenDate(!openDate)}
            className="text-gray-500 headerSearchText"
          >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
            date[0].endDate,
            "dd/MM/yyyy"
          )}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />
          )}
          ;
        </div>
        <div className="headerSearchItem flex gap-10 items-center">
          <FontAwesomeIcon
            icon={faPerson}
            className="text-gray-500 headerSearchIcon"
          />
          <span onClick={() => setOpenOption(!openOption)} className="text-gray-500 headerSearchText">
            {`${options.adults} adult . ${options.children} children . ${options.rooms} rooms`}
          </span>
          {openOption && (
            <div className="options">
              <div className="optionItem flex justify-between items-center">
                <span className="optionText">Adult's</span>
                <div className="optionCounter flex items-center gap-9">
                  <button className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterButton">+</button>
                </div>
              </div>
              <div className="optionItem flex justify-between items-center">
                <span className="optionText">Childern's</span>
                <div className="optionCounter flex items-center gap-9">
                  <button className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterButton">+</button>
                </div>
              </div>
              <div className="optionItem flex justify-between items-center">
                <span className="optionText">Rooms</span>
                <div className="optionCounter flex items-center gap-9">
                  <button className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterButton">+</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="headerSearchItem">
          <button className="p-3 text-white text-xl font-bold rounded bg-slate-500">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
