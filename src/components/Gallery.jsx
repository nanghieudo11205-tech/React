import React from 'react'

function Gallery() {
  return (
    <div>
        <h1>Day la export default</h1>
    </div>
  );
}

export const Profile1=()=>{
    return (
        <>
        <h3>Book 1</h3>
        <img src = 'image/book1.png' width={120} height={120}/>
        </>
    );
}

export const Profile2=()=>{
    return (
        <>
        <h3>Book 2</h3>
        <img src='./image/book2.png' width={150} height={100}/>
        </>
    );
}
export default Gallery