"use client";
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'




const aboutInstitute = [
  { name: 'Governing Body', href: '/aboutInstitute/governingBody' },
  { name: 'About IPER', href: '/aboutInstitute/aboutIPER' },
  { name: 'About VYWS', href: '#' },
  { name: 'Mission & Vision', href: '#' },
  { name: 'Mission & Vision', href: '#' },
  { name: 'COs, POs, & PSOs', href: '#' },
  { name: 'Procedures and Policies', href: '#' },
  { name: 'Affiliation and Approvals', href: '#' },
  { name: 'Organogram', href: '#' },
  { name: 'Code of conduct', href: '#' },
]

const academics = [
  { name: 'Courses', href: '#' },
  { name: 'Admission Procedures', href: '#' },
  { name: 'Fees Structure', href: '#' },
  { name: 'Academic Calendar', href: '#' },
  { name: 'Syllabus', href: '#' },
  { name: 'Syllabus', href: '#' },
  { name: 'Time Tables', href: '#' },
  { name: 'Category-wise admission', href: '#' },
  { name: 'Results', href: '#' },
]

const faculty = [
  { name: 'Teaching and Non-teaching staff', href: '#' },
  { name: 'Faculty Profile', href: '#' },
]

const achievementAndEvents = [
  { name: 'Events Conducted', href: '#' },
  { name: 'GPAT crashers', href: '#' },
  { name: 'Faculty Achievements', href: '#' },
  { name: 'Student Achievements', href: '#' },
]

const commitees = [
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
]

const rAndD = [
  { name: 'Research Policy', href: '#' },
  { name: 'Publications', href: '#' },
  { name: 'AICTE Projects', href: '#' },
  { name: 'Research Areas', href: '#' },
  { name: 'Consultancy Services', href: '#' },
  { name: 'Conferences/ Seminar/ Workshops organized', href: '#' },
]

const library = [
  { name: 'Mission and Motto', href: '#' },
  { name: 'Library at as Glance', href: '#' },
  { name: 'E-Resources', href: '#' },
  { name: 'NDLI Activities', href: '#' },
  { name: 'M.Pharm Thesis', href: '#' },
  { name: 'Ph.D Thesis', href: '#' },
  { name: 'B.Pharm Practice School and Projects', href: '#' },
]

const iqac = [
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
]

const naac = [
  { name: "NAAC Declaration Undertaking Certificate", href: "#" },
  { name: "IIQA", href: "#" },
  { name: "Self-Study Report Supporting Documents (Cycle II)", href: "#" },
  { name: "SSR (Cycle II)", href: "#" },
  { name: "DVV Documents", href: "#" },
  { name: "Institutional Distinctiveness", href: "#" },
]

const alumni = [
  { name: 'Alumni Message', href: '#' },
  { name: 'Membership form', href: '#' },
  { name: 'Our Prominent Alumni', href: '#' },
  { name: 'Alumni Association', href: '#' },
  { name: 'Alumni Registration', href: '#' },
  { name: 'Alumni Directory', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="  w-full flex  justify-end p-4 bg-orange-500" aria-label="Global">
        
        <div className="flex justify-end   lg:hidden">
          <button
            type="button"
            className=" "
            
            onClick={() => setMobileMenuOpen(true)}
          >
            {/* <span className="sr-only">Open main menu</span> */}
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:justify-start lg:gap-x-7">


          <Link href='/' className="flex  text-sm font-semibold leading-tight text-gray-900">HOME</Link>




          <Popover className="relative">
            <Popover.Button className="flex items-center text-sm font-semibold leading-tight text-gray-900">
              About Institute
              <ChevronDownIcon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-6 top-full z-10 mt-1  w-60 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {aboutInstitute.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-3 rounded-md p-2 text-md leading-4 hover:bg-gray-50"
                    >

                      <div className="flex-auto">

                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>



                      </div>
                    </div>
                  ))}
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center text-sm font-semibold leading-tight text-gray-900">
              Academics
              <ChevronDownIcon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-6 top-full z-10 mt-1  w-60 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {academics.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-3 rounded-md p-2 text-md leading-4 hover:bg-gray-50"
                    >

                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>

                      </div>
                    </div>
                  ))}
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center text-sm font-semibold leading-tight text-gray-900">
              Faculty
              <ChevronDownIcon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-6 top-full z-10 mt-1  w-60 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {faculty.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-3 rounded-md p-2 text-md leading-4 hover:bg-gray-50"
                    >

                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>

                      </div>
                    </div>
                  ))}
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center text-sm font-semibold leading-tight text-gray-900">
              Achievements And Events
              <ChevronDownIcon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-6 top-full z-10 mt-1  w-60 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {achievementAndEvents.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-3 rounded-md p-2 text-md leading-4 hover:bg-gray-50"
                    >

                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>

                      </div>
                    </div>
                  ))}
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center text-sm font-semibold leading-tight text-gray-900">
              Committees
              <ChevronDownIcon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-6 top-full z-10 mt-1  w-60 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {commitees.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-3 rounded-md p-2 text-md leading-4 hover:bg-gray-50"
                    >

                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>

                      </div>
                    </div>
                  ))}
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center text-sm font-semibold leading-tight text-gray-900">
              R&D
              <ChevronDownIcon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-6 top-full z-10 mt-1  w-60 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {rAndD.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-3 rounded-md p-2 text-md leading-4 hover:bg-gray-50"
                    >

                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>

                      </div>
                    </div>
                  ))}
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center text-sm font-semibold leading-tight text-gray-900">
              Library
              <ChevronDownIcon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-6 top-full z-10 mt-1  w-60 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {library.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-3 rounded-md p-2 text-md leading-4 hover:bg-gray-50"
                    >

                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>

                      </div>
                    </div>
                  ))}
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center text-sm font-semibold leading-tight text-gray-900">
              IQAC
              <ChevronDownIcon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-6 top-full z-10 mt-1  w-60 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {iqac.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-3 rounded-md p-2 text-md leading-4 hover:bg-gray-50"
                    >

                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>

                      </div>
                    </div>
                  ))}
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center text-sm font-semibold leading-tight text-gray-900">
              NAAC
              <ChevronDownIcon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-6 top-full z-10 mt-1  w-60 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {naac.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-3 rounded-md p-2 text-md leading-4 hover:bg-gray-50"
                    >

                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>

                      </div>
                    </div>
                  ))}
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center text-sm font-semibold leading-tight text-gray-900">
              Alumni
              <ChevronDownIcon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-6 top-full z-10 mt-1  w-60 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {alumni.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-3 rounded-md p-2 text-md leading-4 hover:bg-gray-50"
                    >

                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>

                      </div>
                    </div>
                  ))}
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>


          <a href="#" className="flex items-center text-sm font-semibold leading-tight text-gray-900">
            VMEDLULIFE
          </a>
          <a href="#" className="flex items-center text-sm font-semibold leading-tight text-gray-900">
            CONTACT
          </a>
        </Popover.Group>

      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              {/* <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              {/* <span className="sr-only">Close menu</span> */}
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-4">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        About Institute
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...aboutInstitute].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Academics
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...academics].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Faculty
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...faculty].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Achievement And Details
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...achievementAndEvents].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Committees
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...commitees].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        R&D
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...rAndD].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Library
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...library].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        IQAC
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...iqac].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        NAAC
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...naac].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Alumni
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...alumni].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  VMEDLULIFE
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  CONTACTS
                </a>

              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}


export default NavBar;