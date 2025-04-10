import React from 'react'


const NavBar = () => {
  return (
    <div className="nav shadow-md mx-auto flex items-center justify-between px-6 py-4">
        <img className='lg:ml-10' src="/Logo.png" alt='Carboncil'/>

        <nav className="font-inter hidden min-[799px]:flex gap-6 text-sm font-medium text-black">
          <a href="#">Domov</a>
          <a href="#">O nás</a>
          <a href="#">Carboncil</a>
          <a href="#">Carbonito</a>
          <a href="#">Top Quality</a>
          <a href="#">Kontakt</a>
        </nav>

     
        <div className="flex items-center gap-4 lg:mr-15 ">
        
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <img src="/Lupa.png" alt="search" className="w-7 h-7" />
          </button>

          <button className="bg-black text-white text-sm px-8 py-2 rounded-full hover:bg-gray-800 transition">Kontakt</button>
        </div>
      </div>
  )
}

export default NavBar