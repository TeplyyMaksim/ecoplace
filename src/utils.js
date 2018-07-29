const generatePlaceData = (data, lat, lng) => ({
  ...data,
  lat,
  lng,
  airRate: `${data.aqi}/500`,
  totalRate: ((500 - data.aqi) / 5).toFixed(2),
});

export { generatePlaceData };