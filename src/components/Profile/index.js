import React from "react"
import Header from "../Header"
import { useState } from "react";
import { storage } from "../../firebase";
import feeds from '../../posts.json'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuth } from "../../contexts/AuthContext"
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineModeComment } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";
import { BiBookmark } from "react-icons/bi";
import './index.css'


export default function Profile() {
    const { currentUser } = useAuth()
    const userName = currentUser.email.split('@')[0]
    const [image, setImage] = useState(null);
    const myPosts = feeds.filter(each=>(
        each.userName===userName
    ))
    const [url, setUrl] = useState("https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
     <div><Header/></div>
      <div className="main-container-profile">
          <h1 className="my-posts-head">My Profile</h1>
          <div className="profile-details">
            <div className="profile-pic">
                <img src={url} style={{ width: '150px', height: '150px' }} alt='pfl' className="profile-image"/>
                <input type="file" onChange={handleImageChange} />
                <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </div> 
           <div>
           <h1 style={{fontSize:'1.5rem',marginBottom:"2rem"}} className="my-name">{userName.toUpperCase()}</h1>
           <p><span style={{color:"black",fontWeight:"600"}}>11</span> posts   <span style={{color:"black",fontWeight:"600"}}>414</span> followers   <span style={{color:"black",fontWeight:"600"}}>371</span> following</p>
           </div>
          </div>
        <div>
        <h1 className="my-posts-head">My Posts</h1>
        <ul className="unordered-list-myprofile">
            {myPosts.map(item=>(
                <li className="feed-item-myprofile" key={item.id}>
                    <div className="user-img-name-myprofile">
                    <img src={item.userImg} alt="prfl" className="user-img-myprofile"/>
                    <h1 className="user-name-myprofile">{item.userName}</h1>
                    </div>
                    <img src={item.postImg} alt='post' className="post-img-myprofile"/>
                    <div className="icons-cont-myprofile">
                        <AiOutlineHeart className="icon-myprofile"/>
                        <MdOutlineModeComment className="icon-myprofile" />
                        <TbBrandTelegram className="icon-myprofile" />
                        <BiBookmark className="icon-myprofile" />
                    </div>
                    
                    <p className="user-caption"><span className="user-name2-myprofile">{item.userName} </span> {item.caption}</p>
                    
                </li>
            ))}
          </ul>
        </div>
      </div>
      </>
  )
}

