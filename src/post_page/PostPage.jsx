import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const PostPage = () => {
    const data = localStorage.getItem('posts');
    const statePost = useSelector(state=>state.redPost);

    const [loData , setLoData] = useState();

    useEffect(()=>{
       let localData = data === null ? [] : JSON.parse(data);
      setLoData(localData);
    },[statePost.isPublish]);
   
     
  return (
    <div>
        {loData?.map((post,index)=>{
            return <div key={index} style={{backgroundColor:'Highlight',width:'450px',display:'flex',flexDirection:'column',alignItems:'center',padding:'10px',borderRadius:'10px',margin:'20px'}}>
            <img style={{borderRadius:'10px'}} src={post.image} width={'400px'}/>
            <h1 style={{color:'linen'}}>{post.text}</h1>
         </div>
        })}
    </div>
  )
}

export default PostPage
