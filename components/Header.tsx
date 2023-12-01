"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGooglePlus } from 'react-icons/fa';
import NavBar from './NavBar';
import Navbar from './NavBar';





const Header = () => {
    interface NavItem {
        name: string;
        href: string;
        subItems: SubItem[];
    }

    interface SubItem {
        name: string;
        href: string;
    }

    const NavItems: NavItem[] = [
        {
            name: 'About Institute',
            href: '#',
            subItems: [
                { name: 'Governing Body', href: '#' },
                { name: 'About IPER', href: '#' },
                { name: 'About VYWS', href: '#' },
                { name: 'Mission & Vision', href: '#' },
                { name: 'Mission & Vision', href: '#' },
                { name: 'COs, POs, & PSOs', href: '#' },
                { name: 'Procedures and Policies', href: '#' },
                { name: 'Affiliation and Approvals', href: '#' },
                { name: 'Organogram', href: '#' },
                { name: 'Code of conduct', href: '#' },
            ],
        },
        {
            name: 'Academics',
            href: '#',
            subItems: [
                { name: 'Courses', href: '#' },
                { name: 'Admission Procedures', href: '#' },
                { name: 'Fees Structure', href: '#' },
                { name: 'Academic Calendar', href: '#' },
                { name: 'Syllabus', href: '#' },
                { name: 'Syllabus', href: '#' },
                { name: 'Time Tables', href: '#' },
                { name: 'Category-wise admission', href: '#' },
                { name: 'Results', href: '#' },
            ],
        },
        // ... other main items
        {
            name: 'Faculty',
            href: '#',
            subItems: [
                { name: 'Teaching and Non-teaching staff', href: '#' },
                { name: 'Faculty Profile', href: '#' },
            ],
        },
        {
            name: 'Achievements And Events',
            href: '#',
            subItems: [
                { name: 'Events Conducted', href: '#' },
                { name: 'GPAT crashers', href: '#' },
                { name: 'Faculty Achievements', href: '#' },
                { name: 'Student Achievements', href: '#' },
            ],
        },
        {
            name: 'Committees',
            href: '#',
            subItems: [
                { name: 'Anti Ragging Committee', href: '#' },
                { name: 'Hostel Advisory Committee', href: '#' },
                { name: 'Library Advisory Committee', href: '#' },
                { name: 'Competitive Examination Cell', href: '#' },
                { name: 'Program Committee', href: '#' },
                { name: 'Gender sensitization Cell', href: '#' },
                { name: 'Girls/Women Security Cell / Sexual Harassment Cell', href: '#' },
                { name: 'Admission Committee consitution', href: '#' },
                { name: 'Animal Ethical Committee', href: '#' },
                { name: 'Training, Placement & Industry-Institute Partnership Cell', href: '#' },
                { name: 'Research Committee', href: '#' },
                { name: 'Anti-Discrimination Cell', href: '#' },
                { name: 'Student Grievances Redressal Committee', href: '#' },
                { name: 'NSS Advisory Commitee', href: '#' },
                { name: 'Student Council', href: '#' },

            ],
        },
        {
            name: 'R&D',
            href: '#',
            subItems: [
                { name: 'Research Policy', href: '#' },
                { name: 'Publications', href: '#' },
                { name: 'AICTE Projects', href: '#' },
                { name: 'Research Areas', href: '#' },
                { name: 'Consultancy Services', href: '#' },
                { name: 'Conferences/ Seminar/ Workshops organized', href: '#' },
            ],
        },
        {
            name: 'Library',
            href: '#',
            subItems: [
                { name: 'Mission and Motto', href: '#' },
                { name: 'Library at as Glance', href: '#' },
                { name: 'E-Resources', href: '#' },
                { name: 'NDLI Activities', href: '#' },
                { name: 'M.Pharm Thesis', href: '#' },
                { name: 'Ph.D Thesis', href: '#' },
                { name: 'B.Pharm Practice School and Projects', href: '#' },
            ],
        },
        {
            name: 'IQAC',
            href: '#',
            subItems: [
                { name: "About IQAC", href: "#" },
                { name: "IQAC Committee", href: "#" },
                { name: "Objective", href: "#" },
                { name: "SPDD", href: "#" },
                { name: "Short Term Goals", href: "#" },
                { name: "Best Practices", href: "#" },
                { name: "Minutes & Actions Taken Report", href: "#" },
                { name: "Quality Policy", href: "#" },
                { name: "AQAR", href: "#" },
                { name: "Student Satisfaction Survey", href: "#" },
                { name: "Feedback Analysis", href: "#" },
            ],
        },
        {
            name: 'NAAC',
            href: '#',
            subItems: [
                { name: "NAAC Declaration Undertaking Certificate", href: "#" },
                { name: "IIQA", href: "#" },
                { name: "Self-Study Report Supporting Documents (Cycle II)", href: "#" },
                { name: "SSR (Cycle II)", href: "#" },
                { name: "DVV Documents", href: "#" },
                { name: "Institutional Distinctiveness", href: "#" },
            ],
        },
        {
            name: 'Alumni',
            href: '#',
            subItems: [
                { name: 'Alumni Message', href: '#' },
                { name: 'Membership form', href: '#' },
                { name: 'Our Prominent Alumni', href: '#' },
                { name: 'Alumni Association', href: '#' },
                { name: 'Alumni Registration', href: '#' },
                { name: 'Alumni Directory', href: '#' },
            ],
        }
    ];

    return (
        <>
            <div className="bg-slate-800 p-2 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <FaFacebook className="text-white text-2xl cursor-pointer  " />
                    <FaTwitter className="text-white text-2xl cursor-pointer " />
                    <FaGooglePlus className="text-white text-2xl cursor-pointer" />
                    <FaInstagram className="text-white text-2xl cursor-pointer " />
                    <FaLinkedin className="text-white text-2xl cursor-pointer " />
                </div>
                <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-slate-300">Login</button>
            </div>
            <div className="bg-orange-100 text-center py-5">
                <div className=" flex items-center   justify-between space-x-4 mx-10">
                    <img src="/logo Iper.png" alt="College Logo" className="w-20 h-20" />
                    <div className=" py-5 justify-center text-center align-middle flex flex-col">
                        <h2 className=" text-red-600 text-center italic  font-bold text-xl">
                            Vidarbha Youth Welfare Society, Amravati
                        </h2>
                        <h1 className="text-3xl   font-extrabold text-blue-800">INSTITUTE OF PHARMACEUTICAL EDUCATION AND RESEARCH</h1>
                        <h2 className=" font-bold text-center text-xl">
                            BORGAON ( MEGHE ), WARDHA, MAHARASHTRA
                        </h2>

                    </div>
                    <img src="/a-grade.png" alt="NAAC A++ Logo" className="w-20 h-20" />
                </div>
                
            </div>
            <Navbar />

        </>
    );
}

export default Header;