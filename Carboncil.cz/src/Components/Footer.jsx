import React from 'react'

const Footer = () => {
  return (
    <footer className='relative px-5 max-w-410 rounded-b-3xl py-30 mb-20 pt-38 mx-auto bg-no-repeat bg-cover bg-center' style={{ backgroundImage: "url('/faqSecBg.png')" }}>
            
        <div className="flex flex-col justify-between sm:flex-row  py-4 px-2 text-sm md:text-base">
          
            <div>
                <p className='mt-4 text-white'>Uhlí, které griluje chytře.</p>
            </div>

            <nav className="flex items-end float-right text-right text-base gap-10 mb-5 sm:mb-0">
            <a href="#" className="text-white hover:text-gray-300 transition">
              O nás
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition">
              Carboncil
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition">
              Kontakt
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition">
              Carbonito
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition">
              Top Quality
            </a>
          </nav>

          </div>
          <div className='flex flex-row justify-between'>
                <img className='pl-2'  src="/HeroLogo.png" alt="" />
                <p className="text-gray-400">© 2025 Carboncil</p>
          </div>

          <div className='flex flex-row absolute right-0 bottom-0'>
            <div className='mr-2 p-2 text-white bg-black rounded-xl'>
                <img src="/Youtube.png" alt="" />
            </div>
            <div className='mr-2 p-2 text-white bg-black rounded-xl'>
                <img src="/Instagram.png" alt="" />
            </div>
            <div className='text-white bg-black p-2 rounded-xl'>
                <img src="/OBJECTS.png" alt="" />
            </div>
          </div>
        </footer>
  )
}

export default Footer