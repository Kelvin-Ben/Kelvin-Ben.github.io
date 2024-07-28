

const Intro = ({ data }) => {
  return (
    <div className='border border-red-700'>
      <h1 className='text-inherit text-[4rem] uppercase'>{data.title}</h1>
      <h2 className='text-inherit text-[2rem]'>{data.subtitle}</h2>
    </div>
  )
}

export default Intro