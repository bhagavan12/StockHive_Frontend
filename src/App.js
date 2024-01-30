// import React, { useState } from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Aboutus from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Stock from './components/Stock';
import News from './components/News';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
// import App1 from './App1'; 
import Navbar1 from './components/Navbar/Navbar1';
import Feedback from './components/Feedback';
import Protifolio from './components/Protifolio';
import Sma from './components/Sma';
import Ema from './components/Ema';
import Wma from './components/Wma';
import  Heat_map from './components/Heart_map';
import Mover from './components/Mover';
import Newsform from './components/form';
import TradingVew from './components/Stockss';
// function App() {
//   const [logged ,setLogged] = useState(false);
//   function handleLogin()
//   {
//     setLogged(!logged);
//   }
//   return (
    
//     <Router>
      
//       <GlobalStyle />
//       <ScrollToTop />
      // {
      //   logged ? <Navbar1   handleLogin={handleLogin} />:<Navbar handleLogin={handleLogin}/>
      // }
//       {/* <iframe src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22Nasdaq%20100%22%7D%2C%7B%22description%22%3A%22Gold%22%2C%22proName%22%3A%22AMEX%3ALD%22%7D%2C%7B%22description%22%3A%22Treasury%22%2C%22proName%22%3A%22NASDAQ%3ATLT%22%7D%2C%7B%22description%22%3A%22Tesla%22%2C%22proName%22%3A%22NASDAQ%3ATSLA%22%7D%2C%7B%22description%22%3A%22Apple%22%2C%22proName%22%3A%22NASDAQ%3AAAPL%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A76%2C%22utm_source%22%3A%22localhost%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22localhost%3A3001%2F%22%7D"  style={{width : "230vh", marginBottom : "-7%"}}> */}
// {/* </iframe> */}
// <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%2C%7B%22description%22%3A%22TATA%20STEEL%22%2C%22proName%22%3A%22BSE%3ATATASTEEL%22%7D%2C%7B%22description%22%3A%22puma%22%2C%22proName%22%3A%22FWB%3APUMA%22%7D%2C%7B%22description%22%3A%22META%22%2C%22proName%22%3A%22NASDAQ%3AMETA%22%7D%2C%7B%22description%22%3A%22GOOGLE%22%2C%22proName%22%3A%22NASDAQ%3AGOOGL%22%7D%2C%7B%22description%22%3A%22JP%22%2C%22proName%22%3A%22NYSE%3AJPM%22%7D%2C%7B%22description%22%3A%22TOYOTA%22%2C%22proName%22%3A%22NYSE%3ATM%22%7D%2C%7B%22description%22%3A%22FERRARI%22%2C%22proName%22%3A%22NYSE%3ARACE%22%7D%2C%7B%22description%22%3A%22APPLE%22%2C%22proName%22%3A%22NASDAQ%3AAAPL%22%7D%2C%7B%22description%22%3A%22BMW%22%2C%22proName%22%3A%22BSE%3ABMW%22%7D%2C%7B%22description%22%3A%22msft%22%2C%22proName%22%3A%22NASDAQ%3AMSFT%22%7D%2C%7B%22description%22%3A%22AD%22%2C%22proName%22%3A%22BCBA%3AADS%22%7D%2C%7B%22description%22%3A%22nike%22%2C%22proName%22%3A%22NYSE%3ANKE%22%7D%2C%7B%22description%22%3A%22Netflix%20%22%2C%22proName%22%3A%22NASDAQ%3ANFLX%22%7D%2C%7B%22description%22%3A%22ALIBABA%22%2C%22proName%22%3A%22NYSE%3ABABA%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22largeChartUrl%22%3A%22https%3A%2F%2Fwww.tradingview.com%2Fchart%2F%22%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A78%2C%22utm_source%22%3A%22localhost%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22localhost%3A3001%2F%22%7D" style={{boxSizing: "border-box" ,display: "block" ,height: "46px", width: "100%" , backgroundColor : "red"}}></iframe>
//       <Switch>
//         <Route path='/' exact component={Home} />
//         <Route path='/services' component={Services} />
//         <Route path='/aboutus' component={Aboutus} />
//         <Route path='/sign-up' component={SignUp} />
//         <Route path='/login' component={Login}/>
//         <Route path='/stock' component={Stock} />
//         {/* <Route path='/fed' component={Feedback} /> */}
//         <Route path='/protifolio' component={Protifolio} />
//         {/* <Route path='/news' component={App1} /> */}
//         <Route path='/news' component={News} />
//         <Route path='/sma' component={Sma} />
//         <Route path='/ema' component={Ema} />
//         <Route path='/wma' component={Wma} />
//         <Route path='/newsform' component={Newsform} />
//         <Route path='/heatmap' component={Heat_map} />
//         <Route path='/mover' component={Mover} />
//         <Route path='/stockss' component={TradingVew} />
//       </Switch>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import React, { useContext,useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from './AuthContext';
// import GlobalStyle from './globalStyles';
// import Home from './pages/HomePage/Home';
// import Services from './pages/Services/Services';
// import Aboutus from './pages/Products/Products';
// import SignUp from './pages/SignUp/SignUp';
// import Login from './pages/Login/Login';
// import ScrollToTop from './components/ScrollToTop';
// import { Navbar, Footer } from './components';

function App() {
  const { logged, login, logout } = useContext(AuthContext);
  const [logged1 ,setLogged] = useState(false);
    function handleLogin()
    {
      setLogged(!logged1);
    }
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%2C%7B%22description%22%3A%22TATA%20STEEL%22%2C%22proName%22%3A%22BSE%3ATATASTEEL%22%7D%2C%7B%22description%22%3A%22puma%22%2C%22proName%22%3A%22FWB%3APUMA%22%7D%2C%7B%22description%22%3A%22META%22%2C%22proName%22%3A%22NASDAQ%3AMETA%22%7D%2C%7B%22description%22%3A%22GOOGLE%22%2C%22proName%22%3A%22NASDAQ%3AGOOGL%22%7D%2C%7B%22description%22%3A%22JP%22%2C%22proName%22%3A%22NYSE%3AJPM%22%7D%2C%7B%22description%22%3A%22TOYOTA%22%2C%22proName%22%3A%22NYSE%3ATM%22%7D%2C%7B%22description%22%3A%22FERRARI%22%2C%22proName%22%3A%22NYSE%3ARACE%22%7D%2C%7B%22description%22%3A%22APPLE%22%2C%22proName%22%3A%22NASDAQ%3AAAPL%22%7D%2C%7B%22description%22%3A%22BMW%22%2C%22proName%22%3A%22BSE%3ABMW%22%7D%2C%7B%22description%22%3A%22msft%22%2C%22proName%22%3A%22NASDAQ%3AMSFT%22%7D%2C%7B%22description%22%3A%22AD%22%2C%22proName%22%3A%22BCBA%3AADS%22%7D%2C%7B%22description%22%3A%22nike%22%2C%22proName%22%3A%22NYSE%3ANKE%22%7D%2C%7B%22description%22%3A%22Netflix%20%22%2C%22proName%22%3A%22NASDAQ%3ANFLX%22%7D%2C%7B%22description%22%3A%22ALIBABA%22%2C%22proName%22%3A%22NYSE%3ABABA%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22largeChartUrl%22%3A%22https%3A%2F%2Fwww.tradingview.com%2Fchart%2F%22%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A78%2C%22utm_source%22%3A%22localhost%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22localhost%3A3001%2F%22%7D" style={{boxSizing: "border-box" ,display: "block" ,height: "46px", width: "100%" , backgroundColor : "red"}}></iframe>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' render={() => <Login login={login} />} />
        <Route path='/stock' component={Stock} />
     {/* <Route path='/fed' component={Feedback} /> */}
         <Route path='/protifolio' component={Protifolio} />
         {/* <Route path='/news' component={App1} /> */}
        <Route path='/news' component={News} />
         <Route path='/sma' component={Sma} />
         <Route path='/ema' component={Ema} />
         <Route path='/wma' component={Wma} />
         <Route path='/newsform' component={Newsform} />
         <Route path='/heatmap' component={Heat_map} />
         <Route path='/mover' component={Mover} />
         <Route path='/stockss' component={TradingVew} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
