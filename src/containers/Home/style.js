import posed from 'react-pose';
import styled from 'styled-components';

export const DraggableCircle = posed.circle({
  draggable: true
});

export const Fade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export const Item = styled(Fade)`
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #ccc;
  color: #555;
`;

export const Button = styled.button`
  margin: 10px;
`;
