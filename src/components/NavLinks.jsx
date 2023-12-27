import React from 'react'

const NavLinks = () => {
    const links=[
        {name:'About',},
        {name:'Shop'},
        {name:'Blog'},
        {name:'Gallery'},
        {name:'Pages'}
    ]
  return (
<>
    {
        links.map(link=>(
            <div>
                <div className='px-3 text-left md:cursor-pointer text-[#FFD1E3] hover:underline'>
                    <h1 className='py-7'>
                        {link.name}
                    </h1>
                </div>
            </div>
        ))
    }
    </>
  )
}

export default NavLinks
