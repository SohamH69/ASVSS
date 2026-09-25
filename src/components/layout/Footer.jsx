import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        {/* <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="logo-ct" className="w-10" /> */}
        <h1>ASVSS</h1>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
              About Us
           
          </li>
          <li>
            
              License
           
          </li>
          <li>
           
              Contribute
            
          </li>
          <li>
            
              Contact Us
            
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      
        &copy; 2026 FLIPD
      
    </footer>
  )
}

export default Footer