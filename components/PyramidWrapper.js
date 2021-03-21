const PyramidWrapper = ({ climbs }) => {
  // **  pyramid top is highest grade
  let pyramidTop = climbs.reduce((acc, cur) =>
    acc.grade > cur.grade ? acc : cur
  );

  return <div className='grid'></div>;
};

export default PyramidWrapper;
