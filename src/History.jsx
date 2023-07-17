import { BsFillTelephoneFill, BsShare, BsTelephone, BsEnvelope, BsChat, BsTrash3 } from "react-icons/bs";
import ExpandableComponent from "./Pages/ExpandableComponent";



export default History = ({ visible }) => {
    return (

        <div>
            {visible == null || visible == true ?
                <div className=''>
                    <div className="py-1 ">
                        <div className="border shadow-md p-3 rounded-lg bg-white mx-2">
                            <ExpandableComponent title={"History"} Child={<div className='w-auto h-72 '>
                                <div className='inline md:inline sm:inline px-2'>
                                    <button className="btn btn-sm">All</button>
                                </div>
                                <div className='inline-flex flex-wrap justify-around gap-2 mt-3 mb-2'>
                                    <div>
                                        <button className="btn btn-sm rounded-full  bg-blue-100"><BsTelephone /> </button>
                                    </div>
                                    <div>
                                        <button className="btn btn-sm rounded-full  bg-blue-100"><BsChat /></button>
                                    </div>
                                    <div>
                                        <button className="btn btn-sm rounded-full  bg-blue-100"><BsShare /></button>
                                    </div>
                                    <div>
                                        <button className="btn btn-sm rounded-full  bg-blue-100"><BsEnvelope /></button>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex flex-col justify-center items-center h-3/4'>
                                    <BsTrash3 size="40px" />
                                    <p> No History</p>
                                </div>
                            </div>} />
                        </div>

                    </div>
                </div>
                : null}
        </div>




    )
}