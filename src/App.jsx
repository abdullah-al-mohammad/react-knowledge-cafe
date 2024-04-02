import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
const [bookmarks, setBookmarks] = useState([])
const [readingTime, setReadingTime] = useState(0)

const handleAddBookmarks = blog =>{
  const newBookmarkes = [...bookmarks, blog];
  setBookmarks(newBookmarkes)
}
const handleReadingTime = (id,time) =>{
   const newTime = readingTime + time;
  setReadingTime(newTime)
  
  const remainigBookMark = bookmarks.filter(bookmark => bookmark.id !==id)
  setBookmarks(remainigBookMark)
}
  return (
    <>
      <Header></Header>
      <div className='md: flex max-w-7xl mx-auto'>
      <Blogs handleAddBookmarks={handleAddBookmarks} handleReadingTime={handleReadingTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
