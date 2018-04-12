import styled from 'styled-components';
import posed from 'react-pose';

export const MenuButton = styled.button`
  margin: 10px;
`;

const MenuContainerPose = posed.div({
  open: {
    x: "0%",
    delayChildren: 300,
    staggerChildren: 50
  },
  closed: {
    delay: 500,
    staggerChildren: 50,
    x: "-100%"
  }
});

export const MenuContainer = styled(MenuContainerPose)`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  padding: 10px;
  background: #ccc;
`;

const MenuItemPose = posed.button({
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -20 },
});

export const MenuItem = styled(MenuItemPose)`
  width: 100%;
  height: 30px;
  border-radius: 6px;
  margin-bottom: 10px;
  opacity: 0;
`;
