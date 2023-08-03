import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRockets,
  reserveRocket,
  cancelReserve,
} from '../redux/rocket/rocketSlice';
import './styles/Rocket.css';

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
            <p className="reserved">Reserved</p>
            <p className="rocket-note">{rocket.description}</p>
            {true ? (
              <button
                className="rocket-btn"
                type="button"
                onClick={() => reserveRocketHandler(rocket.id)}
              >
                Reserve Rocket
              </button>
            ) : (
              <button
                className="rocket-btn"
                type="button"
                onClick={() => cancelRocketHandler(rocket.id)}
              >
                Cancel Reservation
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Rockets;
