import data from '../../data/data.json'
import { OverviewCard, OverviewTodayCard } from './OverviewCard'

const convertNumberToK = (number) => {
  if (number >= 10000) {
    number = number / 1000
    return `${number}k`
  }
  return number
}

export const OverviewContainer = () => {
  return (
    // max-w-[1540px] flex flex-wrap gap-[30px] justify-center absolute top-[191px] left-0 right-0 mx-auto
    <section className='absolute top-[191px] tablet:top-[140px] desktop:top-[160px] left-0 right-0 flex gap-[30px] justify-center px-4 desktop:px-0 flex-wrap max-w-[1540px] mx-auto'>
      {data.overview.map((object) => (
        <OverviewCard
          key={object.id}
          user={object.user}
          audienceType={object.audienceType}
          audience={convertNumberToK(object.audience)}
          network={object.network}
          isUp={object.isUp}
          today={object.today}
        />
      ))}
    </section>
  )
}

// console.log(data['overview-today'])
export const OverviewTodayContainer = () => {
  return (
    <section className='max-w-full mx-auto px-4 lg:px-0'>
      <h2 className='text-2xl font-bold mb-[27px] text-Dark-Grayish-Blue ml-8 dark:text-White tablet:ml-14 desktop:ml-5'>
        Overview-Today
      </h2>
      <div className='flex flex-wrap justify-center gap-6 lg:justify-around mx-auto'>
        {data['overview-today'].map((object) => (
          <div key={object.id} className='flex'>
            <OverviewTodayCard
              network={object.network}
              statsType={object.statsType}
              stats={convertNumberToK(object.stats)}
              porcentage={object.porcentage}
              isUp={object.isUp}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
