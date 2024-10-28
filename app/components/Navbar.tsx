import React from 'react'

const Navbar = () => {
  return (
    <div className='flex p-3 bg-blue-700 justify-between'>
        <div className="bg-blue-300 rounded-lg p-4">LOGO</div>
        <div className="flex gap-4 p-4">
            <div className="">about</div>
            <div className="mr-3">SIGN-IN</div>
        </div>
    </div>
  )
}
export default Navbar