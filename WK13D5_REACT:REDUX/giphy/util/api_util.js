export const fetchSearchGiphys = (fetched) => {
  $.ajax({
    method: "GET",
    url: `http://api.giphy.com/v1/gifs/search?q=${fetched}&api_key=dc6zaTOxFJmzC&limit=2 where the ${fetched}`
  });
};

