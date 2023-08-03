import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRockets,
  reserveRocket,
  cancelReserve,
} from "../redux/rocket/rocketSlice";
import "./styles/Rocket.css";

const Rockets = () => {
  const rocket = useSelector((state) => state.rocket.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const reserveRocketHandler = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  const cancelRocketHandler = (rocketId) => {
    dispatch(cancelReserve(rocketId));
  };

  return (
    <div className="rockets-box">
      {rocket.map((rocket) => (
        <div className="rocket" key={rocket.id}>
          <img
            src={rocket.flickr_images[0]}
            alt={rocket.name}
            className="rocket-img"
          />
          <div className="rocket-info">
            <h2 className="rocket-name">{rocket.rocket_name}</h2>
            <p className="rocket-note">
              {rocket.reserved && (
                <span className="px-3 text-[18px] rounded-md mr-2 bg-blue-400 text-white">
                  Reserved
                </span>
              )}
              {rocket.description}
            </p>
            {rocket.reserved ? (
              <button
                className="rocket-btn text-gray-500 py-[5px] border-2 border-gray-500"
                type="button"
                onClick={() => cancelRocketHandler(rocket.id)}
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                className="rocket-btn bg-blue-500 text-white py-[5px]"
                type="button"
                onClick={() => reserveRocketHandler(rocket.id)}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Rockets;
