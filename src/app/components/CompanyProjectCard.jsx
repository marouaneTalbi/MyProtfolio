import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyProjectCard = ({ project }) => {

  const navigate = useNavigate();

  return (
    <div
    onClick={() => navigate('/projects')}
    className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 w-1/2   overflow-y-auto" >
      <div className="flex flex-col flex justify-between items-center p-4 h-full">
        <div className='flex justify-center items-center h-full'>
          <img src={`./projects/${project.icon}`} alt={project.name} className="  " style={{width:130}} />
        </div>
        <div className="p-2 ">
          <h5 className="text-xl font-bold text-gray-800">{project.name}</h5>
          <p className="text-gray-600 ">{project.company}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyProjectCard;
