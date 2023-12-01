"use client";
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link';


const AboutIPER: React.FC = () => {
    return (
        <div id="Home">
            <Header />
            <>
                <div className="flex flex-col mb-10 py-3 mx-auto ">
                    <div className="flex items-center text-xl bg-slate-400 font-semibold leading-tight text-gray-900 py-4  rounded-md mx-10">
                        <Link href='/' className="mx-5  hover:underline ">Home</Link>{" | "}{"   About Institute"}
                    </div>
                    <h1 className='flex text-2xl text-amber-800 text-center justify-center font-semibold py-4'>
                        About IPER
                    </h1>
                    <hr className='border-7 border-slate-600 mb-3 mx-28 ' />
                    <div className="">
                        <h1 className='flex text-2xl text-black text-center justify-center font-semibold py-4'>Institute of Pharmaceutical Education And Research</h1>
                        <p className=" mx-28 mb-3 font-medium">
                            The IPER, Wardha is managed by the Vidarbha Youth Welfare Society, Amravati. The V. Y. W. Society was established in the year 1965, with the objective to uplift the rural students in academic excellence particularly in the field of Science and Technology. The society runs 70 Institutions from pre – primary to post – graduate level covering various faculties like Arts, Commerce, Science, Social Sciences, Engineering, Dental and Pharmaceutical Sciences.


                        </p>
                        <p className="mx-28 mb-3 font-medium">
                            The Institute of Pharmaceutical Education and Research was established in 1982, a pioneering Pharmacy Institution in Vidarbha region of Maharashtra. The Institute provides instruction leading to Diploma, Degree, Post Graduate courses and Research programs in Pharmaceutical Sciences. Around 400 students from all corners of India are studying in the Institute. A beautiful campus of Institute is sprouled in an area of 5 acres. Well equipped laboratories, rich library, qualified and experienced staff and high academic standard have made the Institute as one of the premier Institutions in Maharashtra.
                        </p>

                        <h3 className=' font-semibold text-lg mx-28 mt-4'>The Institute is approved and accredited</h3>
                        <ul className=" mx-28 list-disc mt-3">
                            <li className=' mx-6 font-medium'>All India Council for Technical Education, New Delhi (AICTE)</li>
                            <li className=' mx-6 font-medium'>Pharmacy Council of India, New Delhi (PCI)</li>
                            <li className=' mx-6 font-medium'>National Board of Accreditation, New Delhi (NBA)
                            </li>
                            <li className=' mx-6 font-medium'>Government of Maharashtra, Mumbai (GoM)
                            </li>
                            <li className=' mx-6 font-medium'>Permanently affiliated to R. T. M. Nagpur University, Nagpur (RTMNU)
                            </li>
                            <li className=' mx-6 font-medium'>Accredited by National Assessment and Accreditation Council, Bangalore (NAAC) with Grade “A”</li>
                        </ul>
                    </div>
                </div>
            </>
            <Footer />
        </div>
    );
}

export default AboutIPER;