import React, { useEffect, useState } from 'react';
import classes from './LoadBar.module.css';

const LoadBar = (props) => {
  const [loadClass, setLoadClass] = useState(null);

  useEffect(() => {
    if (props.progress === '100%') {
      setTimeout(() => setLoadClass(classes.Finished), 100);
    }
  }, [props.progress]);

  return (
    <div
      style={{ width: props.progress }}
      className={[classes.LoadBar, loadClass].join(' ')}
    ></div>
  );
};

export default LoadBar;
