import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'Images',
  initialState: {
    value: [{url :"https://www.finalsitesupport.com/hc/article_attachments/360000652831/500x375.png" , width : 501, height :376 , alt :"a"},
    {url :"https://images.unsplash.com/photo-1502899845910-573a1d1c390d" , width : 500, height :333 , alt :"a"},
    {url :"https://images.unsplash.com/photo-1582711012124-a56cf82307a0" , width : 500, height :500 , alt :"a"},
    {url :"https://images.unsplash.com/photo-1451187580459-43490279c0fa" , width : 100, height :500 , alt :"a"},
    {url :"https://images.unsplash.com/photo-1507525428034-b723cf961d3e" , width : 500, height :500 , alt :"a"},
    {url :"https://images.unsplash.com/photo-1512621776951-a57141f2eefd" , width : 500, height :500 , alt :"a"},
    {url :"https://images.unsplash.com/photo-1563291074-2bf8677ac0e5" , width : 500, height :500 , alt :"a"},
    {url :"https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5" , width : 500, height :500 , alt :"a"},
    {url :"https://plus.unsplash.com/premium_photo-1673772788464-bc29de04ac5c" , width : 500, height :500 , alt :"a"}
  ,{url :"https://images.unsplash.com/photo-1626965640390-e15068539462" , width : 500, height :500 , alt :"a"},
  {url :"https://images.unsplash.com/photo-1615800001716-c53dd05bf4b8" , width : 500, height :500 , alt :"a"}],
  },
  reducers: {
    Modify: (state) => {
      
      
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { Modify } = counterSlice.actions

export default counterSlice.reducer