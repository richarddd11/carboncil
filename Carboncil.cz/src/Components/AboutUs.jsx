import React from 'react'

const AboutUs = () => {
  return (
      <section className='relative max-w-5xl mx-auto' >
         <div className='absolute left-1/130 top-1/27'>
              <p className="text-[#A40C0B] text-xs">O nás</p>
         </div>
      
      <div className=" bg-cover bg-center bg-no-repeat mx-auto mt-20 mb-15 px-6 p-23 rounded-xl"
      style={{ backgroundImage: "url('/Subtract.png')" }}>

      <p className="mb-4">
        Za značkou Carboncil.cz stojí tým nadšenců do kvalitního a 
        udržitelného grilování. Když jsme poprvé objevili uhlí Carboncil
        ve Venezuele, věděli jsme, že máme v rukou něco výjimečného. 
        Uhlí, které se rozžhaví za minutu, nekouří, nepáchne a přitom je 
        vyrobené čistě z přírody.
      </p>
      
      <p className="mb-0 leading-relaxed">
        Naším cílem je přinést do Česka novou generaci grilování. Takovou, 
        kde se nemusíte hádat se sousedy kvůli kouři, zapalovat uhlí půl 
        hodiny, nebo se bát, co vlastně dýcháte. Carboncil je uhlí pro lidi, 
        kteří chtějí čistotu, kvalitu a pohodu.
      </p>
      </div>

      <div className='absolute bottom-0 right-0'>
      <div className='bg-black w-14 h-14 rounded-lg relative'>
        <button className='text-white absolute left-33/100 top-30/100'>↗</button>
      </div>
      </div>
  </section>
  )
}

export default AboutUs