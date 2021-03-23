import styled from 'styled-components';

const PyramidItemStyles = styled.div`
  border: 1px solid black;
  grid-row: ${(props) => props.gridRow};
`;

const PyramidItem = ({ row, grade, sentClimbs }) => {
  const matchClimbsToItem = (grade, sentclimbs) => {
    console.log(sentClimbs);
  };

  return (
    <PyramidItemStyles
      gridRow={row}
      className='grid-item'
      itemGrade={grade}
      sentClimbs={sentClimbs}
    >
      <h3>v{grade}: </h3>
      <div className='climbInfo'>
        {sentClimbs
          .filter((climb) => climb.grade === grade)
          .map((climb) => climb.name)}
        {/* {matchClimbsToItem(grade, sentClimbs)} */}
      </div>
      {/* 
      1. Pass down which row it should be in - *** DONE ***
      2. Figure out which grade each item should be - based on top grade - *** DONE ***
      3. Figure out if a sent climb can go in the corresponding Item
      */}
    </PyramidItemStyles>
  );
};

export default PyramidItem;
