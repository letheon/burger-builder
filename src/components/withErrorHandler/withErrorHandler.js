import React, { useEffect, useState } from 'react';
import Modal from '../UI/Modal/Modal';

const withErrorHandler = (WrapperComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    function modalClosed() {
      setError(null);
    }

    return (
      <>
        <Modal show={error !== null} modalClosed={modalClosed}>
          <h3>Something went wrong...</h3>
          <p>{error && error.message}</p>
        </Modal>
        <WrapperComponent {...props} setError={setError} />
      </>
    );
  };
};

export default withErrorHandler;
