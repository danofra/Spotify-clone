const fetchMusic = async (query) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
    );
    if (response.ok) {
      let { data } = await response.json();
      return data;
    }
  } catch (err) {
    console.log("qualcosa è andato storto", err);
  }
};
export default fetchMusic;
