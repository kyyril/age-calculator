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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Age Calculator</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="day" className="block text-gray-700">Day:</label>
          <input
            type="number"
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
            required
            min="1"
            max="31"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="month" className="block text-gray-700">Month:</label>
          <input
            type="number"
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
            required
            min="1"
            max="12"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-700">Year:</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded w-full"
            required
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Calculate Age
        </button>
      </form>
      {age !== null && (
        <div className="mt-6 text-xl">
          <p>Your age is: {age.years} years, {age.months} months, and {age.days} days</p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
