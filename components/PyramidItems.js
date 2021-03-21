import PyramidWrapper from './PyramidWrapper';

const Pyramid = ({ climbs }) => {
  // **  pyramid top is highest grade
  let pyramidTop = climbs.reduce((acc, cur) =>
    acc.grade > cur.grade ? acc : cur
  );

  const generatePyramid = (base) => {
    let rows = base;

    while (rows < base) {
      let previousRow = rows;
      let nextRow = [];
    }

    return pyrChildren;
  };

  return (
    <div>
      <h1>Pyramid - Top Grade v{pyramidTop.grade}</h1>
      <PyramidWrapper>{generatePyramid(4)}</PyramidWrapper>
    </div>
  );
};

export default Pyramid;
