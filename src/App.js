import React from 'react';
import Header from './components/Header';
import List from './components/List';
import data from './components/data';

export default function App() {
  const journalList = data.map((item) => {
    return (
      <List
        key="item.id"
        item={item}
      />
    );
  });

  return (
    <div className="container">
      <Header />
      <div className="journal-container">{journalList}</div>
    </div>
  );
}
