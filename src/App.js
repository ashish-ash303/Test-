import './App.css';
import Nav from './Nav';
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <div className="landing__page">
      <Nav/>
       <div className="app__textwrapper">
       <h2 className="app__title">Digital Luex </h2>
       

       </div>
      
      <img  className="app__img"src="https://images.unsplash.com/photo-1532529867795-3c83442c1e5c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"/>
      <Footer/>

      </div>
      
    


    </div>
  );
}

export default App;
