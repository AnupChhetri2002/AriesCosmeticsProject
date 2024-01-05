import React from 'react'
import { useNavigate } from 'react-router-dom'



const NavLinks = () => {
    const navigate = useNavigate();
    const links=[
        {name:'About',link:"/About"},
        {name:'Shop',link:"/Shop"},
        {name:'Blog',link:"/blog"},
        {name:'Gallery',link:"/Gallery"},
        {name:'Pages',link:"/pages"}
    ]

    const sendTo = (link)=>{
        
        navigate(link)
    }
  return (
<>
    {
        links.map(link=>(
            <div key={link.name}>
                <div key={link.name} className='px-3 text-left md:cursor-pointer text-[#FFD1E3] hover:underline'>
                    <div className='py-4'>
                        <div onClick={()=>sendTo(link.link)}>
                        {link.name}
                        </div>
                    </div>
                </div>
            </div>
        ))
    }
    </>
  )
}

export default NavLinks
