import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data, reference}) => {
  return (
     <motion.div 
     drag 
     dragConstraints={reference} 
     whileDrag={{scale:1.1}} 
     dragElastic={0.1} 
     dragTransition={{bounceStiffness: 600, bounceDamping: 30}}
     className='relative w-44 h-56 flex-shrink-0 bg-zinc-900/90 text-white px-5 py-8 
     overflow-hidden rounded-[40px]'>
        <FaRegFileAlt />
        <p className='text-sm font-semibold leading-tight mt-5'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0 '>
            <div className='flex items-center justify-between px-6  py-3 mb-2'>
                <h6>{data.filesize}</h6>
                <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose/>:<MdOutlineFileDownload size='.8em' color='#fff'/>}
                </span>
            </div>
            {data.tag.isOpen &&(
                <div className={`tag w-full py-2 ${data.tag.tagColor === "blue" ? "bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
                    <h4 className='text-sm font-semibold'>{data.tag.tagTitle}</h4>
                </div>
                ) 
            }
            
        </div>
     </motion.div> 
    
  );
}

export default Card;
