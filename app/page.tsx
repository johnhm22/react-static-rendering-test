const Home = async () => {
  const getDate = async () => new Date().toLocaleString()
  const today = await getDate()
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>{today}</h1>
      </div>
    </section>
  )
}

export default Home
