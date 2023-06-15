import React from 'react';
import {
    BsFillTelephoneFill, BsFillPauseFill, BsHeadset, BsPersonFillUp, BsXCircle,
    BsPauseCircle, BsLockFill
} from "react-icons/bs";
const FirstSection = () => {
    return (
        <div className="bg-base-100 shadow-xl p-2 rounded">
                    <div className="flex items-center justify-between gap-4 my-2">
                        <div className="text-black py-2 w-1/4">
                            <p className='text-xs'> +1(412)288-3782</p>
                            <div className=' items-center justify-start flex'>
                                <div>
                                    <BsFillTelephoneFill size="20px" className="text-black  bg-green-300 rounded-full mx-2 mt-2 p-1" />
                                </div>
                                <div className='mt-2'>00:01</div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button className="btn btn-sm bg-gray-200 text-black rounded-full  text-xs mx-1"><BsFillPauseFill size="15px" /> Hold</button>
                            <button className="btn btn-sm bg-gray-200 text-black rounded-full  text-xs mx-1"><BsHeadset size="15px" /> Consult</button>
                            <button className="btn btn-sm bg-gray-200 text-black rounded-full text-xs mx-1"><BsPersonFillUp size="15px" /> Transfer</button>
                            <button className="btn btn-sm bg-gray-200 text-black rounded-full  text-xs mx-1"><BsPauseCircle size="15px" /> Pause Recording</button>
                            <button className="btn btn-sm bg-red-600 text-white rounded-full  text-xs mx-1"><BsXCircle size="15px" /> End</button>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className='flex  flex-wrap text-sm  items-center gap-5 p-2'>
                            <div className='flex items-start justify-between gap-2'>
                                <div>
                                    <p>Phone Number <BsLockFill size="15px" className='inline' /></p>
                                    <p>Queue </p>
                                    <p>Queue Name </p>
                                    <p>Address <BsLockFill size="15px" className='inline' /></p>
                                </div>
                                <div>
                                    <p>: +1(412)288-3782</p>
                                    <p>: 12</p>
                                    <p>: IVR_Queue_1</p>
                                    <p>: 3772 AVE NE SERRA ROAD, <br /> Long Long
                                        Country, San Farisisco, CA 94001.
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-start justify-between gap-2'>
                                <div>
                                    <p>DNIS </p>
                                    <p>VIR Path </p>
                                    <p>RONA </p>
                                    <p className=''>Alternate Number <BsLockFill size="15px" className='inline' /></p>
                                </div>
                                <div>
                                    <p>: +1-800-900-8989</p>
                                    <p>: VIR_Path1</p>
                                    <p>: 32</p>
                                    <p>: 00083472385</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row-reverse">
                        <button className="btn btn-sm lowercase bg-gray-200 text-black rounded-full  text-sm mx-1">Save</button>
                        <button className="btn btn-sm lowercase bg-gray-200 text-black rounded-full  text-sm mx-1">Revert</button>
                    </div>
                </div>
    );
};

export default FirstSection;