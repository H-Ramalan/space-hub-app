import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { missions } = useSelector((state) => state.mission);
  const joinedMissions = missions.filter((i) => i.joined_mission === true);
  const { rocket } = useSelector((state) => state.rocket);
  const reservedRocket = rocket.filter(
    (i) => i.reserved && i.reserved === true,
  );
  return (
    <div className="w-full mt-10 px-2 lg:px-10 flex flex-row flex-wrap justify-center gap-2">
      <div className="w-full md:w-5/12 ">
        <h2 className="font-semibold text-xl">My Missions</h2>
        <div className="mt-2 border-2 border-gray-200 bg-gray-200 grid grid-cols-1 gap-[2px] gap rounded-md ">
          {joinedMissions && joinedMissions.length < 1 ? (
            <>
              <p className="text-center text-xl py-10">
                You have not joined any mission
              </p>
            </>
          ) : (
            joinedMissions.map((i) => (
              <div className="bg-white py-3 px-4 col-span-1" key={i.mission_id}>
                {i.mission_name}
              </div>
            ))
          )}
        </div>
      </div>
      <div className="w-full md:w-5/12 ">
        <h2 className="font-semibold text-xl">My Rockets</h2>
        <div className="mt-2 border-2 border-gray-200 bg-gray-200 grid grid-cols-1 gap-[2px] gap rounded-md ">
          {reservedRocket && reservedRocket.length < 1 ? (
            <>
              <p className="text-center text-xl py-10">No rocket reserved</p>
            </>
          ) : (
            reservedRocket.map((i) => (
              <div className="bg-white py-3 px-4 col-span-1" key={i.id}>
                {i.rocket_name}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
