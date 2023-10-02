import Image from 'next/image'

export default function Stats() {

  const stats = [
    { id: 1, name: 'Publications scientifiques internationales', value: '+ de 300' },
    { id: 2, name: 'd experience', value: '+ de 30 ans' },
    { id: 3, name: 'évaluations (Athletes, chefs d entreprise, chirurgiens)', value: '1500' },
  ]

  return (
    
    <div className="bg-gray-900 py-24 sm:py-32 mt-14 mb-14 rounded-xl bg-[url('/images/stats-bg.jpg')] bg-cover bg-center">
    <div className="mx-auto w-full ">
      <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-white">{stat.name}</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
   
  )
}
