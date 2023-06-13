import { useContext, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import "./reservation.css";
import { SearchContext } from "../../Context/SearchContext";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";

const Reservation = ({ setOpen, hotelId }) => {
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    const dates = [];
    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleSelectRoom = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleReserve = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            date: allDates,
          });
          return res.data;
        })
      );
    } catch (err) {}
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <CancelIcon
          className="rClose"
          sx={{ fontSize: "30px" }}
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms</span>
        {data?.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item?.roomNumbers?.map((roomNumber) => (
                <div className="room" key={roomNumber.id}>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber.id}
                    onChange={handleSelectRoom}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleReserve} className="rButton">
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default Reservation;
