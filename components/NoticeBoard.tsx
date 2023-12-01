import Marquee from "react-fast-marquee";
import { BsFillPinAngleFill } from "react-icons/bs"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
const NoticeBoard = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="col-md-3">
            <div
                className={`mt-2 flex flex-col justify-start border-2 mx-1 md:mx-5 lg:mx-10   w-[200px] lg:w-[350px] min-h-max border-black border-solid p-3 ${isHovered ? 'animate-pause' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <h3 className="flex items-center">
                    <span>
                        <BsFillPinAngleFill className="text-2xl text-red-700" />
                    </span>
                    <span className="mx-2 text-xl md:text-2xl   text-black  font-semibold">
                        <span className="text-orange-400">Notice</span> Board
                    </span>
                </h3>
                <marquee
                    direction="up"
                    // onMouseOut="this.start();"
                    // onMouseOver="this.stop();"
                    // scrollAmount="5"
                    height="200"
                // style={{ marginTop: '3px', fontSize: '16px' }}
                >
                    <ul className="space-y-2 text-blue-700">
                        <li className="relative">
                            
                            {/* <img src="/new-gif.gif" className=" absolute top-1" /> */}
                            <a
                                href="/pdf/Interview_schedule.jpg"
                                target="_blank"
                                className="hover:underline"
                            >
                                Interview schedule for various faculty positions
                            </a>
                        </li>
                        <li className="relative">
                            <a
                                href="pdf/Admission_Notification.jpg"
                                target="_blank"
                                className="hover:underline"
                            >
                                Admission Notification 2022-23 for B. Pharm. I/ M. Pharm. I:
                                Institute Level/Against CAP(if any)
                            </a>
                            {/* <img src="/new-gif.gif" className="absolute  top-1" /> */}
                        </li>
                        <li className="relative">
                            <a
                                href="pdf/DSY_2022_23_Notification_ACAP.pdf"
                                target="_blank"
                                className="hover:underline"
                            >
                                Admission Notification 2022-23 Direct Second Year B.Pharm.
                                Against CAP(One Seat)
                            </a>
                            {/* <img src="/new-gif.gif" className="absolute   top-1" /> */}
                        </li>
                        <li className="relative">
                            <a
                                href="pages/recruitment.php"
                                target="_blank"
                                className="hover:underline"
                            >
                                <h5>Recruitment at various Positions</h5>
                            </a>
                            {/* <img src="/new-gif.gif" className="absolute  top-1" /> */}
                        </li>
                    </ul>
                </marquee>
            </div>
        </div>
    );

    // return (
    //     <>
    //         <div className="mt-2 flex flex-col justify-start border-2 mx-1 md:mx-5 lg:mx-10 w-[200px] lg:w-[350px] min-h-max border-black border-solid p-3 ">
    //             <div>
    //                 <h3 className="flex items-center">
    //                     <span>
    //                         <BsFillPinAngleFill className="text-2xl text-red-700" />
    //                     </span>
    //                     <span className="mx-2 text-xl md:text-2xl   text-black  font-semibold">
    //                         <span className="text-orange-400">Notice</span> Board
    //                     </span>
    //                 </h3>
    //             </div>
    //             <div className="flex flex-col flex-grow overflow-hidden ">
    //                 <div className="flex-grow">
    //                     <Marquee
    //                         className="h-full  min-w-full mx-[-230px]"
    //                         direction="up"
    //                         gradient={false}
    //                         autoFill={true}
    //                     >
    //                         <ul className="list-image w-fit">
    //                             <li className="flex items-center space-x-2 mb-3">
    //                                 <a href="/pdf/Interview_schedule.jpg" target="_blank">
    //                                     Interview schedule for various faculty positions
    //                                 </a>
    //                                 <img src="/new-gif.gif" alt="New" />
    //                             </li>
    //                             <li className="flex items-center space-x-2 mb-3">
    //                                 <a href="pdf/Admission_Notification.jpg" target="_blank">
    //                                     Admission Notification 2022-23 for B. Pharm. I/ M. Pharm. I: Institute Level/Against CAP(if any)
    //                                 </a>
    //                                 <img src="/new-gif.gif" alt="New" />
    //                             </li>
    //                             <li className="flex items-center space-x-2 mb-3">
    //                                 <a href="pdf/DSY_2022_23_Notification_ACAP.pdf" target="_blank">
    //                                     Admission Notification 2022-23 Direct Second Year B.Pharm. Against CAP(One Seat)
    //                                 </a>
    //                                 <img src="/new-gif.gif" alt="New" />
    //                             </li>
    //                             <li className="flex items-center space-x-2">
    //                                 <a href="pages/recruitment.php" target="_blank">
    //                                     <h5>Recruitment at various Positions</h5>
    //                                 </a>
    //                                 <img src="/new-gif.gif" alt="New" />
    //                             </li>
    //                         </ul>
    //                     </Marquee>
    //                     {/* <div className="marquee-container">
    //                         <div className="overflow-hidden h-200">
    //                             <div className="flex flex-col animate-marquee">
    //                                 <ul className="list-image">
    //                                     <li className="flex items-center space-x-2 mb-3">
    //                                         <a href="/pdf/Interview_schedule.jpg" target="_blank">
    //                                             Interview schedule for various faculty positions
    //                                         </a>
    //                                         <img src="/new-gif.gif" alt="New" />
    //                                     </li>
    //                                     <li className="flex items-center space-x-2 mb-3">
    //                                         <a href="pdf/Admission_Notification.jpg" target="_blank">
    //                                             Admission Notification 2022-23 for B. Pharm. I/ M. Pharm. I: Institute Level/Against CAP(if any)
    //                                         </a>
    //                                         <img src="/new-gif.gif" alt="New" />
    //                                     </li>
    //                                     <li className="flex items-center space-x-2 mb-3">
    //                                         <a href="pdf/DSY_2022_23_Notification_ACAP.pdf" target="_blank">
    //                                             Admission Notification 2022-23 Direct Second Year B.Pharm. Against CAP(One Seat)
    //                                         </a>
    //                                         <img src="/new-gif.gif" alt="New" />
    //                                     </li>
    //                                     <li className="flex items-center space-x-2">
    //                                         <a href="pages/recruitment.php" target="_blank">
    //                                             <h5>Recruitment at various Positions</h5>
    //                                         </a>
    //                                         <img src="/new-gif.gif" alt="New" />
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                     </div> */}
    //                 </div>
    //             </div>
    //         </div>



    //     </>
    // );
}

export default NoticeBoard;