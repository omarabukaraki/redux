import React from 'react'
import { Link, useRoutes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { PUBLISH } from '../redux/type/postType';

const Home = () => {
    const dispatch = useDispatch();

    function publishPost(imageL, textL) {
        dispatch({ type: PUBLISH, data: { 'id': 1, image: imageL, text: textL } })
    }

    return (
        <div>
            <div style={{ width: '10px', height: '20px' }}></div>
            <Link style={{ margin: '175px' }} to={'/postPage'}>Go To Post Page</Link>
            <div style={{ width: '10px', height: '20px' }}></div>
            <div style={{ backgroundColor: 'Highlight', width: '450px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', borderRadius: '10px' }}>
                <img style={{ borderRadius: '10px' }} src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' width={'400px'} />
                <h1 style={{ color: 'linen' }}>Omar abu karaki</h1>
            </div>
            <Link to={'/postPage'}>
                <button onClick={() => {
                    publishPost('https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg', 'omar abu karaki')
                }}>Publish post</button>
            </Link>
        </div>
    )
}

export default Home
