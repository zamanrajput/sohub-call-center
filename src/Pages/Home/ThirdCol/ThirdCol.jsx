import React from 'react';
import {
    BsFillTelephoneFill, BsFillPauseFill, BsHeadset, BsPersonFillUp, BsXCircle,
    BsPauseCircle, BsLockFill, BsThreeDotsVertical, BsTextCenter, BsClock, BsPencil,
    BsCalendar2Day, BsCheckLg, BsFilter
} from "react-icons/bs";
const ThirdCol = () => {
    return (
        <div>
            {/* 1st section */}
            <section>
                <div className="bg-base-100 shadow-xl p-2 rounded">
                    <div className="flex items-center justify-between">
                        <div className="text-black py-2">
                            <p>+1(412)288-3782</p>
                            <div className='flex  items-center justify-center'>
                                <div>
                                    <BsFillTelephoneFill size="20px" className="text-black  bg-green-300 rounded-full mx-2 mt-2 p-1" />
                                </div>
                                <div className='mt-2'>00:01</div>
                            </div>
                        </div>

                        <div className="">
                            <button className="btn btn-sm bg-gray-200 text-black rounded-full  text-sm mx-1"><BsFillPauseFill size="15px" /> Hold</button>
                            <button className="btn btn-sm bg-gray-200 text-black rounded-full  text-sm mx-1"><BsHeadset size="15px" /> Consult</button>
                            <button className="btn btn-sm bg-gray-200 text-black rounded-full text-sm mx-1"><BsPersonFillUp size="15px" /> Transfer</button>
                            <button className="btn btn-sm bg-gray-200 text-black rounded-full  text-sm mx-1"><BsPauseCircle size="15px" /> Pause Recording</button>
                            <button className="btn btn-sm bg-red-600 text-white rounded-full  text-sm mx-1"><BsXCircle size="15px" /> End</button>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className='flex text-sm  items-center gap-5 p-2'>
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
            </section>

            {/* 2nd section  */}
            <section>
                <div className="bg-base-100 shadow-xl p-4 rounded mt-1 text-sm">
                    <div className="flex items-center justify-between mb-2">
                        <div className="text-black rounded-full">
                            <div className='flex items-start justify-between gap-5'>
                                <p><BsClock className='inline' /> Customer Journey (TBD)</p>
                                <p><BsTextCenter className="inline" /> VIR Transcript</p>
                            </div>
                        </div>

                        <div className="">
                            <button className='border rounded-full'><BsThreeDotsVertical size="15px" /></button>
                        </div>
                    </div>
                    <hr />
                    <div style={{ overflowY: "scroll" }} className='max-h-80'>
                        <div className='border rounded-md p-2 mt-2'>
                            <p className='font-bold'>Customer Informations</p>
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="font-bold">
                                        <p>Michael Littlefood <BsPencil className='inline' /></p>
                                    </div>
                                    <div>
                                        <p>Contacts within 24 hours</p>
                                        <p className='font-bold'>4</p>
                                    </div>
                                    <div className="">
                                        <p>Contacts within last 10 days</p>
                                        <p className='font-bold'>9</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border rounded-md p-2 mt-2'>
                            <div className='flex items-center justify-between'>
                                <p className='font-bold'>Contacts and Activities</p>
                                <p className='font-bold text-xs'>

                                    <div className="form-control w-32">
                                        <label className="cursor-pointer label">
                                            <span className="label-text">LiveStrem</span>
                                            <input type="checkbox" className="toggle toggle-accent toggle-sm" checked />
                                        </label>
                                    </div>
                                </p>
                            </div>
                            <div>
                                <div className="border rounded-md p-2 mt-1 bg-slate-50">
                                    <div className="">
                                        <p className='text-xs'>Most Recent</p>
                                    </div>
                                    <div className='flex gap-20 mt-3'>
                                        <div>
                                            <p className='font-bold'>Now</p>
                                            <p className=''>15</p>
                                        </div>
                                        <div className="">
                                            <p className='font-bold'><BsCalendar2Day className='inline' /> Activity</p>
                                            <p className=''>14:50 PM  Failedto renew auto insurance</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-md p-2 mt-1">
                                    <div className='flex gap-2 mt-3'>
                                        <div>
                                            <button className="btn btn-sm"><BsFilter className="inline" /> Filters</button>
                                        </div>
                                        <div>
                                            <button className="btn btn-sm rounded-full"><BsCheckLg className="inline" /> Last 30 Days</button>
                                        </div>
                                        <div>
                                            <button className="btn btn-sm rounded-full"><BsCheckLg className="inline" /> Contacts and Activities</button>
                                        </div>
                                        <div>
                                            <button className="btn btn-sm rounded-full"><BsCheckLg className="inline" /> Voice</button>
                                        </div>
                                    </div>
                                    {/* card   */}
                                    <div className='mt-4'>
                                        <div className="flex items-center justify-between">
                                            <div className="text-black bg-stone-500 rounded-full p-4">
                                            <BsFillTelephoneFill size="15px" />
                                            </div>
                                            <div>
                                                <p>Johan Smith</p>
                                                <p className='text-xs'>IVR_Queue_1-00:01</p>
                                            </div>
                                            <div className="">
                                                <button className="btn btn-sm bg-slate-100 text-black">Call</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <div className="flex items-center justify-between">
                                            <div className="text-black bg-stone-500 rounded-full p-4">
                                            <BsFillTelephoneFill size="15px" />
                                            </div>
                                            <div>
                                                <p>Johan Smith</p>
                                                <p className='text-xs'>IVR_Queue_1-00:01</p>
                                            </div>
                                            <div className="">
                                                <button className="btn btn-sm bg-slate-100 text-black">Call</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <div className="flex items-center justify-between">
                                            <div className="text-black bg-stone-500 rounded-full p-4">
                                            <BsFillTelephoneFill size="15px" />
                                            </div>
                                            <div>
                                                <p>Johan Smith</p>
                                                <p className='text-xs'>IVR_Queue_1-00:01</p>
                                            </div>
                                            <div className="">
                                                <button className="btn btn-sm bg-slate-100 text-black">Call</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    );
};

export default ThirdCol;