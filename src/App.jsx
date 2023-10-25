import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './reset.css'
import axios from 'axios'

function App() {
  return (
    <div className='profile-wrapper'>
      <div className='profile-img'>
        <img src="./cat.png" alt="" />
      </div>
      <div className='profile-text'>
        <h1>バボちゃん</h1>
        <small>YOU ARE バボだニャン</small>
        <p>
          バボちゃんは小さな体に、大きな緊張と好奇心を詰め込んでいます。初対面の人々に対しては、おとなしくて控えめ。人が近づくと、小刻みに耳をぴくぴくさせ、警戒心を見せます。
          <br />
          <br />
          しかし、お馴染みの友達や家族と一緒にいると、一変して愛らしい一面を見せます。バボちゃんはお腹を見せて撫でてほしいとおねだりし、おもちゃで遊ぶ姿は愉快そのもの。
        </p>
      </div>
    </div >
  )
}

export default App

