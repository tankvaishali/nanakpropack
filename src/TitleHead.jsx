import React from 'react';

function TitleHead(props) {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
      <h1 className='fw-bold'>
        <span className='text-success'>{props.ftitle}</span> <span> {props.stitle}</span>
      </h1>
    </div>
  );
}

export default TitleHead;
