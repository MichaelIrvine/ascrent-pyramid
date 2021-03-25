import { useEffect } from 'react';
import styled from 'styled-components';

const PyramidItemStyles = styled.div`
  border: 1px solid black;
  grid-row: ${(props) => props.gridRow};
  margin: 1px;
`;

const PyramidItem = ({ row, grade }) => {
  return (
    <PyramidItemStyles gridRow={row} className='grid-item' itemGrade={grade}>
      <h3>v{grade}: </h3>
      <div className='climbInfo'></div>
    </PyramidItemStyles>
  );
};

export default PyramidItem;
