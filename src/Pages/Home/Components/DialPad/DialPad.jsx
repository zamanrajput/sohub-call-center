
import React, { useState } from 'react';
import './DialPad.css';
const DialPad = () => {
    const [count, setCount] = useState(0);
    const [output, setOutput] = useState('');
    console.log(output)

    const handleClick = (e) => {
        const num = e.target.innerText.trim();

        if (count < 11) {
            setOutput((prevOutput) => prevOutput + num);
            setCount((prevCount) => prevCount + 1);
        }
    };

    const handleRemoveLast = () => {
        if (count > 0) {
            setOutput((prevOutput) => prevOutput.slice(0, -1));
            setCount((prevCount) => prevCount - 1);
        }
    };

    return (

        <div>
            {/* 1st Dialpad */}
            <div className=" rounded-xl text-center bg-gray-300 max-w-sm mx-auto mt-24 py-5">
                <div className='flex w-auto h-12 bg-gray-100 rounded-lg border justify-center m-2 text-center items-center'>
                    <h5 className='border-none font-bold text-xl' type="number" name="" id=""> 123456789 </h5>
                </div>
                <hr />
                <br />
                <div className="flex flex-wrap">
                    <div className="w-1/3">
                        <button className="mx-2 rounded-full  w-12 h-12 text-xl text-gray-700 font-bold hover:bg-gray-400">1</button>
                    </div>
                    <div className="w-1/3">
                        <button className="mx-2 rounded-full  w-12 h-12 text-xl  text-gray-700 font-bold hover:bg-gray-400">2</button>
                    </div>
                    <div className="w-1/3">
                        <button className="mx-2 rounded-full  w-12 h-12 text-xl  text-gray-700 font-bold hover:bg-gray-400">3</button>
                    </div>
                    <div className="w-1/3">
                        <button className="mx-2 rounded-full  w-12 h-12 text-xl  text-gray-700 font-bold hover:bg-gray-400">4</button>
                    </div>
                    <div className="w-1/3">
                        <button className="mx-2 rounded-full  w-12 h-12 text-xl  text-gray-700 font-bold hover:bg-gray-400">5</button>
                    </div>
                    <div className="w-1/3">
                        <button className="mx-2 rounded-full  w-12 h-12  text-xl  text-gray-700 font-bold hover:bg-gray-400">6</button>
                    </div>
                    <div className="w-1/3">
                        <button className="mx-2 rounded-full  w-12 h-12 text-xl  text-gray-700 font-bold hover:bg-gray-400">7</button>
                    </div>
                    <div className="w-1/3">
                        <button className="mx-2 rounded-full  w-12 h-12  text-xl  text-gray-700 font-bold hover:bg-gray-400">8</button>
                    </div>
                    <div className="w-1/3">
                        <button className="mx-2 rounded-full  w-12 h-12  text-xl  text-gray-700 font-bold hover:bg-gray-400">9</button>
                    </div>
                    <div className="w-1/3">
                        <button className="mx-2 rounded-full  w-12 h-12 text-xl  text-gray-700 font-bold hover:bg-gray-400">*</button>
                    </div>
                    <div className="w-1/3">
                        <button className="mx-2 rounded-full  w-12 h-12  text-xl  text-gray-700 font-bold hover:bg-gray-400">0</button>
                    </div>
                    <div className="w-1/3">
                        <button className="mx-2 rounded-full  w-12 h-12  text-xl  text-gray-700 font-bold hover:bg-gray-400">#</button>
                    </div>


                </div>
                <div className="bg-green-500 mx-auto mt-6 justify-center flex hover:bg-green-400 items-center h-14 w-14 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                </div>

                {/* <div className="bg-red-500 mx-auto justify-center flex hover:bg-red-400 items-center h-14 w-14 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                    </div> */}
            </div>

            {/* 2nd Dialpad  */}
            {/* <div>
                <div className="grid min-h-screen place-items-center">
                    <div className="mx-auto h-[712px] w-[350px] bg-black rounded-[60px] border-[14px] border-black relative overflow-hidden ring ring-teal-400 shadow-xl">
                        <div className="absolute top-0 inset-x-0">
                            <div className="mx-auto bg-black h-6 w-40 rounded-b-3xl"></div>
                        </div>
                        <div className="flex flex-col h-full justify-center text-white">
                            <div className="w-full text-center">
                                <input className="bg-transparent mx-2 text-center p-4 focus:outline-none" />
                                <div className="inline-grid grid-cols-3 my-4 gap-6 mx-auto">
                                    <div className="bg-gray-700 justify-center flex hover:bg-gray-600 items-center h-14 w-14 rounded-full">1</div>
                                    <div className="bg-gray-700 justify-center flex hover:bg-gray-600 items-center h-14 w-14 rounded-full">2</div>
                                    <div className="bg-gray-700 justify-center flex hover:bg-gray-600 items-center h-14 w-14 rounded-full">3</div>
                                    <div className="bg-gray-700 justify-center flex hover:bg-gray-600 items-center h-14 w-14 rounded-full">4</div>
                                    <div className="bg-gray-700 justify-center flex hover:bg-gray-600 items-center h-14 w-14 rounded-full">5</div>
                                    <div className="bg-gray-700 justify-center flex hover:bg-gray-600 items-center h-14 w-14 rounded-full">6</div>
                                    <div className="bg-gray-700 justify-center flex hover:bg-gray-600 items-center h-14 w-14 rounded-full">7</div>
                                    <div className="bg-gray-700 justify-center flex hover:bg-gray-600 items-center h-14 w-14 rounded-full">8</div>
                                    <div className="bg-gray-700 justify-center flex hover:bg-gray-600 items-center h-14 w-14 rounded-full">9</div>
                                    <div className="bg-gray-700 justify-center flex hover:bg-gray-600 items-center h-14 w-14 rounded-full">★</div>
                                    <div className="bg-gray-700 justify-center flex hover:bg-gray-600 items-center h-14 w-14 rounded-full">0</div>
                                    <div className="bg-gray-700 justify-center flex hover:bg-gray-600 items-center h-14 w-14 rounded-full">#</div>
                                </div>
                                <div className="bg-green-500 mx-auto justify-center flex hover:bg-green-400 items-center h-14 w-14 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* 3rd Dialpad  */}
            {/* <div>
                <div class="container">
                    <div id="output"><div id="output">{output}</div></div>
                    <div class="row">
                        <div class="digit" id="one">1</div>
                        <div class="digit" id="two">2
                            <div class="sub">ABC</div>
                        </div>
                        <div class="digit" id="three">3
                            <div class="sub">DEF</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="digit" id="four">4
                            <div class="sub">GHI</div>
                        </div>
                        <div class="digit" id="five">5
                            <div class="sub">JKL</div>
                        </div>
                        <div class="digit">6
                            <div class="sub">MNO</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="digit">7
                            <div class="sub">PQRS</div>
                        </div>
                        <div class="digit">8
                            <div class="sub">TUV</div>
                        </div>
                        <div class="digit">9
                            <div class="sub">WXYZ</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="digit">*
                        </div>
                        <div class="digit">0
                        </div>
                        <div class="digit">#
                        </div>
                    </div>
                    <div class="botrow"><i class="fa fa-star-o dig" aria-hidden="true"></i>
                        <div id="call"><i class="fa fa-phone" aria-hidden="true"></i></div>
                        <i class="fa fa-long-arrow-left dig" aria-hidden="true"></i>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default DialPad;