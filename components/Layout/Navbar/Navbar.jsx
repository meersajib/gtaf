import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Search from '../../Form/Search';

const Navbar = () => {
    return (
        <div className='grid gap-4 grid-cols-2 bg-white h-16 shadow-sm items-center z-10 sticky top-0'>
                <div className="grid sm:grid-cols-gtaf-tab-logo-wrapper  md:grid-cols-gtaf-main-wrapper lg:grid-cols-gtaf-main-wrapper xl:grid-cols-gtaf-main-wrapper items-center">
                    <div className="w-gtaf-left-sidebar">
                        <Link href='/' preFetch={false} >
                        <a className="pl-8 inline-grid grid-cols-2">
                            <span className="pr-2.5 text-sm	font-medium text-gtaf-font-color">Starbucks</span>
                            <Image height={10} width={10} src='/assets/images/icons/down-filled-triangular-arrow.png' />
                        </a>
                    </Link>
                    </div>
                    <Search className="pl-3 md:pl-6 lg:pl-6 hidden sm:block md:block lg:block xl:block" />
                </div>
                <div className="grid justify-items-end pr-8">
                    <div className="grid items-center gap-4 grid-flow-col auto-cols-max cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="1" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="rounded-full w-8 h-8 cursor-pointer">
                        <Image className="rounded-full" src='/assets/images/me.jpg' height={32} width={32} />
                    </span>
                    <span className="cursor-pointer">
                        <span className="pr-2.5 text-sm font-medium text-gtaf-font-color">
                            Meer Sajib
                        </span>
                            <Image height={10} width={10} src='/assets/images/icons/down-filled-triangular-arrow.png' />
                    </span>
                    </div>
                </div>
            </div>
    );
};

export default Navbar;