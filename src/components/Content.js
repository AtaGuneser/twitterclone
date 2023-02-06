import Divider from "./Divider"
import Tweetbox from "./Tweetbox"
import { useEffect, useState } from 'react'
import db from '../firebase'
import FeedList from "./FeedList"
const Content = () => {
  const [tweets, setTweets] = useState([])
  useEffect(() => {
    db.collection("feed")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => setTweets(snapshot.docs.map((doc) => doc.data())))
  }, [])

  return (
    <main className=" flex-1 flex flex-col border-r border-l border-gray-extralight">
      <header className=" sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extralight bg-white" >
        <span className="font-bold text-xl text-gray-900">
          Home
        </span>

      </header>
      <div className="flex px-4 py-3 space-x-4 ">
        <img src="https://pbs.twimg.com/profile_images/1428284845491462148/GTk8XIkm_400x400.jpg" alt="Profile" className='w-11 h-11 rounded-full' />
        <Tweetbox></Tweetbox>
      </div>
      <Divider></Divider>

      {/* feeds */}

      <FeedList tweets={tweets}></FeedList>
    </main>
  )
}

export default Content