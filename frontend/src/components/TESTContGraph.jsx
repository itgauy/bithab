import React from 'react'

const contributionsData = [
  { day: 1, count: 0 },
  { day: 2, count: 1 },
  { day: 3, count: 2 },
  { day: 4, count: 3 },
  { day: 5, count: 4 },
  { day: 6, count: 5 },
  { day: 1, count: 0 },
  { day: 2, count: 1 },
  { day: 3, count: 2 },
  { day: 4, count: 3 },
  { day: 5, count: 4 },
  { day: 6, count: 5 },
  { day: 1, count: 0 },
  { day: 2, count: 1 },
  { day: 3, count: 2 },
  { day: 4, count: 3 },
  { day: 5, count: 4 },
  { day: 6, count: 5 },
  { day: 1, count: 0 },
  { day: 2, count: 1 },
  { day: 3, count: 2 },
  { day: 4, count: 3 },
  { day: 5, count: 4 },
  { day: 6, count: 5 },
]

const getColor = (count) => {
  if (count === 0) return '#ebedf0'
  if (count <= 2) return '#c6e48b'
  if (count <= 5) return '#7bc96f'
  return '#239a3b'
}

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
  )
}

export default ContGraph