import React, { useState } from 'react';
import Alert from './components/Alert/Alert';
import Modal from './components/Modal/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert , setShowAlert] = useState(false);
  return (
    <div className="App">

      <Modal show={showModal} title={'Title'} onClose={() => setShowModal(false)}>
        <div className="modal-body">
          content
        </div>
      </Modal>

      <button className='btn btn-primary' onClick={() => setShowModal(true)}>Modal Window</button>

      <Alert type={'warning'} onDismiss={() => setShowAlert(false)} showAlert={showAlert}>
        This is a new alert
      </Alert>

      <button className='btn btn-primary' onClick={() => setShowAlert(true)}>Alert</button>
    </div>
  );
}

export default App;
