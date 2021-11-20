import React from 'react';
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="flex justify-between bg-white rounded shadow-gtaf-btn-shadow pt-5 pb-5 pl-6 pr-6 sm:hidden md:hidden lg:hidden">
             <Link href="/">
                <a className="grid grid-flow-col auto-cols-max gap-2 text-gtaf-text-color-1 hover:text-gtaf-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-current stroke-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" stroke-linejoin="round"  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                </a>
            </Link>
            <Link href="/">
                <a className="grid grid-flow-col auto-cols-max gap-2 text-gtaf-text-color-1 hover:text-gtaf-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-current stroke-1" fill="none" viewBox="0 0 24 24" >
                    <path strokeLinecap="round" stroke-linejoin="round"  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </a>
            </Link>
            <Link href="/">
                <a className="grid grid-flow-col auto-cols-max gap-2 text-gtaf-text-color-1 hover:text-gtaf-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-current stroke-1" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd" />
                    </svg>
                </a>
            </Link>
             <Link href="/">
                <a className="grid grid-flow-col auto-cols-max gap-2 text-gtaf-text-color-1 hover:text-gtaf-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-current stroke-1 " fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" stroke-linejoin="round" stroke-width="1" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </a>
            </Link>
        </div>
    );
};

export default Footer;