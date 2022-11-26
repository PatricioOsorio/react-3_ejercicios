import React from 'react';
import CrudApp from './components/CrudApp';
import Header from './components/Header';
import Footer from './components/Footer';
import CrudApi from './components/CrudApi';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <main className="flex-shrink-0">
        <div className="container">
          <div className="row">
            <CrudApi />
          </div>

          <hr />

          <div className="row">
            <CrudApp />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
