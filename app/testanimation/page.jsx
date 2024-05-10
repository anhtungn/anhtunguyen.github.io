"use client";
import { motion } from "framer-motion";

const TestPage = () => {
    const variants ={
        variant1:{
            x: 400, y:300,opacity:0.5, transition:{duration:3}
        },
        variant2:{
            x: 400, y:-300,opacity:90
        }
    };
    
    return (
        <div className="h-full flex items-center justify-center">
            <motion.div 
                className="w-96 h-96 bg-red-400 rounded"
                initial={{ x: -100 }} // Fixed the syntax error here
                variants={variants}
                animate='variant1'// Fixed the syntax error here
                // transition = {{delay:2,duration:4}}
            ></motion.div>
            <h1>Test Page</h1>
        </div>
    );
};

export default TestPage;