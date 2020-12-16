import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Container } from './styles';

import ListItemSwipe from '../../components/ListItemSwipe';
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

  const handleDeleteItem = (index) => {
    let newItems = [...items];
    newItems = newItems.filter((item, key) => key !== index);
    setItems(newItems);
  };

  return (
    <Container>
      <AddItemArea onAdd={handleAddNewItem} />
      <SwipeListView
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ListItem Checkbox={() => toggleDone(index)} data={item} />
        )}
        renderHiddenItem={({ item, index }) => (
          <ListItemSwipe onDelete={() => handleDeleteItem(index)} />
        )}
        leftOpenValue={70}
        disableLeftSwipe
      />
    </Container>
  );
};

export default Home;
