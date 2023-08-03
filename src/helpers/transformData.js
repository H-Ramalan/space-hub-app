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

export const transformRocketData = (data) => {
  const reservedRockets = JSON.parse(localStorage.getItem('reserved_rockets')) || [];

  const transformedData = data.map((i) => {
    const reservedRocket = reservedRockets.includes(i.rocket_id);
    return {
      id: i.id,
      rocket_name: i.rocket_name,
      image_url: i.flickr_images[0],
      description: i.description,
      reserved: reservedRocket,
    };
  });

  return transformedData;
};

export default transformMissionData;
