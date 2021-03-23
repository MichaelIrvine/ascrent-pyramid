import PyramidItems from './PyramidItems';

const PyramidWrapper = ({ climbs }) => {
  // **  pyramid top is highest grade
  let pyramidTop = climbs.reduce((acc, cur) =>
    acc.grade > cur.grade ? acc : cur
  );

  let sentClimbs = climbs.filter((climb) => climb.sent);

  const generatePyramid = (base, top, sentClimbs) => {
    let pyramidItems = [];
    for (let i = 1; i <= base; i++) {
      for (let j = 1; j <= i; j++) {
        pyramidItems.push(
          <PyramidItems
            key={i * base + j}
            data-row={i}
            row={i}
            grade={i === 1 ? top : top - i + 1}
            sentClimbs={sentClimbs}
          />
        );
      }
    }
    return pyramidItems;
  };

  return (
    <div id='pyramidWrapper' className='grid'>
      {generatePyramid(5, pyramidTop.grade, sentClimbs)}
    </div>
  );
};

export default PyramidWrapper;
