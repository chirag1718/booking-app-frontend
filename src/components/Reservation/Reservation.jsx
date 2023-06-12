import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import "./reservation.css";
import CancelIcon from "@mui/icons-material/Cancel";

const Reservation = ({ setOpen, hotelId }) => {
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const handleSelectRoom = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
  const handleReserve = () => {
    
  }
  return (
    <div className="reserve">
      <div className="reserveContainer">
        <CancelIcon
          className="rClose"
          sx={{ fontSize: "30px" }}
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms</span>
        {data?.map((item) => (
          <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            {item?.roomNumbers?.map((roomNumber) => (
              <div className="room">
                <label>{roomNumber.number}</label>
                <input
                  type="checkbox"
                  value={roomNumber._id}
                  onChange={handleSelectRoom}
                />
              </div>
            ))}
          </div>
        ))}
        <button onClick={handleReserve} className="rButton">Reserve Now</button>
      </div>
    </div>
  );
};

export default Reservation;
