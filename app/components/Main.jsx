import React, { PropTypes } from 'react';

const Main = props =>
   (
     <div className="container">
       <div className="row">
         <div className="column small-centered medium-6 large-4">
           {props.children}
         </div>
       </div>

     </div>
  );

export default Main;

Main.propTypes = {
  children: PropTypes.node,
};
