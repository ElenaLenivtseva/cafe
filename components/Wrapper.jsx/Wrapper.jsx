
import React from "react";
// import styles from './Wrapper.module.scss'

function Wrapper({className, children}) {
  return (
    <div className={`wrapper ${className} || ''`}>
    {children}
    </div>
  );
}

export default Wrapper;