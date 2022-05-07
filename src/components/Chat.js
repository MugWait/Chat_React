import React, { useEffect, useState } from "react";
import BoxMessage from "./BoxMessage";
import SendBox from "./SendBox";
import "./style.css";
import Img_2 from './assets/pexels-ali-pazani-3673314.jpg'
import Img_3 from './assets/pexels-cristyan-bohn-2257777.jpg'
import Img_4 from './assets/pexels-david-radomysler-6054329.jpg'
import Search from './assets/search_black_24dp.svg'
import Call from './assets/call_black_24dp.svg'
import Share from './assets/share_black_24dp.svg'
import More from './assets/more_horiz_black_24dp.svg'



function Chat() {

  return (
    <>
      <section>
        <div className="side-bar">
          <ul>
            <li>
              <img src={Img_2} alt="" />
              <div>
                <h4>Sam Sammon</h4>
                <p>@sad</p>
              </div>
            </li>
          </ul>
          <form action="">
            <input type="text" placeholder="Search" />
            <img className="icon-search" src={Search} alt="" />
          </form>
          <ul className="user-list">
            <li className="active">
              <img src={Img_3} alt="" />
              <div>
                <h4>Amit Kc</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </li>
            <li>
              <img src={Img_3} alt="" />
              <div>
                <h4>Amit Kc</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </li>
            <li>
              <img src={Img_3} alt="" />
              <div>
                <h4>Amit Kc</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </li>
            <li>
              <img src={Img_3} alt="" />
              <div>
                <h4>Amit Kc</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </li>
            <li>
              <img src={Img_3} alt="" />
              <div>
                <h4>Amit Kc</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </li>
            <li>
              <img src={Img_3} alt="" />
              <div>
                <h4>Amit Kc</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </li>
            <li>
              <img src={Img_3} alt="" />
              <div>
                <h4>Amit Kc</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </li>
            <li>
              <img src={Img_3} alt="" />
              <div>
                <h4>Amit Kc</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </li>
            <li>
              <img src={Img_3} alt="" />
              <div>
                <h4>Amit Kc</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </li>
          </ul>
        </div>
        <main>
          <header>
            <div className="top">
              <img src={Img_4} alt="" />
              <h4>Sophia Hezifer</h4>
              <img className="icon" src={Call} alt="" />
              <img className="icon" src={Share} alt="" />
              <img className="icon" src={More} alt="" />
            </div>
            <ul>
              <li>
                <a className="active" href="#">
                  Conversation
                </a>
              </li>
              <li>
                <a href="#">files</a>
              </li>
            </ul>
          </header>
          <div className="body">
            <BoxMessage />
          </div>
          <div className="sendbox">
        <SendBox/>
        </div>
        </main>
      </section>
    </>
  );
}

export default Chat;
