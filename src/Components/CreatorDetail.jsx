// import React from 'react'
// import styled from 'styled-components';
// import Card from "react-bootstrap/Card";
// import { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';


// const StyledCard = styled.div`
//   display: flex;
//   border-radius: 25px;
//   width: 60vw;
//   height: 30rem;
//   justify-content:space-around;
//   background-color: rgba(0, 0, 0, 0.2);
//   margin: 0 auto;
//   margin-top: 10vh;
//   transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
//   box-shadow: 10px 10px 10px 10px rgba(20, 40, 80, 100);

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   }
// `;

// const CardImage = styled(Card.Img)`
//   width: 27.5rem;
//   height: 30rem;
//   border-top-left-radius: 25px;
//   border-bottom-left-radius: 25px;
// `;

// const CardBody = styled(Card.Body)`
//   text-align: left;
//   background-color: #86909b;
//   border-top-right-radius: 25px;
//   border-bottom-right-radius: 25px;
//   padding: 20px;
//   justify-content:space-between;
//   font-weight:800px;

//   h4 {
//     font-size:1.5rem;
//     font-weight: 700;
//     color: #fff;
//     margin-bottom: 10px;
//   }

//   p {
//     color: #fff;
//     font-size: 1.3rem;
//     margin-bottom: 20px;
//   }
// `;

// const CategoryButton = styled.div`
//   background-color: #fb7b6a;
//   color: #fff;
//   border-radius: 5px;
//   padding: 8px 12px;
//   display: inline-block;
//   margin-right: 10px;
//   margin-bottom: 10px;
//   font-size: 16px;
//   cursor: pointer;
// `;

// const Sns = styled.div`
//   margin-top: 10px;
//   display: flex;

//   li {
//     margin-right: 20px;
//   }

//   img {
//     width: 40px;
//     height: 35px;
//     margin-right: 5px;
//   }

//   span {
//     font-weight: 600;
//     color: #fff;
//   }
// `;

// export default function CreatorDetail() {
//     const [state, setState] = useState({}); 
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get('http://13.125.179.40:8080/api/creator-pr/1');
//           setState(response.data); // 가져온 데이터를 상태 변수에 저장
//         } catch (error) {
//           console.error('데이터 가져오기 실패:', error);
//         }
//       };
  
//       fetchData();
//     }, []);
  
//   return (
//     <div>
//       <StyledCard>
//         <CardImage variant="top" src={state.photo} alt="프로필사진" />
//         <CardBody>
//           <Card.Title style={{ fontSize: "2rem",fontWeight:"700" ,color: "#fff" }}>
//             {state.name}
//           </Card.Title>
//           <Card.Text style={{ color: "#fff" }}>{state.title}</Card.Text>
//           <h4>Category</h4>
//           <CategoryButton style={{fontWeight:"700"}}>#{state.category}</CategoryButton>
//           <h4>Contact</h4>
//           <p>{state.email}</p>

//           <h4>SNS</h4>
//           <Sns>
//             <li>
//               <img
//                 src={process.env.PUBLIC_URL + "/images/youtube.png"}
//                 alt="유튜브"
//               />
//               <span>{state.youtube}</span>
//             </li>
//             <li>
//               <img
//                 src={process.env.PUBLIC_URL + "/images/tictok.png"}
//                 alt="틱톡"
//               />
//               <span>{state.tictok}</span>
//             </li>
//             <li>
//               <img
//                 src={process.env.PUBLIC_URL + "/images/insta.png"}
//                 alt="인스타"
//               />
//               <span>{state.insta}</span>
//             </li>
//           </Sns>
//         </CardBody>
//       </StyledCard>

      
//     </div>
//   )
// }



import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';

export default function CreatorDetail() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method:'GET',
      url:'http://13.125.179.40:8080/creator-pr/1'
    }).then(response => setPosts(response.data))
  })
  console.log();

  return (
    <ul>
      <li key={posts.id}>{posts.email}</li>
    </ul>
  )
}
