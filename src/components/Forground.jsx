import React, { useRef } from 'react';
import Card from './Card';

const Forground = () => {
 
   const ref = useRef(null);

  const data = [
    {
      desc: "This is the Java file, Download the file.",
      filesize: ".5mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc: "This is the SQL file, Download the file.",
      filesize: ".8mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Cancel Now", tagColor: "blue"},
    },
    {
      desc: "This is the React file, Download the file.",
      filesize: ".6mb",
      close: false,
      tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green"},
    },
  ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-8 py-5 ml-2 flex-wrap'>
     {data.map((item, index) =>(
      <Card data={item} reference={ref}/>
     ))}
      
    </div>
  );
}

export default Forground;
