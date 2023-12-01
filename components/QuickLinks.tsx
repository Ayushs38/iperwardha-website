import { BsFillPinAngleFill } from "react-icons/bs";

interface QuickLinksItem {
    name: string;
    href: string;
}


const QuickLinks: React.FC = () => {

    const QuickLinkItems: QuickLinksItem[] = [
        {
            name: 'IPER in NEWS',
            href: '#',
        },
        {
            name: 'NIRF',
            href: '#',
        },
        {
            name: 'PCI - SIF',
            href: '#',
        },
        {
            name: 'E-bulletin',
            href: '#',
        },
        {
            name: 'Courses',
            href: '#',
        },
        {
            name: 'Educational Tour',
            href: '#',
        },
        {
            name: `MOU's`,
            href: '#',
        },
        {
            name: 'Best Practices',
            href: '#',
        },
        {
            name: 'Mandatory Disclosure',
            href: '#',
        },
        {
            name: 'Green Audit',
            href: '#',
        },
        {
            name: `NSS Activity Reports`,
            href: '#',
        },
        {
            name: 'Student Feedback',
            href: '#',
        },
        {
            name: 'Student Grievance Portal',
            href: '#',
        },
        {
            name: 'Student Satisfaction Survey',
            href: '#',
        },
        {
            name: 'Stakeholder’s Feedback',
            href: '#',
        },
        {
            name: 'Feedback Analysis',
            href: '#',
        },
        {
            name: 'RTI',
            href: '#',
        },
        {
            name: 'College development committee',
            href: '#',
        },
        {
            name: 'Electoral Literacy Club',
            href: '#',
        },
        {
            name: 'Student Development Cell',
            href: '#',
        },
        {
            name: `Institution's Innovation Council`,
            href: '#',
        },
        {
            name: 'Policy Document on Environment and energy usage',
            href: '#',
        },
        {
            name: 'Policy Document on Green Campus',
            href: '#',
        },
        {
            name: 'Divyangajan Policy',
            href: '#',
        },


    ]


    return (
        <div>
            <div className="mt-2 flex flex-col justify-start border-2 mx-1 md:mx-5 lg:mx-10   w-[200px] lg:w-[350px] min-h-max border-black border-solid p-3">
                <div>
                    <h3 className="flex items-center">
                        <span>
                            <BsFillPinAngleFill className="text-2xl text-red-700" />
                        </span>
                        <span className="mx-2 text-xl md:text-2xl   text-black  font-semibold">
                            <span className="text-orange-400">Quick</span> Links
                        </span>
                    </h3>
                </div>
                <ul className="mt-3 list-none ">
                   
                    {QuickLinkItems.map((item, index) => (
                        <div className=" bg-orange-500 hover:bg-orange-400 mt-1  font-bold py-1/2 px-2 border border-orange-700 rounded space-y-2">
                            <li key={index} className="my-2">
                                <a
                                    href={item.href}
                                    className="  text-black hover:underline"
                                >
                                    {item.name}
                                </a>
                            </li>
                        </div>
                    ))}


                </ul>
            </div>

        </div>
    );
}

export default QuickLinks;