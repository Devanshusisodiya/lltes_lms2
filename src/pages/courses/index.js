import Link from "next/link"
import axios from "axios";
import {AnimatePresence, motion } from "framer-motion";
import Backgroundcircles from "components/Backgroundcircles";
import Image from "next/image";
import Navbar from "components/Navbar";

// some constants for animations
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease:" easing "}
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: " easing "
    }
  }
};
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Courses({ courses }) {
    return (
      <div  className=" bg-[#C0B9DD] h-screen snap-mandatory snap-start ">
      <Navbar />
      {/* indent this out to remove bg image  */}
      <div className="mt-10 ml-4" style={{
        position: "absolute",
        left: 100,
        right:100,
        top:100,
        bottom: 0,
        backgroundImage: `url('/bgimage_courses.png')`,
        
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "90%",
        
        filter: "blur(4px)"}}>
      </div>
      {/* till here */}
      <motion.div className="flex  items-center "  style={{ position: "relative" }}> 
      
        
      
      <div className="  p-3 mt-16 mx-auto" >
      
      <h2 className="text-6xl font-display text-center"><span className="text-[#7F56D9] uppercase text-6xl  ">
        C</span>
      <span className="">ourses</span></h2>  
      <p className="text-gray-700 text-centerfont-red mt-2 max-w-md mx-auto">
      <span className="text-[#7F56D9] text-2xl font-display font-semibold">L</span>orem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
      
      <ul className="list-none p-3  mx-auto z-10 mt-1 space-y-10" style={{ maxWidth: 1000 }}>
          <motion.div variants={stagger} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4rem" }} >
          <AnimatePresence>
                {courses.map((course) => (
                  <Link key={course.id} href={`/courses/${course.id}`}>
                    <motion.li
                      key={course.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{
                        position: "relative",
                        zIndex: 1,
                        scale: [0.9, 1.1],
                        transition: {
                          duration: 0.2,
                        },
                      }}
                      className="w-full object-center max-w-sm shadow-2xl bg-[#F7F4EA] opacity-80 rounded-lg my-8 flex flex-col items-center space-y-4"
                      style={{ minWidth: "200px", height: "250px" }}
                    >
                      <motion.img
                        whileTap={{
                          scale: 0.7,
                          rotate: -360,
                          borderRadius: "120%",
                        }}
                        src={`/${course.id}.png`}
                        alt={course.name}
                        className="w-[150px] h-[150px] my-4"
                      />
                      <div className="flex-1 mt-2 text-center">
                        <h3 className="text-2xl font-display font-bold">
                          {course.name}
                        </h3>
                      </div>
                    </motion.li>
                  </Link>
                ))}
              </AnimatePresence>
          </motion.div>
        </ul>
        {/* <div style={{ position: "relative", left: '3%', marginTop: '-400px' }} >
        <Backgroundcircles/>
      </div> */}
      </div>  
      </motion.div>

      </div>
    )
  }

export async function getStaticProps(){
  try{
    const response = await axios.get('https://back-test1.azurewebsites.net/api/getClasses?code=DKo1bSyC6YmyxyOG0BT82LzyU4fIJWI_NVjISqmszrgJAzFu0ho0eQ==');
    const data = await response.data
    return {
      props: {
        courses: data
      }
    }
  }catch(error){
    return {
      props: {
        courses: error
      }
    }
  }
}  

export default Courses