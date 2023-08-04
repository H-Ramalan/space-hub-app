import { useSelector, useDispatch } from 'react-redux';
import { joinAMission, leaveMission } from '../redux/mission/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const {
    missions, isLoading, isError, error,
  } = useSelector(
    (state) => state.mission,
  );

  if (isLoading) {
    return (
      <>
        <h1>LOADING...</h1>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <h1>
          Opps! Error occured: {error}
        </h1>
      </>
    );
  }

  const handleJoinMission = (index, id) => {
    dispatch(joinAMission(index, id));
  };

  const handleLeaveMission = (index, id) => {
    dispatch(leaveMission(index, id));
  };

  return (
    <div className="w-full overflow-auto mt-10 px-2 lg:px-10">
      <table className="table-auto overflow-auto">
        <thead>
          <tr className="">
            <th className="border-2 text-left py-2 px-2">Mission</th>
            <th className="border-2 text-left py-2 px-2">Description</th>
            <th className="border-2 text-left py-2 px-2">Status</th>
            <th className="border-2 text-left py-2 px-2 text-transparent">Action</th>
          </tr>
        </thead>
        <tbody className="mission-table-body">
          {missions
            && missions.map((i, index) => (
              <tr key={i.mission_id}>
                <td className="border-2 px-2">{i.mission_name}</td>
                <td className="border-2 py-2 px-2">{i.description}</td>
                <td className="border-2 px-2">
                  <div
                    className={`${
                      i.joined_mission
                        ? 'bg-blue-500 capitalize'
                        : 'bg-slate-500 uppercase'
                    } px-2 py-1 text-white whitespace-nowrap rounded-md font-semibold`}
                  >
                    {i.joined_mission ? 'active member' : 'not a member'}
                  </div>
                </td>
                <td className="border-2 px-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (i.joined_mission) {
                        handleLeaveMission(index, i.mission_id)
                      } else {
                        handleJoinMission(index, i.mission_id);
                      }
                    }}
                    className={`${
                      i.joined_mission
                        ? 'border-red-500 text-red-500'
                        : 'border-slate-500 text-slate-500'
                    } px-2 py-1 capitalize whitespace-nowrap rounded-md font-semibold border-2`}
                  >
                    {i.joined_mission ? 'leave mission' : 'join mission'}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
