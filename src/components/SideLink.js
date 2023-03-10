import React from 'react'

const SideLink = ({ name, Icon, active, onMenuItemClick }) => {
    const isActive = active === name;
    return (
        <li className='group' onClick={() => onMenuItemClick(name)}>
            <a href={name.toLowerCase()} className='cursor-pointer block text-xl mb-2 pointer-events-none '>
                <div className='inline-block'>
                    <div className={`flex items-center group-hover:bg-first-light group-hover:text-first-base rounded-full pl-3 pr-8 py-3
                    ${isActive ? "text-first-base" : ""}`
                    }>
                        {Icon}
                        <span className='ml-4 font-bold'>
                            {name}
                        </span>
                    </div>
                </div>
            </a>
        </li >
    )
}

export default SideLink