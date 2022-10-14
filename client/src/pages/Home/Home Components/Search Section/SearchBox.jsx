import React, { useState } from "react";
import {
  faCalendarDays,
  faLocationCrosshairs,
  faLocationDot,
  faMinus,
  faPerson,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "./SearchBox.css";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [destination, setDestination] = useState("");
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
    childrens: 0,
    rooms: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  
  return (
    <>
      <div className="headerSearch flex items-center justify-around flex-wrap">
        <div className="headerSearchItem flex xl:gap-9 sm:gap-5 gap-2 items-center lg:my-0 my-2">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-white headerSearchIcon"
          />
          <input
            type="text"
            placeholder='Search"Thailand,Asia"'
            className="headerSearchInput"
            onChange={(e) => setDestination(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faLocationCrosshairs}
            className="text-white headerSearchIcon"
          />
        </div>
        <div className="headerSearchItem flex xl:gap-9 gap-5 items-center lg:my-0 my-2">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="text-white headerSearchIcon"
          />
          <span
            onClick={() => setOpenDate(!openDate)}
            className="text-white headerSearchText"
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
        </div>
        <div className="headerSearchItem flex xl:gap-9 gap-5 items-center lg:my-0 my-2">
          <FontAwesomeIcon
            icon={faPerson}
            className="text-white headerSearchIcon"
          />
          <span
            onClick={() => setOpenOption(!openOption)}
            className="text-white headerSearchText"
          >
            {`${options.adults} adult . ${options.childrens} children . ${options.rooms} rooms`}
          </span>
          {openOption && (
            <div className="options">
              <div className="optionItem flex justify-between items-center">
                <span className="optionText">Adult's</span>
                <div className="optionCounter flex items-center">
                  <button
                    disabled={options.adults <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("adults", "d")}
                  >
                    <FontAwesomeIcon icon={faMinus}/>
                  </button>
                  <span className="optionCounterNumber">{options.adults}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adults", "i")}
                  >
                    <FontAwesomeIcon icon={faPlus}/>
                  </button>
                </div>
              </div>
              <div className="optionItem flex justify-between items-center">
                <span className="optionText">Childern's</span>
                <div className="optionCounter flex items-center">
                  <button
                    disabled={options.childrens <= 0}
                    className="optionCounterButton"
                    onClick={() => handleOption("childrens", "d")}
                  >
                    <FontAwesomeIcon icon={faMinus}/>
                  </button>
                  <span className="optionCounterNumber">{options.childrens}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("childrens", "i")}
                  >
                    <FontAwesomeIcon icon={faPlus}/>
                  </button>
                </div>
              </div>
              <div className="optionItem flex justify-between items-center">
                <span className="optionText">Rooms</span>
                <div className="optionCounter flex items-center">
                  <button
                    disabled={options.rooms <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("rooms", "d")}
                  >
                    <FontAwesomeIcon icon={faMinus}/>
                  </button>
                  <span className="optionCounterNumber">{options.rooms}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("rooms", "i")}
                  >
                    <FontAwesomeIcon icon={faPlus}/>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="headerSearchItem flex lg:my-0 my-2">
          <button className="text-white"  onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} className="text-white mr-1"/>
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
