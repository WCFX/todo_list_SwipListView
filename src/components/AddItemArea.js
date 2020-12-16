import React, { useState } from 'react';
import styled, { css } from 'styled-components/native';

const AddItemArea = styled.View`
  flex-direction: row;
  background-color: #ccc;
`;

const Input = styled.TextInput`
  border: 2px solid #ccc;
  background-color: #ccc;
  width: 80%;
  padding: 10px 20px;
  font-size: 18px;
`;

const ButtonAdd = styled.TouchableOpacity`
  border-radius: 12px;
  width: 20%;
  background-color: #897de0;
  justify-content: center;
  align-items: center;
`;
const ButtonAddText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #eee;
`;

export default ({ onAdd }) => {
  const [item, setItem] = useState('');

  function handleAddNewItem() {
    if (item.trim() !== '') {
      onAdd(item.trim());
      setItem('');
    }
  }

  return (
    <AddItemArea>
      <Input
        placeholder="Digite aqui"
        value={item}
        onChangeText={(t) => setItem(t)}
        onSubmitEditing={handleAddNewItem}
        returnKeyType="send"
      />
      <ButtonAdd onPress={handleAddNewItem}>
        <ButtonAddText>Adicionar</ButtonAddText>
      </ButtonAdd>
    </AddItemArea>
  );
};
