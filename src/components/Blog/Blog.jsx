import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog,handleAddBookmarks,handleReadingTime}) => {
    const {id, title, cover,author,author_img,posted_date, reading_time,hashtags} = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img src={author_img} alt="" />
                    <div className='ml-6'>
                        <h5>{author}</h5>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddBookmarks(blog)} className='ml-2 text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mt-5">{title}</h2>
            <p>
            {
                hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
            }
            </p>
            <button 
            onClick={() => handleReadingTime(id, reading_time)}
            className='text-purple-800 font-bold underline'
            >Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func,
    handleReadingTime: PropTypes.number
}

export default Blog;