import { useState } from "react";
import "./header.css";
// Date range
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
// Material Icons
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <HotelIcon />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <AirplanemodeActiveIcon />
            <span>Flights</span>
          </div>
          <div className="headerListItem ">
            <DirectionsCarIcon />
            <span>Car Rental</span>
          </div>
          <div className="headerListItem">
            <HotelIcon />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <LocalTaxiIcon />
            <span>Aiport Taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
        <p className="headerDesc">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free Tripsy acoount
        </p>
        <button className="headerBtn">Sign in / Register</button>
        {/* Search bar 👇🏻 */}
        <div className="headerSearch">
          <div className="headerSearchItem">
            <HotelIcon className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <CalendarMonthIcon className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "dd/mm/yyy")} to ${format(
              date[0].endDate,
              "dd/mm/yyy"
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
          <div className="headerSearchItem">
            <PersonIcon className="headerIcon" />
            <span className="headerSearchText">{`${options.adult} Adult - ${options.children} Children - ${options.room} Room`}</span>
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCointer">
                  <button className="optionCounterBtn">-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterBtn">+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCointer">
                  <button className="optionCounterBtn">-</button>
                  <span className="optionCounterNumber">0</span>
                  <button className="optionCounterBtn">+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCointer">
                  <button className="optionCounterBtn">-</button>
                  <span className="optionCounterNumber">1</span>
                  <button className="optionCounterBtn">+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
