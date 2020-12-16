import React from 'react';
import { Image } from 'react-native';
import styled, { css } from 'styled-components/native';

import IconTrash from '../assets/trash1.png';

const ListItemSwipe = styled.TouchableHighlight`
  width: 100%;
  height: 50px;
  border: 2px solid black;
  border-radius: 10px;
  padding-left: 10px;
  background-color: #897de0;
`;

export default ({ onDelete }) => {
  return (
    <ListItemSwipe onPress={onDelete} underlayColor="#e80c42">
      <Image source={IconTrash} />
    </ListItemSwipe>
  );
};
