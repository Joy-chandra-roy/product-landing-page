import React, { useState } from 'react';

const Navbar = () => {

    const navItems=["Features", "Benefits", "Reviews", "Pricing", "FAQ"]
    const[active, setActive]=useState("")


    return (
        
            <header className='bg-white/80 border-b border-white/20 shadow-sm backdrop-blur-xl  sticky top-0 z-50'>
                <div className='max-w-7xl mx-auto px-4 '>
                    <div className='flex justify-between items-center h-15'>
                        <a href='' 
                        className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text'
                        >JoySound</a>
                        <nav className='hidden md:flex items-center gap-8'>
                            {
                                navItems.map((item, index)=>(
                                    <a 
                                    href=''
                                    key={index}
                                    onClick={(e)=>{
                                        e.preventDefault()
                                        setActive(item)
                                    }}
                                    className={`text-sm font-medium transition-colors duration-300 ${
                                        active===item?
                                        "text-blue-500":"hover:text-purple-500"
                                    }`}
                                    >
                                        {item}
                                    </a>
                                ))
                            }
                        </nav>
                        <button className='bg-gradient-to-r from-purple-400 to-blue-500 text-white px-3 py-2 rounded-full shadow-xl shadow-purple-400/30 cursor-pointer hover:opacity-80'>buy now</button>
                    </div>
                </div>

            </header>
            
        
    );
};

export default Navbar;