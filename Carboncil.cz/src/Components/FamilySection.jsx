import React from 'react'

const FamilySection = () => {
  return (
    <section className='family mt-20 mx-10'>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                <img src="Family.png" alt="Rodina pri grilovaní" className="rounded-xl w-full object-cover" />
            </div>

            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#A40C0B] mb-4">
                Jedno balení, celá grilovačka!
                </h2>

                <p className="text-[#696969] text-lg font-medium leading-relaxed">
            S 1,5kg balením Carboncilu pohodlně pohostíte 5 až 6 hladových grilovačů. 
            Rychle se rozžhaví, hoří dlouho a bez kouře, takže se můžete 
            soustředit jen na chuť a společnost.
          </p>
            </div>
        </div>
    </section>
  )
}

export default FamilySection