import React from 'react'
import comment from '../images/comment.svg';
import rt from '../images/rt.svg';
import like from '../images/like.svg';
import share from '../images/share.svg';

const FeedItem = ({ avatar, content, displayName, image, timestamp, username }) => {
    return (
        <article className='flex space-x-3 border-b border-gray-extralight px-4 py-3 cursor-pointer'>
            <img src={avatar} alt="Profile" className='w-11 h-11 rounded-full' />
            <div className='flex-1'>
                <div className='flex items-center text-sm'>
                    <h4 className='font-bold'>{displayName}</h4>
                    <span className='ml-2 text-gray-dark'>{username}</span>
                    <div className='mx-2 bg-gray-dark h-1 w-1 border rounded-full'></div>
                    <span className='text-gray-dark'>
                        {timestamp?.toDate().toLocaleTimeString("tr-TR")}
                    </span>
                </div>
                <p className='mt-2 text-gray-900 text-sm'>{content}</p>
                {image && (
                    <img src={image} alt="" className='my-2 rounded-xl max-h-96' />
                )}
                <ul className='-ml-1 mt-3 flex justify-between max-w-md '>
                    <li className='flex items-center space-x-3 text-gray-dark text-sm group'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-first-light'>
                            <img src={comment} alt="" className='w-5 h-5 group-hover:text-first-base' />
                        </div>
                        <span className='group-hover:text-first-base'>7</span>
                    </li>
                    <li className='flex items-center space-x-3 text-gray-dark text-sm group'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200'>
                            <img src={rt} alt="" className='w-5 h-5 group-hover:text-green-400' />
                        </div>
                        <span className='group-hover:text-green-400'>2</span>
                    </li>
                    <li className='flex items-center space-x-3 text-gray-dark text-sm group'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-200'>
                            <img src={like} alt="" className='w-5 h-5 group-hover:text-pink-400' />
                        </div>
                        <span className='group-hover:text-pink-400'>33</span>
                    </li>
                    <li className='flex items-center space-x-3 text-gray-dark text-sm group'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-first-light'>
                            <img src={share} alt="" className='w-5 h-5 group-hover:text-first-base' />
                        </div>
                       
                    </li>

                </ul>
            </div>
        </article>
    )
}

export default FeedItem