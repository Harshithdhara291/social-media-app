import React from "react"
import Header from "../Header"
import { useState } from "react";
import feeds from '../../posts.json'
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"

import './index.css'


export default function CreatePost() {
    const history = useHistory()
    const { currentUser } = useAuth()
    const userName = currentUser.email.split('@')[0]
    console.log(userName)
    console.log(feeds)
    const myPosts = feeds.filter(each=>(
        each.userName===userName
    ))
    
    console.log(myPosts)
    const [post,setPost] = useState({"id":crypto.randomUUID(),"userImg":"https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg","userName":userName,"postImg":"","caption":""})


    function submit(e){
        feeds.unshift(post)
        console.log(feeds)
        alert("New Post Created")
        history.push("/")
        e.preventDefault()
    }

    function handle(e){
        const newPost = {...post}
        newPost[e.target.id] = e.target.value
        console.log(newPost)
        setPost(newPost)
    }
  
  return (
    <div className="create-container">
     <div><Header/></div>
      <div className="main-container-profile">
          <h1 className="my-posts-head">Create Post</h1>
          <form className='form-container' onSubmit={(e)=>submit(e)}>
                <label className='label' htmlFor='postImg'>Image Url</label>
                <input onChange={(e)=>handle(e)} type='text' className="input"  id='postImg' placeholder='Enter Image Url' required/>
                <label className='label' htmlFor='caption'>Caption</label>
                <textarea onChange={(e)=>handle(e)} type='text' className="input-2"  id='caption' placeholder='Enter caption' rows={7} cols={30}></textarea>
                <button type="submit" className='btn btn-primary'>Create Post</button>
            </form>
      </div>
      </div>
  )
}

