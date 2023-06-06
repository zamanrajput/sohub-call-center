import React from 'react';
import FirstCol from './firstCol/firstCol';
import SecondCol from './secondCol/secondCol';
import ThirdCol from './thirdCol/thirdCol';

const Home = () => {
    return (
        <div className='grid grid-cols-12 gap-2 p-2 bg-slate-100'>
            <div className='col-span-1 h-screen border-gray-950  bg-white rounded'>
               <FirstCol></FirstCol>
            </div>
            <div className='col-span-3 h-screen border-gray-950  bg-white rounded'>
                <SecondCol></SecondCol>
            </div>
            <div className='col-span-8 h-screen border-gray-950  bg-white rounded'>
                <ThirdCol></ThirdCol>
            </div>
        </div>
    );
};

export default Home;