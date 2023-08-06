export const extractVideoIds = (videos) => {
  const videoIds = videos.map((video) => video.id);
  return videoIds;
};
