import { Fragment } from "react";
// import '../styles/calendar.scss';

const Home = () => {
  return <Fragment></Fragment>;
};

export default Home;

// // import node module libraries
// import { Fragment, useEffect } from 'react';
// import { useRouter } from 'next/router';

// const Home = () => {
//   const router = useRouter();

//   useEffect(() => {
//     // Apply the class name to the body
//     document.body.className = 'bg-light';

//     // Check if user is authenticated
//     const isAuthenticated = () => {

//       // checking if a token exists in local storage
//       return !!localStorage.getItem('authToken');
//     };

//     if (!isAuthenticated()) {
//       // Redirect to /authentication/sign-in if not authenticated
//       router.push('/authentication/sign-in');
//     } else {
//       // Redirect to /dashboard/overview if authenticated
//       router.push('/dashboard/overview');
//     }
//   }, [router]);

//   return <Fragment></Fragment>;
// };

// export default Home;

// // import node module libraries
// import { Fragment, useEffect } from 'react';
// import { useRouter } from 'next/router';

// const Home = () => {
//   const router = useRouter();

//   useEffect(() => {
//     // Apply the class name to the body
//     document.body.className = 'bg-light';

//     // Redirect to /sign-in

//     // router.push('/authentication/sign-in');
// 	router.push('/dashboard/overview');
//   }, [router]);

//   return <Fragment></Fragment>;
// };

// export default Home;
