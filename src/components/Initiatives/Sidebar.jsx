import react from 'react';
import LocationMap from "./LocationMap";
import Member from "./Member";
import Other from './Other';

const Sidebar = () => {
    return (
        <div className="w-full md:w-80 bg-gray-100 p-6 rounded-lg shadow-md space-y-6">
        <Member/>
        <LocationMap/>
        <Other/>
        </div>
    )
};
export default Sidebar;