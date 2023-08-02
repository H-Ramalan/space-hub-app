import { useSelector, useDispatch } from "react-redux";
const Missions = () => {
  const { missions, isLoading, isError, error } = useSelector(
    (state) => state.mission
  );

  console.log(missions)
  console.log(isLoading)
  return (
    <div>
      <h1>Missions</h1>
    </div>
  );
};
export default Missions;
