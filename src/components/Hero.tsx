import { ReactTyped } from "react-typed";
import { HERO_CONTENT } from "../constants/data";
import profilePic from "../assets/mountainProfile.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import pro smooth scroll

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div id="hero" className="border-b border-neutral-900 pb-24 lg:mb-35 pt-24">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-5xl font-thin tracking-tight lg:text-7xl lg:mt-16"
            >
              <span className="font-bold">Hello, I am Petr</span>
              <br />
              <ReactTyped
                strings={[
                  "a Full-Stack Developer",
                  "a lover of sports",
                  "a fan of design",
                  "creating innovative web solutions",
                ]}
                typeSpeed={50}
                backSpeed={40}
                loop
                className="text-cyan-500 font-light"
              />
            </motion.h1>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter lg:tracking-normal"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mt-6 mb-8 lg:mb-0 flex space-x-4"
            >
              <a
                href="/CV.pdf"
                download
                className="inline-block px-6 py-3 text-lg text-white bg-cyan-500 rounded-lg hover:bg-cyan-700 transition-colors duration-300"
              >
                Download CV
              </a>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="inline-block px-6 py-3 text-lg text-white bg-cyan-500 rounded-lg hover:bg-cyan-700 transition-colors duration-300 cursor-pointer"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Petr Michal"
              className="max-h-[400px] lg:max-h-[500px] w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
