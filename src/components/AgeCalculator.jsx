// src/AgeCalculator.js
import React, { useState } from 'react';

const AgeCalculator = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = (day, month, year) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day); 

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    
    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAge(calculateAge(day, month, year));
  };

  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center min-h-screen font-semibold">
        <h1 className='text-gray-800 font-extrabold text-3xl shadow-text-gray-600 '>input</h1><span className='text-blue-500 font-extrabold mb-5 text-4xl shadow-text-gray-600 '>BIRTH DATE👇</span>
      <div className='bg-white p-8 shadow-xl rounded-br-full'>
      <form onSubmit={handleSubmit} className="flex flex-auto gap-2 bg-white p-0 " >
        <div className="flex flex-col">
          <label htmlFor="day" className="block text-gray-700">Day:</label>
          <input
            type="number"
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-xl w-full"
            required
            placeholder='DD'
            min="1"
            max="31"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="month" className="block text-gray-700">Month:</label>
          <input
            type="number"
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-xl w-full"
            required
            placeholder='MM'
            min="1"
            max="12"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="year" className="block text-gray-700">Year:</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-xl w-full"
            required
            placeholder='YYY'
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>
      </form>
      <div className='my-9 relative'>
      <hr className='flex items-start mr-11 border-b-gray-600 ' />
        <button type="submit" onClick={handleSubmit} className="hover:rounded-full bg-gray-900 text-white p-2 rounded-xl active:bg-blue-500 absolute -top-5 right-12 shadow-8xl">
          Go
        </button>
      {age !== null && (
        <div className=" flex flex-col gap-y-1 items-start text-4xl my-4">
          <div className='flex items-center gap-2'>
            <span className='mr-1 text-blue-500 gap-x-3 text-4xl'>{age.years}</span><span className='text-gray-700'>Years</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='mr-1 text-blue-500 text-4xl'>{age.months}</span><span className='text-gray-700'>Months</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='mr-1 text-blue-500 gap-x-3 text-4xl'>{age.days}</span><span className='text-gray-700'>Days</span>
          </div>
        </div>
      )}
      </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
