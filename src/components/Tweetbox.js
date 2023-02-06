import React, { useState } from 'react'
import image from '../images/gallery.svg'
import gif from '../images/gif.svg'
import survey from '../images/survey.svg'
import smile from '../images/smile.svg'
import calendar from '../images/calendar.svg'
import db from '../firebase.js'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/database";
import firebase from 'firebase/compat/app';

const Tweetbox = () => {
    const [content, setContent] = useState("");
    const sendTweet = () => {
        if (content !== "") {
            db.collection("feed").add({
                displayName: "Ata Güneşer",
                username: "@Atagnsr",
                content,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                image: "https://picsum.photos/500/400",
                avatar:"https://pbs.twimg.com/profile_images/1428284845491462148/GTk8XIkm_400x400.jpg",
            });
            setContent("");
        }
    }

    return (
        <div className='flex flex-col flex-1 mt-2 px-2'>
            <textarea className='w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent'
                placeholder="What's happening?" onChange={(e) => setContent(e.target.value)} value={content}></textarea>
            <div className='flex items-center justify-between'>
                <div className='flex -ml-3'>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
                        <img src={image} alt="" className='w-6 h-6 text-first-base' />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
                        <img src={gif} alt="" className='w-6 h-6 text-first-base' />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
                        <img src={survey} alt="" className='w-6 h-6 text-first-base' />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
                        <img src={smile} alt="" className='w-6 h-6 text-first-base' />
                    </div>
                    <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'>
                        <img src={calendar} alt="" className='w-6 h-6 text-first-base' />
                    </div>
                </div>
                <button className='bg-first-base text-white rounded-full px-4 py-2 font-medium' onClick={sendTweet}>Tweet</button>
            </div>

        </div>
    )
}

export default Tweetbox