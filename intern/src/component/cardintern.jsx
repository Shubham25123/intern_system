import React, { useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';

        const statusColors = {
    'Onboarding': 'bg-yellow-100 text-yellow-800',
  'Completed': 'bg-green-100 text-green-800',
  'Pending Docs': 'bg-red-100 text-red-800',
};

            const Cardintern = ({ intern }) => {
            const [status, setStatus] = useState(intern.status);

                const handleFileClick = () => {
            const input = document.createElement('input');
    input.type = 'file';
         input.accept = '*';
    input.click();
  };

  return (
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 transition-transform hover:scale-[1.02]">
                           <div className="flex justify-between items-start">
            <div>
                         <h2 className="text-xl font-bold text-gray-800">{intern.name}</h2>
          <p className="text-sm text-gray-500">{intern.email}</p>
          <p className="text-sm text-gray-600">{intern.department}</p>
                </div>
                <div className="flex flex-col items-end">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColors[status]}`}>
            {status}
          </span>
                        <select
                    className="mt-2 text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none"
                        value={status}
                            onChange={(e) => setStatus(e.target.value)}
                                    >
                 <option>Onboarding</option>
                    <option>Pending Docs</option>
                    <option>Completed</option>
                    </select>
                        </div>
                             </div>

                <div className="flex flex-col gap-2 mt-2">
                     {['Resume', 'Government ID', 'Agreement', 'Joining Letter'].map((doc, index) => (
                <button
                    key={index}
            onClick={handleFileClick}
                           className="flex items-center justify-between border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 text-sm text-gray-700"
          >
            <span>Upload {doc}</span>
            <FaFileUpload className="text-gray-500" />
          </button>
                ))}
             </div>
             </div>
                 );
            };

                export default Cardintern;
