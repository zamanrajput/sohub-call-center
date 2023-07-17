import { useEffect } from 'react';
import FirstCol from './FirstCol/FirstCol';
import SecondCol from './SecondCol/SecondCol';
import ThirdCol from './ThirdCol/ThirdCol';
import { CreateUserAgent } from '../../SipDiamond';

const Home = () => {
    useEffect(()=>{
        CreateUserAgent({onStatusChange:(status)=>{
            console.log(status);
        }});
    },[])
    return (
        <div className='grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12  gap-2 p-2 dark:bg-slate-100 '>
            <div className='sm:col-span-1 md:col-span-1 lg:col-span-1   border-gray-950  bg-white rounded'>
               <FirstCol></FirstCol>
            </div>

            <div className='sm:col-span-11 md:col-span-11 lg:col-span-3  border-gray-950  bg-white rounded'>
                <SecondCol></SecondCol>
            </div>

            <div className='sm:col-span-12 md:col-span-12 lg:col-span-8 h-screen border-gray-950  bg-white rounded'>
                <ThirdCol></ThirdCol>
            </div>
        </div>
        // <div className='grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12  gap-2 p-2 dark:bg-slate-100 '>
        //     <div className='sm:col-span-1 md:col-span-1 lg:col-span-1  md:h-screen lg:h-screen border-gray-950  bg-white rounded'>
        //         <FirstCol></FirstCol>
        //     </div>
        //     <div className='sm:col-span-11 md:col-span-11 lg:col-span-11 md:h-screen lg:h-screen'>
        //         <div className='sm:col-span-11 md:col-span-11 lg:col-span-3 border-gray-950  bg-white rounded'>
        //             <SecondCol></SecondCol>
        //         </div>
        //         <div className='sm:col-span-12 md:col-span-12 lg:col-span-8 h-screen border-gray-950  bg-white rounded'>
        //             <ThirdCol></ThirdCol>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Home;