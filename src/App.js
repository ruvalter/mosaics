import React from 'react';
import './App.scss';
import Board from './containers/board/board';
import Layout from './components/layout/layout';

function App() {
  return (
    <Layout>
      <Board/>
    </Layout>
  );
}

export default App;
