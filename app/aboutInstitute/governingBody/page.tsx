"use client";
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link';
import { FC } from 'react';

interface governingitem {
    name: string;
    href: string;
    position: string;
    alt: string;
}

const governingBodies: governingitem[] = [
    {
        name: "Dr. Nitin R. Dhande",
        href: "https://www.iperwardha.com/images/Dr.Dhande.jpg",
        position: "(Chairman)",
        alt: "Chairman photo",
    },
    {
        name: "Adv. U.S. Deshmukh",
        href: "https://www.iperwardha.com/images/U_S_Deshmukh.jpg",
        position: "(Vice-president)",
        alt: "Vice-president photo",
    },
    {
        name: "Dr.H.M. Deshmukh",
        href: "https://www.iperwardha.com/images/H_M_Deshmukh.jpg",
        position: "(Treasurer)",
        alt: "Treasurer photo",
    },
    {
        name: "shri. Y.V. Chaudhary",
        href: "https://www.iperwardha.com/images/Y_V_chaudhary.jpg",
        position: "(Secretary)",
        alt: "Secretary photo",
    },
    {
        name: "Shri. S.D. Kale",
        href: "https://www.iperwardha.com/images/S_D_kale.jpg",
        position: "(Executive-Member)",
        alt: "Executive-Member photo",
    },
    {
        name: "Shri. N.B. Hiwase",
        href: "https://www.iperwardha.com/images/N_B_Hiwase.jpg",
        position: "(Executive-Member)",
        alt: "Executive-Member photo",
    },
    {
        name: "Sau. R.H. Deshmukh",
        href: "https://www.iperwardha.com/images/R_H_Deshmukh.jpg",
        position: "(Executive-Member)",
        alt: "Executive-Member photo",
    },
    {
        name: "Dr.Mrs. V.N. Dhande",
        href: "https://www.iperwardha.com/images/Mrs_Dhande.jpg",
        position: "(Executive-Member)",
        alt: "Executive-Member photo",
    },
    {
        name: "Dr.Mrs. P.Y. Chaudhary",
        href: "https://www.iperwardha.com/images/Mrs_P_Y_Choudhary.jpg",
        position: "(Executive-Member)",
        alt: "Executive-Member photo",
    },

]

const Governingitem: React.FC = () => {
    return (
        <div id="Home">
            <Header />
            <>
                <div className=" mb-10 py-3">
                    <div className="flex items-center text-xl bg-slate-400 font-semibold leading-tight text-gray-900 py-4 mx-2 rounded-md ">
                        <Link href='/' className=" mx-2  hover:underline">Home</Link>{"|"}{" About Institute"}
                    </div>
                    <header className='flex text-2xl text-amber-800 text-center justify-center font-semibold py-4'>
                        Governing item
                    </header>
                    <hr className='border-x-7 border-slate-600 mb-3' />
                    <div className="grid grid-cols-1  gap-4  lg:grid-cols-3  w-auto">
                        {governingBodies.map((item, index) => (
                            <div
                                key={index}
                                className="mx-auto overflow-hidden shadow-md w-fit cursor-pointer"
                                onClick={() => console.log(item.name)}
                            >
                                <img
                                    className="object-cover h-auto w-auto text-center mx-auto p-3"
                                    src={item.href}
                                    alt={item.alt}
                                />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl text-center">{item.name}</div>
                                    <div className="font-bold text-lg mb-2 text-center">{item.position}</div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </>
            <Footer />
        </div>
    );
}

export default Governingitem;