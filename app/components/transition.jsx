"use client";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar"; 
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Transition = ({ children }) => {
    const pathName = usePathname();

    return (
        <AnimatePresence mode="wait">
        <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100 flex flex-col">
            <motion.div
                className="h-screen w-screen fixed bg-purple-300 rounded-b-[100px] z-40"
                animate={{ height: "0vh" }}
                exit={{ height: "100vh" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            />
            
            <motion.div

                className="fixed m-auto top-0 bottom-0 left-0 right-0 text-black text-8xl cursor-default  z-50 w-fit h-fit"
                initial={{ opacity:1 }}
                animate={{ opacity:0 }}
                exit={{ opacity:0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {pathName.substring(1)}
            </motion.div>
            <motion.div
                className="h-screen w-screen fixed bg-purple-300 rounded-t-[100px] bottom-0 z-30"
                initial={{ height: "140vh" }}
                animate={{ height: "0vh", transition: {delay:0.3} }}
            />

            <div className="h-24">
            <Navbar />
            </div>
            <div className="flex-1">{children}</div>
        </div>
        </AnimatePresence>
    );
};
export default Transition;
