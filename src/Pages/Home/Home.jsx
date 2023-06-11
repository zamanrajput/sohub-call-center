import React from 'react';
import FirstCol from './firstCol/firstCol';
import SecondCol from './secondCol/secondCol';
import ThirdCol from './thirdCol/thirdCol';

const Home = () => {
    return (
        <div className='grid md:grid-cols-12 sm:grid-cols-12 xm:grid-cols-12 gap-4 p-2 dark:bg-slate-100 '>
            <div className='md:col-span-1 sm:col-span-2 xm:col-span-2  md:h-screen lg:h-screen border-gray-950  bg-white rounded'>
               <FirstCol></FirstCol>
            </div>
            
            <div className='md:col-span-3 sm:col-span-10 xm:col-span-10 md:h-screen lg:h-screen border-gray-950  bg-white rounded'>
                <SecondCol></SecondCol>
            </div>
            
            <div className='md:col-span-8 sm:col-span-12 xm:col-span-12 h-screen border-gray-950  bg-white rounded'>
                <ThirdCol></ThirdCol>
            </div>
        </div>
    );
};

export default Home;