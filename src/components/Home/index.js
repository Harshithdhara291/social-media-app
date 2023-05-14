import React from "react"
import Header from "../Header"
import './index.css'
import feeds from '../../posts.json'
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineModeComment } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";
import { BiBookmark } from "react-icons/bi";

export default function Home() {
    console.log(feeds)
  return (
      <div className="main-container">
          <div><Header/></div>
          <ul className="unordered-list">
            {feeds.map(item=>(
                <li className="feed-item" key={item.id}>
                    <div className="user-img-name">
                    <img src={item.userImg} alt="prfl" className="user-img"/>
                    <h1 className="user-name">{item.userName}</h1>
                    </div>
                    <img src={item.postImg} alt='post' className="post-img"/>
                    <div className="icons-cont">
                        <AiOutlineHeart className="icon"/>
                        <MdOutlineModeComment className="icon" />
                        <TbBrandTelegram className="icon" />
                        <BiBookmark className="icon" />
                    </div>
                    
                    <p className="user-caption"><span className="user-name2">{item.userName} </span> {item.caption}</p>
                    
                </li>
            ))}
          </ul>
      </div>
  )
}
