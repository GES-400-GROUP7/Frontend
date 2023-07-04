// import Header from "./components/header";
// import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";
import Team from "./components/Team/Team"
import Map from "./components/Map/Map";
import {FaGreaterThan} from "react-icons/fa"
import data from "./data";
import "./App.scss"
console.log(data)

function App() {
  const cards = data.map(item => {
      return (
        <Blog 
          key={item.id}
          item={item}
        />
      )
  })

  return (
      <div className="App">
        <Navbar/>
        <Team/>
        <Map/>
        <div className="card-box">
          <div>
            <div className="card-head">
            <div><b>Blog</b></div>
            <div className="more"><p>See All Articles </p><span><FaGreaterThan/></span></div>
          </div>
          <div className="card-section">
              {cards} 
          </div>
          </div>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
