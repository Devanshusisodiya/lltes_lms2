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
      <div  className=" bg-[#e8f1f2] h-screen snap-mandatory snap-start ">
      <Navbar />
{/* 
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
      </div> */}

      <motion.div className="flex  items-center "  style={{ position: "relative" }}> 
      
        
      
      <div className="  p-3 mt-16 mx-auto" >
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      >
      <h2 className="text-6xl font-display text-blue-500 mt-3 text-center"><span className=" uppercase text-6xl  ">
        C</span>
      <span className="">ourses</span></h2> 
      </motion.div> 
      <p className="text-gray-700 text-center text-xl font-red mt-2 justify-center max-w-[1000px] mx-auto">
      Welcome to Courses, Enjoy the vast content available to the best of your needs. Select your class and then the subject
      you are interested in and then start your learning journey.
    </p>
      
      <ul className="my-page container list-none p-3  mx-auto z-10 mt-1 space-y-10" style={{ maxWidth: 1000 }}>
          <motion.div variants={stagger} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }} >
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
                      className="w-full object-center max-w-sm shadow shadow-slate-300 border border-slate-300 bg-[#F7F4EA] 
                      opacity-80 rounded-lg my-8 flex flex-col items-center space-y-4"
                      style={{ minWidth: "30px", height: "30px" }}
                    >
                        {/* <motion.img
                          whileTap={{
                            scale: 0.7,
                            rotate: -360,
                            borderRadius: "120%",
                          }}
                          src={`/${course.id}.png`}
                          alt={course.name}
                          className="w-[150px] h-[150px] my-4"
                        /> */}
                      <div className="flex-1 mt-1">
                        <h3 className="text-sm font-display font-bold text-center">
                          {course.name}
                        </h3>
                      </div>
                    </motion.li>
                  </Link>
                ))}
              </AnimatePresence>
          </motion.div>
        </ul>
        <div className="item-centre">
        <ul className="list-none   mx-auto object-center px-10 mr-80 mt-1 item-center" style={{ maxWidth: 1000 }}>
          <motion.div variants={stagger} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }} >
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
                      style={{ minWidth: "300px", height: "200px" }}
                    >
                        {/* <motion.img
                          whileTap={{
                            scale: 0.7,
                            rotate: -360,
                            borderRadius: "120%",
                          }}
                          src={`/${course.id}.png`}
                          alt={course.name}
                          className="w-[150px] h-[150px] my-4"
                        /> */}
                      <div className="flex-1 py-8 mt-8">
                        <h3 className="text-2xl mt-5 font-display font-bold text-center">
                          {course.name}
                        </h3>
                      </div>
                    </motion.li>
                  </Link>
                ))}
              </AnimatePresence>
          </motion.div>
        </ul>

        </div>
        
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