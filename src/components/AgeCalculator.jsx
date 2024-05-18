// src/AgeCalculator.js
import React, { useState } from 'react';

const AgeCalculator = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = (day, month, year) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day); // Month is zero-indexed

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
      <div className='rounded-xl bg-white p-8'>
      <form onSubmit={handleSubmit} className="flex flex-auto gap-2" >
        <div className="flex flex-col">
          <label htmlFor="day" className="block text-gray-700">Day:</label>
          <input
            type="number"
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-xl w-full"
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
            className="mt-1 p-2 border border-gray-300 rounded-xl w-full"
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
            className="mt-1 p-2 border border-gray-300 rounded-xl w-full"
            required
            placeholder='YYY'
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>
      </form>
      <div className='relative'>
      <hr className='my-8 border-b-gray-600' />
        <button type="submit" onClick={handleSubmit} className=" bg-gray-950 text-white p-2 rounded-full active:bg-gray-700 absolute -top-5 right-0 ">
          Go
        </button>
      {age !== null && (
        <div className=" flex flex-col gap-x-4 text-xl">
          <div className='flex items-center gap-2'>
            <span className=' text-blue-500 gap-x-3 text-3xl'>{age.years}</span> Year
          </div>
          <div className='flex items-center gap-2'>
            <span className=' text-blue-500 text-3xl'>{age.months}</span> Months
          </div>
          <div className='flex items-center gap-2'>
            <span className=' text-blue-500 gap-x-3 text-3xl'>{age.days}</span> Days
          </div>
        </div>
      )}
      </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
