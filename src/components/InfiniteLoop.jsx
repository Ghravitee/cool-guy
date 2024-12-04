// const InfiniteLoop = () => {
//   return (
//     <>
//       <div className="bg-white flex overflow-hidden space-x-2 border-2 border-t-black border-b-black">
//         <div className="flex space-x-24 animate-loop-scroll p-4 text-[1.3rem] font1 text-black">
//           <p>Join the party</p>
//           <p>Join the party</p>
//           <p>Join the party</p>
//           <p>Join the party</p>
//         </div>
//         <div
//           className="flex space-x-24 animate-loop-scroll p-4 text-[1.3rem] font1 text-black"
//           aria-hidden="true"
//         >
//           <p>Join the party</p>
//           <p>Join the party</p>
//           <p>Join the party</p>
//           <p>Join the party</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default InfiniteLoop;

const InfiniteLoop = () => {
  return (
    <div className="wrapper">
      <div
        className={`hidden lg:block lg:text-[1.8rem] text-black mt-4 font-black item item1
          }`}
      >
        Join the Party
      </div>
      <div
        className={`hidden lg:block lg:text-[1.8rem] text-black mt-4 font-black item item2
          }`}
      >
        Join the Party
      </div>
      <div
        className={`hidden lg:block lg:text-[1.8rem] text-black mt-4 font-black item item3
          }`}
      >
        Join the Party
      </div>
      <div
        className={`hidden lg:block lg:text-[1.8rem] text-black mt-4 font-black item item4
          }`}
      >
        Join the Party
      </div>
      <div
        className={`hidden lg:block lg:text-[1.8rem] text-black mt-4 font-black item item5
          }`}
      >
        Join the Party
      </div>
      <div
        className={`hidden lg:block lg:text-[1.8rem] text-black mt-4 font-black item item6
          }`}
      >
        Join the Party
      </div>
      <div
        className={` hidden lg:block lg:text-[1.8rem] text-black mt-4 font-black item item7
          }`}
      >
        Join the Party
      </div>
      <div
        className={`hidden lg:block lg:text-[1.8rem] text-black mt-4 font-black item item8
          }`}
      >
        Join the Party
      </div>

      {/* Mobile */}

      <div
        className={`lg:hidden text-[1.1rem] text-black mt-4 font-black item item1
          }`}
      >
        $COOLGUY
      </div>
      <div
        className={`lg:hidden text-[1.1rem] text-black mt-4 font-black item item2
          }`}
      >
        $COOLGUY
      </div>
      <div
        className={`lg:hidden text-[1.1rem] text-black mt-4 font-black item item3
          }`}
      >
        $COOLGUY
      </div>
      <div
        className={`lg:hidden text-[1.1rem] text-black mt-4 font-black item item4
          }`}
      >
        $COOLGUY
      </div>
      <div
        className={`lg:hidden text-[1.1rem] text-black mt-4 font-black item item5
          }`}
      >
        $COOLGUY
      </div>
      <div
        className={`lg:hidden text-[1.1rem] text-black mt-4 font-black item item6
          }`}
      >
        $COOLGUY
      </div>
      <div
        className={`lg:hidden text-[1.1rem] text-black mt-4 font-black item item7
          }`}
      >
        $COOLGUY
      </div>
      <div
        className={` lg:hidden text-[1.1rem] text-black mt-4 font-black item item8
          }`}
      >
        $COOLGUY
      </div>
    </div>
  );
};

export default InfiniteLoop;
