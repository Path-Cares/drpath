// import React, { useRef, useEffect } from 'react';

// const TestingObserver = () => {
//   const redBoxRef = useRef(null);
//   const blueBoxRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('animated');
//       } else {
//         entry.target.classList.remove('animated');
//       }
//     }, { threshold: 0.5 }); // Observe 50% visibility

//     observer.observe(redBoxRef.current);
//     observer.observe(blueBoxRef.current);

//     return () => {
//       observer.unobserve(redBoxRef.current);
//       observer.unobserve(blueBoxRef.current);
//     };
//   }, []);

//   return (
//     <section className="py-16">
//       <div ref={redBoxRef} className="h-56 w-72 bg-red-600" id="redBox"></div>
//       <div ref={blueBoxRef} className="h-56 w-72 bg-blue-600" id="blueBox"></div>
//     </section>
//   );
// };

// export default TestingObserver;