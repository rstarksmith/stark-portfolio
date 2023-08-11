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

const Project = ({ title, subtitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
//   title= "Project 1"
//   converts = "project-1" for image

    return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <div>{subtitle}</div>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const linkCss = "hover:underline hover:text-pink flex justify-center"

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
                    {/* text */}
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
                {/* <div
                    className="flex justify-center text-center items-center p-10 bg-red
                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                >
                    SLEEK USER INTERFACES
                </div> */}
                 <Project 
                  title="In Progress" 
                  subtitle={
                  <>
                    <a href="https://28y3d1g1pbd.typeform.com/report/HE6qQfOx/s6otWztA65xTAxGI" target="_blank" rel="noopener noreferrer" className={linkCss}>Survey Results</a>
                    {/* <a href="https://www.figma.com/file/0bkn66Hr5Z5wFb2bceZxLF/DDC---Process?type=whiteboard" target="_blank" rel="noopener noreferrer" className={linkCss}>Personas</a> */}
                    {/* <a href="https://www.figma.com/file/Dbv3PMFFscTJvCUpA9NMvL/DDC---Mockup?type=design&mode=design" target="_blank" rel="noopener noreferrer" className={linkCss}>Mockup</a> */}
                  </>
                }
                />
                <Project 
                  title="Case Study" 
                  subtitle={
                  <>
                    <a href="https://www.canva.com/design/DAFq-7PAmYw/T533Era52V7q3y0Y4ZrKmA/view?utm_content=DAFq-7PAmYw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" rel="noopener noreferrer" className={linkCss}>Study</a>
                    <a href="https://www.figma.com/file/0bkn66Hr5Z5wFb2bceZxLF/DDC---Process?type=whiteboard" target="_blank" rel="noopener noreferrer" className={linkCss}>Process</a>
                    <a href="https://www.figma.com/file/Dbv3PMFFscTJvCUpA9NMvL/DDC---Mockup?type=design&mode=design" target="_blank" rel="noopener noreferrer" className={linkCss}>Mockup</a>
                  </>
                }
                />
                <Project 
                  title="nosh up" 
                  subtitle={
                  <>
                    <a href="https://www.loom.com/share/359844ed0e104648abd3df9c4db3e82c" target="_blank" rel="noopener noreferrer" className={linkCss}>Demo</a>
                    <a href="https://github.com/rstarksmith/nosh" target="_blank" rel="noopener noreferrer" className={linkCss}>GitHub</a>
                    <a href="https://nosh.onrender.com/" target="_blank" rel="noopener noreferrer" className={linkCss}>Live</a>
                  </>
                }
                />
                <Project 
                  title="Fox Vinyl" 
                  subtitle={
                    <>
                      <a href="https://www.loom.com/share/f01bfddac5c4405e8f8f6bc9531e8b90" target="_blank" rel="noopener noreferrer" className={linkCss}>Demo</a>
                      <a href="https://github.com/rstarksmith/phase-3-project-frontend" target="_blank" rel="noopener noreferrer" className={linkCss}>GitHub</a>
                    </>
                  }
                />

                {/* ROW 2 */}
                <Project 
                  title="Lego List" 
                  subtitle={
                    <>
                      <a href="https://www.loom.com/share/7311ec122e31481b965ae49b88b7a454" target="_blank" rel="noopener noreferrer" className={linkCss}>Demo</a>
                      <a href="https://github.com/rstarksmith/phase-2-project-legolist" target="_blank" rel="noopener noreferrer" className={linkCss}>GitHub</a>
                    </>
                  }
                />
                <Project 
                  title="Shelfie Share" 
                  subtitle={
                    <>
                      <a href="https://www.loom.com/share/98f70fbb05ef44f89b2d49177580c00a" target="_blank" rel="noopener noreferrer" className={linkCss}>Demo</a>
                      <a href="https://github.com/rstarksmith/phase-4-project-shelfie-review" target="_blank" rel="noopener noreferrer" className={linkCss}>GitHub</a>
                    </>
                  }
                />
                <Project 
                  title="Ruby Arrays"
                  subtitle={
                    <>
                       <a href="https://dev.to/rstarksmith/seeking-ruby-array-methods-2dee" target="_blank" rel="noopener noreferrer" className={linkCss}>Blog Post</a>
                    </>
                  }
                />

                {/* ROW 3 */}
                <Project 
                  title="Introducing Validations" 
                  subtitle={
                    <>
                      <a href="https://dev.to/rstarksmith/introducing-validations-2aok" target="_blank" rel="noopener noreferrer" className={linkCss}>Blog Post</a>
                    </>
                  }
                />
                <Project 
                  title="React Gotchas" 
                  subtitle={
                    <>
                       <a href="https://dev.to/rstarksmith/beginner-react-mistakes-a46" target="_blank" rel="noopener noreferrer" className={linkCss}>Blog Post</a>
                    </>
                  }
                />
                {/* <div
                    className="flex justify-center text-center items-center p-10 bg-blue
                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                >
                    ENGAGING TECHNICAL BLOG POSTS
                </div> */}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;