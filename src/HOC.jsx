import React from 'react';
import Header from './Header';

function HOC(Component) {
    function NewComponent() {
        return (
         <>
         <Header/>
         <Component/>
         </>
          );
    }
  return NewComponent
}

export default HOC;
