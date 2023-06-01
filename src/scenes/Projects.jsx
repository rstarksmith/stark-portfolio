import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    //   animations for each will happen one by one .2 between
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
//   initial condition for each child
  visible: { opacity: 1, scale: 1 },
//   final condition for each child
};

const Project = ({ title, loom }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
//   title= "Project 1"
//   converts = "project-1" for image

    return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <a href={loom} target="_blank" rel="noopener noreferrer" className="underline">Demo</a>
        {/*  move this to each project and call, subtitle <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p> */}
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};


const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
        {/* HEADINGS */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                       PROJECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
                    fames odio in at. At magna ornare dictum lectus. Purus massa morbi
                    purus nec eget eleifend ut elit.
                </p>
            </motion.div>
        {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    // sets grid col of 3
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                {/* ROW 1 */}
                <div
                    className="flex justify-center text-center items-center p-10 bg-red
                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                >
                    BEAUTIFUL USER INTERFACES
                </div>
                <Project title="Project 1" loom="https://www.loom.com/share/359844ed0e104648abd3df9c4db3e82c"/>
                <Project title="Project 2" loom="https://www.loom.com/share/f01bfddac5c4405e8f8f6bc9531e8b90"/>

                {/* ROW 2 */}
                <Project title="Project 3" loom="https://www.loom.com/share/98f70fbb05ef44f89b2d49177580c00a" />
                <Project title="Project 4" />
                <Project title="Project 5" />

                {/* ROW 3 */}
                <Project title="Project 6" />
                <Project title="Project 7" />
                <div
                    className="flex justify-center text-center items-center p-10 bg-blue
                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                >
                    SMOOTH USER EXPERIENCE
                </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;