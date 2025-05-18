import './App.css'

function App() {
  
  // function scrollToSection() {
  //     document.getElementById("target").scrollIntoView({ behavior: "smooth" });
  // }

  // <button onclick="scrollToSection()" class="px-4 py-2 bg-blue-500 text-white rounded-md">
  //   Scroll to Section
  // </button>

  return (
    <div>

      <div className='w-full h-16 bg-[#112D4E]'>

      </div>
      <div className='w-full bg-gradient-to-r from-[#3F72AF] via-[#d8d0d0] to-[#6985bb] h-[3px]'></div>

      <div className='w-full h-screen pt-16 sm:pt-36 flex flex-col items-center px-10 text-center bg-[#F9F7F7]'>
        <h1 className='text-3xl sm:text-5xl text-zinc-900 font-semibold'>The Best IT Solution With 10 Years of Experience</h1>
        <h1 className='mt-5 text-6xl sm:text-7xl font-semibold text-zinc-900'>ByteEdu Tech</h1>
        <div className='grid sm:grid-cols-2 gap-3 sm:mt-20 mt-10'>
          <button className='w-[160px] bg-[#3F72AF] hover:bg-[#112D4E] cursor-pointer transition ease-in rounded-full py-1 sm:py-2 text-[#F9F7F7]'>Our Services</button>
          <div className="p-[0.5px] bg-gradient-to-r w-[160px] h-[40px] flex justify-center items-center to-[#112D4E] from-[#3F72AF] rounded-full ">
              <button className="relative w-[158px] bg-white h-[38px] transition ease-in hover:text-[#3F72AF] cursor-pointer text-black py-1 sm:py-2 rounded-full">
              Contact Us
              </button>
          </div>
        </div>
      </div>

      <div className="w-full h-96 bg-gradient-to-t from-[#F9F7F7] via-[#DBE2EF] to-transparent">
      </div>


      <div className='w-full h-96 bg-[#F9F7F7]'>
         
      </div>



    </div>
  )
}

export default App
