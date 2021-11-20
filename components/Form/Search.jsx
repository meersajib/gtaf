import React from 'react';

const Search = (props) => {
    const { className } = props;
    return (
        <form className={className}>
            <div className="relative secondary focus-within:secondary text-gtaf-gray-text">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </span>
            <input type="search" name="search" className="py-2 text-sm pl-10 bg-primary w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 h-10 rounded-lg focus:bg-primary focus:outline-none focus:pr-2" placeholder="Search..." autoComplete="off" />
            </div>
        </form>
    );
};

export default Search;