
import React, { useState } from 'react';
import './DialPad.css';
import { Backspace, Call } from '@mui/icons-material';
import ExpandableComponent from '../../../ExpandableComponent';
const DialPad = ({ visible }) => {
    const [count, setCount] = useState(0);
    const [dialpadInput, setDialpadInput] = useState('');
    console.log(dialpadInput)

    const handleClick = (e) => {
        const num = e;
        if (count < 20) {
            setDialpadInput((output) => output + num);
            setCount((count) => count + 1);
        }
    };
    const handleRemoveLast = () => {
        if (count > 0) {
            setDialpadInput((output) => output.slice(0, -1));
            setCount((count) => count - 1);
        }
    };

    return (

        <div>
            {visible == null || visible == true ?

                <div className='rounded-md bg-white  shadow-md m-2 py-3 px-4'>

                    <ExpandableComponent title={"Dialpad"} Child={<div className="text-center max-w-sm ">
                        <div className='flex w-auto h-12 bg-gray-100 rounded-lg border justify-center mx-2 my-4 text-center items-center'>
                            <h5 style={{ flex: 5 }} className=' border-none font-bold text-xl' type="number" name="" id=""> {dialpadInput} </h5>
                            <span style={{ flex: 1 }}>
                                {dialpadInput != '' ?

                                    <div className="bg-red-500 mx-auto justify-center flex hover:bg-red-400 items-center h-9 w-9 rounded-full">
                                        <Backspace style={{ marginInlineEnd: 3, width: 20, height: 20, color: 'white' }} onClick={handleRemoveLast} />
                                    </div>
                                    : null}
                            </span>
                        </div>
                        <hr />

                        <div className="flex flex-wrap mt-3">
                            <div className="w-1/3">
                                <button onClick={() => handleClick('1')} className="mx-2 rounded-full  w-12 h-12 text-xl text-gray-700 font-bold hover:bg-gray-400">1</button>
                            </div>
                            <div className="w-1/3">
                                <button onClick={() => handleClick('2')} className="mx-2 rounded-full  w-12 h-12 text-xl  text-gray-700 font-bold hover:bg-gray-400">2</button>
                            </div>
                            <div className="w-1/3">
                                <button onClick={() => handleClick('3')} className="mx-2 rounded-full  w-12 h-12 text-xl  text-gray-700 font-bold hover:bg-gray-400">3</button>
                            </div>
                            <div className="w-1/3">
                                <button onClick={() => handleClick('4')} className="mx-2 rounded-full  w-12 h-12 text-xl  text-gray-700 font-bold hover:bg-gray-400">4</button>
                            </div>
                            <div className="w-1/3">
                                <button onClick={() => handleClick('5')} className="mx-2 rounded-full  w-12 h-12 text-xl  text-gray-700 font-bold hover:bg-gray-400">5</button>
                            </div>
                            <div className="w-1/3">
                                <button onClick={() => handleClick('6')} className="mx-2 rounded-full  w-12 h-12  text-xl  text-gray-700 font-bold hover:bg-gray-400">6</button>
                            </div>
                            <div className="w-1/3">
                                <button onClick={() => handleClick('7')} className="mx-2 rounded-full  w-12 h-12 text-xl  text-gray-700 font-bold hover:bg-gray-400">7</button>
                            </div>
                            <div className="w-1/3">
                                <button onClick={() => handleClick('8')} className="mx-2 rounded-full  w-12 h-12  text-xl  text-gray-700 font-bold hover:bg-gray-400">8</button>
                            </div>
                            <div className="w-1/3">
                                <button onClick={() => handleClick('9')} className="mx-2 rounded-full  w-12 h-12  text-xl  text-gray-700 font-bold hover:bg-gray-400">9</button>
                            </div>
                            <div className="w-1/3">
                                <button onClick={() => handleClick('*')} className="mx-2 rounded-full  w-12 h-12 text-xl  text-gray-700 font-bold hover:bg-gray-400">*</button>
                            </div>
                            <div className="w-1/3">
                                <button onClick={() => handleClick('0')} className="mx-2 rounded-full  w-12 h-12  text-xl  text-gray-700 font-bold hover:bg-gray-400">0</button>
                            </div>
                            <div className="w-1/3">
                                <button onClick={() => handleClick('#')} className="mx-2 rounded-full  w-12 h-12  text-xl  text-gray-700 font-bold hover:bg-gray-400">#</button>
                            </div>


                        </div>
                        <div className="bg-green-500 mx-auto mt-6 justify-center  flex hover:bg-green-400 items-center h-14 w-14 rounded-full">
                        <Call className='justify-center align-middle self-center' sx={{color:'white'}} />
                        </div>
                      

                        {/* <div className="bg-red-500 mx-auto justify-center flex hover:bg-red-400 items-center h-14 w-14 rounded-full">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                 <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
             </svg>
         </div> */}
                    </div>} />
                </div>

                : null}
        </div>



    );
};

export default DialPad;