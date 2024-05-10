import { motion } from "framer-motion";

const Experiences = () => {
    return (
        <motion.div
        className="h-full"
        initial = {{ y: "-200vh" }}
        animate = {{ y: "0%"}}
        transition = {{ duration: 1 }}
        >
            Experiences
        </motion.div>
    );
};
export default Experiences;