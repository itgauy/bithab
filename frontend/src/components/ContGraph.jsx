import React from 'react';

// Sample data representing contributions for each day of the week
const contributionsData = [
  { day: 1, count: 0 },
  { day: 2, count: 1 },
  { day: 3, count: 2 },
  { day: 4, count: 3 },
  { day: 5, count: 5 },
  { day: 6, count: 2 },
  { day: 7, count: 4 },
  { day: 8, count: 4 },
  { day: 9, count: 0 },
  { day: 10, count: 1 },
  { day: 11, count: 1 },
  { day: 12, count: 1 },
  { day: 13, count: 1 },
  { day: 14, count: 1 },
  { day: 15, count: 1 },
  { day: 16, count: 1 },
  { day: 17, count: 1 },

];

const getColor = (count) => {
  if (count === 0) return '#ebedf0'; // No contributions
  if (count < 2) return '#c6e48b'; // Low contributions
  if (count < 5) return '#7bc96f'; // Medium contributions
  return '#239a3b'; // High contributions
};

const ContGraph = () => {
  return (
    <div className="container">
      {contributionsData.map((contribution, index) => (
        <div
          key={index}
          className="contribs"
          style={{ backgroundColor: getColor(contribution.count) }}
          title={`Contributions: ${contribution.count}`}
        />
      ))}
    </div>
  );
};

export default ContGraph;