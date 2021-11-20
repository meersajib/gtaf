import React from 'react';
import columns from '../../pages/api/data/data';

const Table = () => {

    return (
        <>
        <table className="table w-full">
        <thead className='bg-gtaf-warning'>
            <tr className="table-row">
            <th className="pl-2 items-center hidden sm:table-cell md:table-cell lg:table-cell">
                <input className='h-4 w-4' type="checkbox" />            
            </th>
            <th className="hidden sm:table-cell md:table-cell lg:table-cell text-gtaf-font-color cursor-pointer">
                <span className="grid pt-3 pb-3 grid-flow-col auto-cols-max items-center text-gtaf-font-13px text-gtaf-font-color font-medium w-auto">
                    <span>
                        Date Updated
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </span>
            </th>
            <th className="table-cell text-gtaf-font-color cursor-pointer">
                <span className="grid pt-3 pb-3 pl-4 sm:pl-0 md:pl-0 lg:pl-0 grid-flow-col auto-cols-max items-center text-gtaf-font-13px font-medium">
                    Title
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>   
                </span>
            </th>
            <th className="text-left text-gtaf-font-13px font-medium items-center hidden md:table-cell lg:table-cell text-gtaf-font-color">Details</th>
            <th className="text-left text-gtaf-font-13px font-medium items-center "><span className="hidden sm:table-cell md:table-cell lg:table-cell text-gtaf-font-color">Status</span></th>
            <th className="text-gtaf-font-13px font-medium text-right text-gtaf-font-color">
                <span className="hidden md:block lg:block">
                Quantity
                </span>
            </th>
            <th className="text-right  text-gtaf-font-13px font-medium items-center hidden md:table-cell lg:table-cell text-gtaf-font-color">Unit Price</th>
            <th className="text-gtaf-font-color">
                <span className="grid pt-3 pb-3 pr-4 grid-flow-col auto-cols-max items-center justify-end text-gtaf-font-13px font-medium cursor-pointer">
                    Amount
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </span>
            </th>
            </tr>
        </thead>
        <tbody>
            {columns?.map((item, index) =>
            <tr key={item?.title+'_'+index}>
            <td className="hidden sm:table-cell md:table-cell lg:table-cell pl-6">
                <input className="h-4 w-4 border-gtaf-check-border" type="checkbox" />            
            </td>
            <td className="text-base text-lef font-normal pt-5 pb-5 hidden sm:table-cell md:table-cell lg:table-cell text-gtaf-font-color">
                {item?.date}
            </td>
            <td className="text-base text-left font-normal pt-5 pb-5 pl-4 sm:pl-0 md:pl-0 lg:pl-0 text-gtaf-font-color">{item?.title}</td>
            <td className="text-base text-left font-normal pt-5 pb-5 hidden md:table-cell lg:table-cell text-gtaf-font-color">{item?.details ? item?.details : '-'}</td>
            <td className="text-base text-center md:text-left lg:text-left font-normal pt-5 pb-5 table-cell sm:flex md:flex lg:flex items-center text-gtaf-font-color">
                <div className="hidden sm:block md:block lg:block">
                    {item?.status}</div>
                {/* <div> */}
                    <div className={`m-auto sm:ml-2 md:ml-2 lg:ml-2 h-2 w-2 rounded-full ${item?.status === `Alright` ? `bg-success` : item?.status === `In Progress` ? `bg-warning` : `bg-error`}`}>
                {/* </div> */}
                </div>
            </td>
            <td className="text-base text-right font-normal pt-5 pb-5 pr-4 sm:pr-0 md:pr-0 lg:pr-0 text-gtaf-font-color">
                <span className="font-bold">{item?.stock}/</span>
                <span>{item?.quantity}</span>
            </td>
            <td className="text-base text-right font-normal pt-5 pb-5 hidden md:table-cell lg:table-cell text-gtaf-font-color">{item?.unitPrice}</td>
            <td className="text-base text-right font-normal pt-5 pb-5 pr-4">{item?.amount}</td>
            </tr>
           )}
        </tbody>
            </table>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-2  pt-10 pb-10 text-gtaf-gray-text">
                <div className='pl-6 hidden sm:block md:block lg:block '>
                    <span className="border-gtaf-border border-gtaf-border-w rounded pt-2 pl-3 pr-3 pb-2 text-gtaf-font-13px cursor-pointer">
                    <span className="pr-10">
                        10 items per page
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="1" d="M19 9l-7 7-7-7" />
                    </svg>
                    </span>
                    </span>
                </div>
                <div className="grid grid-flow-col justify-start sm:justify-end md:justify-end lg:justify-end pl-4 sm:pl-0 md:pl-0 lg:pl-0">
                    <div>
                    <span className="border-gtaf-inner-border border-gtaf-border-w rounded pt-2 pl-3 pr-3 pb-2 text-gtaf-font-13px text-gtaf-gray-text cursor-pointer">
                    <span className="pr-10 ">
                       Page 1 of 5
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="1" d="M19 9l-7 7-7-7" />
                    </svg>
                    </span>
                    </span>
                    </div>
                    
                    <div>
                        <span className="border-gtaf-border-w border-gtaf-inner-border text-gtaf-gray-text rounded pt-1.5 pb-2 pl-3 pr-3 mr-4 ml-4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="1" d="M15 19l-7-7 7-7" />
                        </svg>
                    </span>
                    </div>
                    <div>
                        <span className="border-gtaf-border-w border-gtaf-inner-border text-gtaf-gray-text rounded pt-1.5 pb-2 pl-3 pr-3 mr-6 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Table;