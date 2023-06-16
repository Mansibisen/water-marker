import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Modify } from '../features/media/counterSlice'
import ImageItem from "./ImageItem";




export default function ImageList() {
    
    const itemData = useSelector((state) => state.Images.value)
    return (
        <ul className='gallery' >
             
             {itemData.map((item) => (
                
                <ImageItem image={item}>
                
                </ImageItem> 

                
            ))}
        </ul>
    );
  
}
