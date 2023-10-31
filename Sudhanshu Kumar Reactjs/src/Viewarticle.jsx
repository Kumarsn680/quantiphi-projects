import React from 'react'

const Viewarticle = ({title,text,author}) => {
  return (
    <div className='w-[300px] h-[300px]'>
      <h1>{title}</h1>
      <h1>{text}</h1>
      <h1>{author}</h1>
    </div>
  );
}

export default Viewarticle