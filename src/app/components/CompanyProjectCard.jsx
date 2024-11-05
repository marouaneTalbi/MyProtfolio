import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyProjectCard = ({ project }) => {

  const navigate = useNavigate();

  return (
    <div
    onClick={() => navigate('/projects')}
    className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 lg:w-1/3 lg:h-50 w-full  " >
      <div className="flex flex-col flex justify-between items-center p-4 h-full">
        <div className='flex justify-center items-center h-full'>
          <img src={`./projects/${project.icon}`} alt={project.name} className="  " style={{width:130}} />
        </div>
        <div className="p-2 ">
          <h5 className="lg:text-xl font-bold text-gray-800">{project.name}</h5>
          <p className="text-gray-600 ">{project.company}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyProjectCard;
