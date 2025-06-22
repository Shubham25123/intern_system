import React, { useState } from 'react';
import Cardintern from './component/cardintern';

      const App = () => {
       const [interns, setInterns] = useState([]);
      const [formData, setFormData] = useState({
    name: '',
         email: '',
        department: '',
        status: 'Onboarding'
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
               }));
          };

            const handleAddIntern = () => {
              if (!formData.name || !formData.email || !formData.department) {
              alert("Please fill all fields!");
          return;
                }

        const newIntern = {
      id: Date.now(),
      ...formData
    };

    setInterns(prev => [newIntern, ...prev]);

    setFormData({
      name: '',
      email: '',
      department: '',
      status: 'Onboarding'
    });
  };

            return (
          <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-3xl font-bold text-center mb-6">🧑‍💻 Intern Dashboard</h1>

      
            <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xl mx-auto mb-10">
              <h2 className="text-xl font-semibold mb-4">Add Intern</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
                   name="name"
                placeholder="Name"
               value={formData.name}
               onChange={handleChange}
                   className="border rounded px-4 py-2 focus:outline-none"
                 />
          <input
            type="email"
               name="email"
                placeholder="Email"
              value={formData.email}
                onChange={handleChange}
             className="border rounded px-4 py-2 focus:outline-none"
          />
          <input
            type="text"
                 name="department"
                placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="border rounded px-4 py-2 focus:outline-none"
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border rounded px-4 py-2 focus:outline-none"
          >
            <option>Onboarding</option>
            <option>Pending Docs</option>
            <option>Completed</option>
          </select>
        </div>
        <button
          onClick={handleAddIntern}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Intern
        </button>
      </div>

     
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {interns.map((intern) => (
          <Cardintern key={intern.id} intern={intern} />
                 ))}
               </div>
              </div>
             );
  };

          export default App;
