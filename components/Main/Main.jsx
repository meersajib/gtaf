import React from 'react';
import Search from '../Form/Search';
import Table from '../Table/Table';

const Main = () => {
    return (
        <div>
            <div className="border-gtaf-border border-gtaf-border-b pt-4 pb-4">
                <h1 className="text-xl font-bold leading-8 pl-6">Inventory</h1>
            </div>
            <div className="m-2 sm:m-5 bg-white rounded shadow-gtaf-btn-shadow">
                <Search className='p-6 pl-4 pr-4'  />
                <Table />
            </div>
        </div>
    );
};

export default Main;