const URL = "https://meowfacts.herokuapp.com/";

const getFacts = async () => {
  let response = await fetch(URL);
  console.log(response);
  console.log(response.headers.get("Content-Type"));

  let data = await response.json();
  console.log(data);
};
getFacts();
