import React from 'react';

function HOC(Component) {
    function NewComponent() {
        return (
         <>
         <Component/>
         </>
          );
    }
  return NewComponent
}

export default HOC;
