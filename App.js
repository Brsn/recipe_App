import React, {useState, useEffect} from 'react';

const App = () => {

const APP_ID = 'dd910575';
const APP_KEY = '327562df699aa349327951fad0479d64';

//const exampleReq = "http://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free";

useEffect(() => {
  getRecipes();
}, []);

const getRecipes = async () => {
  const response = await fetch("http://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free");
  const data = await response.json(); 
  console.log(data);
}
return (
  <div className="App">
    <form className="search-form">
      <input className="search-bar" type="text"/>
      <button className="search-button" type="submit">
      Search</button>
    </form>

  </div>
);
};
export default App;
