const transformMissionData = (data) => {
  const transformedData = data.map((i) => {
    return {
      mission_id: i.mission_id,
      mission_name: i.mission_name,
      description: i.description,
      joined_mission: false,
    };
  });

  return transformedData;
};

export const transformRocketData = (data) => {
  const transformedData = data.map((i) => {
    return {
      id: i.id,
      rocket_name: i.rocket_name,
      image_url: i.flickr_images[0],
      description: i.description,
      reserved: false,
    };
  });

  return transformedData;
};

export default transformMissionData;
