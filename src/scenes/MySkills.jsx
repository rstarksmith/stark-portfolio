import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";


const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="skills" className="pt-10 pb-24"> 
        {/* header and image section */}
        <div className="md:flex md:justify-between md:gap-16 mt-32">
            <motion.div
                className="md:w-1/3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >  
            <p className="font-playfair font-semibold text-4xl mb-5">
                MY <span className="text-red">SKILLS</span>
            </p>
            <LineGradient width="w-1/2" />
            <p className="mt-10 mb-7">
                {/* Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
                fames odio in at. */}
            </p>
            </motion.div>
            <div className="mt-16 md:mt-0">
                {/* might need to be large screens */}
                {/* skills image */}
                {isAboveMediumScreens ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                        before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img
                            alt="skills"
                            className="z-10"
                            src="assets/skills-image.png"
                        />
                    </div>
                ) : (
                     <img alt="skills" className="z-10" src="assets/skills-image.png" />
                )}
            </div>
        </div>
        {/* SKILLS */}
        <div className="md:flex md:justify-between mt-16 gap-32">
            {/* Graphic */}
            <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            // y so it comes from the bottom instead
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            >
            <div className="relative h-32">
                <div className="z-10">
                    {/* <img src="../assets/react.png" alt="contact" /> */}
                    <p>2 years</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">
                        Visual & Graphic Design
                    </p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5">Experienced in graphic, web, and logo design with formal training in design fundamentals including color theory, balance, proportionality, and scale. Detail-oriented with a talent for elegant problem-solving. Familiar with prototyping and wireframing tools like Figma.</p>

            </motion.div>
             {/* Coding */}
            <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            // delay
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            >
            <div className="relative h-32">
                <div className="z-10">
                {/* <img src="../assets/rails.png" alt="ruby on rails logo" /> */}
                <p>1 year</p>
                <p className="font-playfair font-semibold text-3xl mt-3">
                    Software Development
                </p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5">Trained full stack engineer, with specific aptitudes for React and Ruby on Rails.
                My GitHub profile showcases a growing collection of coding projects, emphasizing my experience with JavaScript, React and Ruby on Rails stacks.
                </p>
            </motion.div>
            {/* Collaboration */}
            <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            // increase delay
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            >
            <div className="relative h-32">
                <div className="z-10">
                {/* <img src="../assets/js.png" alt="javascript logo" /> */}
                <p>2 years</p>
                <p className="font-playfair font-semibold text-3xl mt-3">
                    Communication & Collaboration
                </p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5">Seasoned in presenting ideas, gathering feedback,
                and ensuring all stakeholders feel heard and valued.  A highly skilled 
                problem solver who proactively identifies and tackles challenges, providing 
                innovative solutions while fostering collaborative efforts to overcome obstacles.
            </p>
            </motion.div>
        </div>
        </section>
    )


}

export default MySkills;