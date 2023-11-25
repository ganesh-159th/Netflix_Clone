
import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './Request';






function App() {
  return (
    <div className="app">
      

         
      <Banner/>
     <h1>netflix clone</h1>
 



     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow />

      <Row title="Trending now" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />






     
    </div>
  );
}

export default App;