import { useState } from 'react';
import PyramidItems from './PyramidItems';

const PyramidWrapper = ({ climbs }) => {
  const [sentClimbs, setSentClimbs] = useState(
    climbs.filter((climb) => climb.sent)
  );

  let pyramidTop = climbs.reduce((acc, cur) =>
    acc.grade > cur.grade ? acc : cur
  );

  const generatePyramid = (base, top) => {
    let pyramidItems = [];
    for (let i = 1; i <= base; i++) {
      for (let j = 1; j <= i; j++) {
        pyramidItems.push(
          <PyramidItems
            key={i * base + j}
            row={i}
            grade={i === 1 ? top : top - i + 1}
          />
        );
      }
    }
    return pyramidItems;
  };

  return (
    <div id='pyramidWrapper' className='grid'>
      {generatePyramid(4, pyramidTop.grade)}
    </div>
  );
};

export default PyramidWrapper;
