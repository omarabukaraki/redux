import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE } from '../redux/type/postType';

const PostPage = () => {
    const data = localStorage.getItem('posts');
    const statePost = useSelector(state=>state.redPost);
    const dispatch = useDispatch();
    const [loData , setLoData] = useState();

    useEffect(()=>{
       let localData = data === null ? [] : JSON.parse(data);
      setLoData(localData);
    },[statePost.isPublish,statePost.isDelete]);
   
     
  return (
    <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center'}}>
        {loData?.map((post,index)=>{
            return <button onClick={()=>{
                dispatch({type:DELETE})
            }} key={index} style={{backgroundColor:'Highlight',width:'450px',display:'flex',flexDirection:'column',alignItems:'center',padding:'10px',borderRadius:'10px',margin:'20px'}}>
            <img style={{borderRadius:'10px'}} src={post.image} width={'400px'}/>
            <h1 style={{color:'linen'}}>{post.text}</h1>
         </button>
        })}
    </div>
  )
}

export default PostPage
