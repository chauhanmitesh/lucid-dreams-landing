import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Background from './components/Background';
import Form from './components/Form';

function App() {
  return (
    <div className="relative z-20 font-body">
      <Background />      
      <div className="relative z-30">
        <Header />
        <Content />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;