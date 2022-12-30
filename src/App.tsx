import React, { useState } from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <Modal show={showModal} title={'Title'} onClose={() => setShowModal(false)}>
        <div className="modal-body">
          content
        </div>
      </Modal>
      <button className='btn btn-primary' onClick={() => setShowModal(true)}>Modal Window</button>
    </div>
  );
}

export default App;
