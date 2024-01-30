// import React from 'react'
// import emailjs from 'emailjs-com';
// export default function Feedback() {
//   const message = {
//     name:"",
//     email:"",
//     subject:"",
//     message:""
//   }
//   function handleSubmit(event)
//   {
//     event.preventDefault(); 
//     // console.log(event.target["name"].value)
//     // console.log(event.target["email"].value)
//     // console.log(event.target["subject"].value)
//     // console.log(event.target["message"].value)
//     const data = new FormData(event.currentTarget); 
//     message.name=event.target["name"].value;
//     message.email=event.target["email"].value;
//     message.subject=event.target["subject"].value
//     message.message=event.target["message"].value
//     console.log(message);
//     emailjs.sendForm('service_ob50662', 'template_ixr9tsq', event.target, 'LHLU6HhX2p8aA2Hr1')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
//   }
//   return (
//     <div className="container">
//       <div className="form-wrapper">
//         <h2 className="form-heading">Let's Talk</h2>
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             autocomplete="off"
//             placeholder="Name"
//             className="contact-form-input"
//             name='name'
//           />
//           <input
//             type="email"
//             autocomplete="off"
//             placeholder="Email"
//             className="contact-form-input"
//             name="email"
//           />
//           <input
//             type="text"
//             autocomplete="off"
//             placeholder="Subject"
//             className="contact-form-input"
//             name='subject'
//           />
//           <textarea
//             className="contact-form-input contact-form-textarea"
//             placeholder="Message"
//             name='message'
//           ></textarea>
//           <input type="submit" className="form-submit-btn" value="Send Request" 
//           />
//         </form>
//       </div>
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react';

function PortfolioData() {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=TOURNAMENT_PORTFOLIO&season=2021-09&apikey=PSNO12Q0C3I6ZYR7`)
      .then(response => response.json())
      .then(data => setPortfolioData(data));
  }, []);

  if (!portfolioData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Tournament Portfolio Data</h1>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Shares</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {portfolioData.map(item => (
            <tr key={item.symbol}>
              <td>{item.symbol}</td>
              <td>{item.shares}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PortfolioData;
