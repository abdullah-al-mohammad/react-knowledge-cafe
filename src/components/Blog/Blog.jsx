import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog}) => {
    const {title, cover,author,author_img,posted_date, reading_time,hashtags} = blog
    return (
        <div className='mb-20'>
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
                    <button className='ml-2 text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mt-5">{title}</h2>
            {
                hashtags.map(hash => <span key={blog.id}><a href="">#{hash}</a></span>)
            }
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;