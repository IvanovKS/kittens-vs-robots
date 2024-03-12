import React from 'react';
import { useState } from 'react'
import Welcome from './components/Welcome';
import NewGame from './components/NewGame';
import Rules from './components/Rules';
import Winners from './components/Winners';

export default function App() {
  const [page, setPage] = useState('');

  return (
    <>
      {page === '' && (
        <Welcome active={page} btnClicked={(current) => setPage(current)}/>
      )}
      {page === 'Новая игра' && (
        <NewGame/>
      )}
      {page === 'Правила' && (
        <Rules/>
      )}
      {page === 'Зал славы' && (
        <Winners/>
      )}
    </>
  );
}

