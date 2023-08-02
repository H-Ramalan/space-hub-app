import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { missions } = useSelector((state) => state.mission);
  const joinedMissions = missions.filter((i) => i.joined_mission === true);
  return (
    <div className="w-full mt-10 px-2 lg:px-10 flex flex-col flex-wrap justify-center gap-2">
      <div className="w-full 400px:w-8/12 md:w-6/12 ">
        <h2 className="font-semibold text-xl">My Missions</h2>
        <div className="mt-2 border-2 border-gray-200 bg-gray-200 grid grid-cols-1 gap-[2px] gap rounded-md ">
          {joinedMissions
            && joinedMissions.map((i) => (
              <div className="bg-white py-3 px-4 col-span-1" key={i.mission_id}>
                {i.mission_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
