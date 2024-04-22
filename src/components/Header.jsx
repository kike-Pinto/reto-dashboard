import { useState, useEffect } from 'react'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    // <header className='bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-[235px] rounded-b-[20px] pt-8 px-6 mb-[1000px] tablet:mb-[480px] desktop:mb-[200px]'>
    //   <div className='tablet:flex tablet:justify-between max-w-[1140px] mx-auto  desktop:'>
    //     <div>
    //       <h1 className='text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1 tablet:text-[28px]'>
    //         Social Media Dashboard
    //       </h1>
    //       <p className='text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold mb-6'>
    //         Total Followers: 23,004
    //       </p>
    //       <hr className='bg-black mb-[19px] tablet:hidden' />
    //     </div>

    //     <div className='flex justify-between gap-[13px]'>
    //       <p className='text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold desktop:justify-end'>
    //         Dark Mode
    //       </p>

    //       <label
    //         // htmlFor='darkmode'
    //         className='relative w-12 h-6 bg-Toggle rounded-full overflow-hidden cursor-pointer p-[2.5px]'
    //       >
    //         <input
    //           onClick={handleClick}
    //           // id='darkmode'
    //           type='checkbox'
    //           className='peer sr-only'
    //           defaultChecked={darkMode}
    //         />
    //         <div className=' w-full h-full peer-checked:bg-Toggle-Gradient absolute top-0 left-0'></div>
    //         <div className='w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full dark:bg-Very-Dark-Blue-Top peer-checked:translate-x-[24px] transition-all absolute'></div>
    //       </label>
    //     </div>
    //   </div>
    // </header>

    <header className='bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-[235px] rounded-b-[20px] pt-8 px-6 mb-[1000px] tablet:mb-[480px] desktop:mb-[200px]'>
      <div className='tablet:flex justify-between items-center max-w-[1440px] mx-auto '>
        <div>
          <h1 className='text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1 tablet:text-[28px]'>
            Social Media Dashboard
          </h1>
          <p className='text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold mb-6'>
            Total Followers: 23,004
          </p>
          <hr className='bg-black mb-[19px] tablet:hidden' />
        </div>

        <div className='flex items-center gap-[13px] mr-0'>
          <p className='text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold'>
            Dark Mode
          </p>
          <label className='relative w-12 h-6 bg-Toggle rounded-full overflow-hidden cursor-pointer p-[2.5px]'>
            <input
              onClick={handleClick}
              type='checkbox'
              className='peer sr-only'
              defaultChecked={darkMode}
            />
            <div className='w-full h-full peer-checked:bg-Toggle-Gradient absolute top-0 left-0'></div>
            <div className='w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full dark:bg-Very-Dark-Blue-Top peer-checked:translate-x-[24px] transition-all absolute'></div>
          </label>
        </div>
      </div>
    </header>
  )
}

export default Header
