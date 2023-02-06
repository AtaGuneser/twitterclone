import React from 'react'
import search from '../images/search.svg'
import { Timeline } from 'react-twitter-widgets'

const Widgets = () => {
  return (
    <aside className="w-80">
      <div className='flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-first-base'>
        <img src={search} alt="" className='w-5 h-5' />
        <input type="text" placeholder='Search Twitter' className='placeholder-gray-dark focus:outline-none bg-transparent w-full text-sm' />
      </div>
      <div className='mt-5'>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'reactjs'
          }}
          options={{
            height: '1000'
          }}
        />
      </div>
    </aside>
  )
}

export default Widgets