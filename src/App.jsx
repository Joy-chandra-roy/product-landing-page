import React from 'react';
import {motion} from "motion/react"
const App = () => {
  return (
    <div>
      <motion.h1
      initial={{opacity:0, y:40}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.8}}
       className='text-2xl font-bold text-center text-purple-600'
       >
        Hello , Good Morning Everyone.
        </motion.h1>
    </div>
  );
};

export default App;