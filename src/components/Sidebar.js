import {useState} from 'react'
import more from '../images/more.svg'
import banner from '../images/bookmark.svg'
import bell from '../images/notif.svg'
import hash from '../images/hash.svg'
import home from '../images/home.svg'
import list from '../images/list.svg'
import mail from '../images/mail.svg'
import profile from '../images/profile.svg'
import logo from '../images/icon.svg'
import SideLink from './SideLink'
import UserBox from './UserBox'

const sideLinks = [
  {
    name: "Home",
    icon: <img src={home} alt="" className='w-7 h-7' />,
  },
  {
    name: "Explore",
    icon: <img src={hash} alt="" className='w-7 h-7' />,
  },
  {
    name: "Notifications",
    icon: <img src={bell} alt="" className='w-7 h-7' />,
  },
  {
    name: "Messages",
    icon: <img src={mail} alt="" className='w-7 h-7' />,
  },
  {
    name: "Bookmarks",
    icon: <img src={banner} alt="" className='w-7 h-7' />,
  },
  {
    name: "Lists",
    icon: <img src={list} alt="" className='w-7 h-7' />,
  },
  {
    name: "Profile",
    icon: <img src={profile} alt="" className='w-7 h-7' />,
  },
  {
    name: "More",
    icon: <img src={more} alt="" className='w-7 h-7' />,
  }
]


const Sidebar = () => {

  const [active, setActive] = useState("Home");
  const handleMenuITemClick = (name) => {
    setActive(name);
  };


  return (
    <div className="h-screen flex flex-col justify-between w-72 px-2 sticky top-0">
      <div>
        <div className='mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-ligth transform transition-colors duration-200'>
          <img src={logo} alt="TwitterLogo" className='w-9 h-9' />
        </div>
        <nav className='mb-4'>
          <ul>
            {sideLinks.map(({ name, icon }) => (<SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuITemClick}></SideLink>))}
          </ul>
        </nav>
        <button className='bg-first-base hover:bg-first-dark text-white rounded-full py-3 px-8 w-11/12  shadow-lg transform transition-colors duration-200'>Tweet</button>
      </div>
      <UserBox></UserBox>
    </div>
  )
}


export default Sidebar