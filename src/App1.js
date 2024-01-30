// import { useEffect, useState } from 'react';
// function App1() {
//   const [search, setSearch] = useState("");
//   //const [data ,setData] = useState(null);
//   function handleSubmit(e) {
//     setSearch(e)
//     console.log(search);
//   }
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch(
//      `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=PSNO12Q0C3I6ZYR7`
//     ).then((response) => response.json()
//     ).then(setData).then(console.log(data))
//   }, [])

//   //console.log(data);
//   return (

//     <div className="App">
//       {console.log("***")}
//       {console.log(data)}
//       {
//         data ?
//           data["feed"].map((dat) => (
//               <div className="card mx-auto" style={{ width: "18rem" }}>
//                 <img src={dat["banner_image"]} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <h5 className="card-title"> {dat["title"]} </h5>
//                   <p className="card-text">  {dat["summary"]} </p>
//                   <a href={dat["url"]} className="btn btn-primary" target='_blank'>Click Here</a>
//                 </div>
//               {/* <div class="card mb-3">
//                 <img src={dat["banner_image"]} class="card-img-top" style={{height:"180px"}} alt="..." />
//                 <div class="card-body">
//                   <h5 class="card-title">{dat["title"]}</h5>
//                   <p class="card-text">{dat["summary"]}</p>
//                   <a href={dat["url"]} className="btn btn-primary" target='_blank'>Click Here</a>
//                 </div>
//               </div> */}
//             </div>
//           ))
//           : <h2>LoadinG ...</h2>
//       }
//     </div>
//   );
// }

// export default App1;
import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Aboutus from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  const { logged, login, logout } = useContext(AuthContext);

  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      {/* Your other components */}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' render={() => <Login login={login} />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
