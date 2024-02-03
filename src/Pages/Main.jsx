/*eslint-disable*/

// import React from 'react';
// import Header from '../Components/Header';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import  '../reset.css';
// import Footer from '../Components/Footer';
// import TypeIt from "typeit-react";

// const Maincontainer = styled.div`
//   text-align: center;
//   line-height: 1.2;
//   background-size: cover; 
//   background-position: center; 
//   background-repeat: no-repeat; 
//   justify-content: center;

  // h1 {
  //   color: #ccc;
  //   font-size: 2.5rem;
  //   letter-spacing: 2px;
  //   margin-bottom:10vh;

  //   @media (max-width: 768px) {
  //     padding-right: 0;
  //     justify-content: center;
  //     font-size: 1.8rem;
  //   }
  // }

//   span {
//     color: #FB7B6A;
//     font-weight: 700;
//   }

//   .mainBox {
//     li {
//       padding-bottom: 10vh;
//     }
//   }
// `;

// const MainImageContainer = styled.div`
//   position: relative;

//   &:hover {
//     filter: brightness(70%); 
//   }
// `;

// const MainImage = styled.img`
//   width: auto;
//   height: auto;
//   max-width: 100%;
//   max-height: 100%;
//   box-shadow:rgba(0, 0, 0, 0.9);

// `;

// export default function Main() {
//   return (
//     <Maincontainer>
//       <Header />
      // <div>
      //   <h1>
      //     하고 싶던 모든 것, <br />
      //     <TypeIt
      //     options={{
      //     strings: ["Creative Connect"],
      //     speed: 200,
      //     waitUntilVisible: true,
      //     loop: true,
      //   }}
      // />  와 함께!<br />
      //   </h1>

      // </div>

//       <div className='mainBox'>
//         <ul>
//           <li>
//             <Link to='/community'>
//               <MainImageContainer>
//                 <MainImage src={process.env.PUBLIC_URL + '/images/main1.png'} alt="메인이미지1" />
//               </MainImageContainer>
//             </Link>
//           </li>
//           <li>
//             <Link to='/pr'>
//             <MainImageContainer>
//               <MainImage src={process.env.PUBLIC_URL + '/images/main2.png'} alt="메인이미지2" />
//               </MainImageContainer>
//             </Link>
//           </li>
//           <li>
//             <Link to='/promentoring'>
//             <MainImageContainer>
//               <MainImage src={process.env.PUBLIC_URL + '/images/main3.png'} alt="메인이미지3" />
//               </MainImageContainer>
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <Footer />
//     </Maincontainer>
//   );
// }



import { useEffect, useState } from "react";
import '../main.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TypeIt from "typeit-react";
// import item1 from "../images/item1.webp";
// import item2 from "../images/item2.png";


export default function Main() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div>
        <h1>
          하고 싶던 모든 것, <br />
          <TypeIt
          style={{color:"#fff"}}
          options={{
          strings: ["Creative Connect"],
          speed: 200,
          waitUntilVisible: true,
          loop: true,
        }}
      />  와 함께!<br />
        </h1>
      </div>

      <div
        className="bg bg1"
        style={{
          backgroundPositionY: position / 2,
        }}
      >
        <div>Crteator PR</div>
      </div>
      <div
        className="bg bg2"
        style={{
          backgroundPositionY: position / -3,
        }}
      >
      
        <div>Community</div>
      </div>
      <div
        className="bg bg3"
        style={{
          backgroundPositionY: position / -3,
        }}
      >
      
        <div>Promentoring</div>
      </div>
      <p
        className="desc"
        style={{
          transform: `translateX(${-position}px)`,
        }}
      >
      One-person creator, fostering unrestricted communication—united under a single community.
      </p>
      <p
        className="desc2"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        Unlock the power of creativity with me a dynamic and passionate creator. Whether you're a fellow artist or an advertiser seeking a fresh perspective, I bring innovation and authenticity to every project. Let's craft something extraordinary together!
      </p>
      <p
        className={`desc3 ${position > 700 ? 'active' : ''}`}
        style={{
          opacity: (position - 700) / 50,
        }}
      >
        Experience the opportunity to learn
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 830) / 50,
        }}
      >
        from renowned creators firsthand!
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 1060) / 50,
        }}
      >
        Dive into enlightening workshops
      </p>
      <p
        className="desc3"
        style={{
          opacity: (position - 1260) / 10,
          marginBottom:"30vh"
        }}
      >
        gain insights from industry experts.
      </p>
      <img
        src={process.env.PUBLIC_URL + '/images/item.jpg'} alt="메인이미지1" 
        className="item"
        style={{
          transform: `translateY(${position / 2}px)`,
        }}
      />
      <img
        src={process.env.PUBLIC_URL + '/images/item2.jpg'} alt="메인이미지2" 
        className="item item_2"
        style={{
          transform: `translateY(${position / 4}px)`,
        }}
      />
      <Footer style={{marginTop:"auto"}}/>
    </div>
  );
}




