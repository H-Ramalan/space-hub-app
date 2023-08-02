const transformMissionData = (data) => {
  const joinedMissions = JSON.parse(localStorage.getItem('joined_missions')) || [];

  const transformedData = data.map((i) => {
    const joinedMission = joinedMissions.includes(i.mission_id);
    return {
      mission_id: i.mission_id,
      mission_name: i.mission_name,
      description: i.description,
      joined_mission: joinedMission,
    };
  });

  return transformedData;
};

export default transformMissionData;
