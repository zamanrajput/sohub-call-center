import React from 'react';
import { FaHouseUser } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";

const FirstCol = () => {
    return (
        <div className='max-w-screen-lg lg:h-screen  md:lg:h-screen m-auto'>
            <div className="flex lg:flex-col md:flex-col justify-center lg:justify-between md:justify-between gap-6 items-center py-2">
                <div>
                    <div className="text-black bg-slate-200 p-4 rounded-full mt-1">
                        <FaHouseUser size="20px" />
                    </div>
                    
                    <div className="text-black bg-slate-200 p-4 rounded-full mt-2">
                        <FaMap size="20px" />
                    </div>
                </div>

                <div className='lg:absolute md:absolute lg:bottom-0 md:bottom-0'>
                    <div className="text-black bg-slate-200 p-4 rounded-full mt-2">
                        <FaCommentAlt size="20px" />
                    </div>
                    
                    <div className="text-black bg-slate-200 p-4 rounded-full mt-2">
                        <FaQuestion size="20px" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstCol;