import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, Lista } from './styles';

import ListItem from '../../components/Flatlist';
import AddItemArea from '../../components/AddItemArea';

import data from '../../data';

const Home = () => {
  const [items, setItems] = useState(data);

  const handleAddNewItem = (text) => {
    let newItems = [...items];
    newItems.push({
      id: uuidv4(),
      task: text,
      done: false,
      description: 'TAREFA CONCLUIDA',
    });
    setItems(newItems);
  };

  const toggleDone = (index) => {
    let newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  };

  return (
    <Container>
      <AddItemArea onAdd={handleAddNewItem} />
      <Lista
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ListItem Checkbox={() => toggleDone(index)} data={item} />
        )}
      />
    </Container>
  );
};

export default Home;
