const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 md:flex md:justify-between">
          {/* Brand and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">日本語 Learn</h2>
            <p className="text-gray-400 mt-2">
              Expand your Japanese vocabulary with interactive lessons and tutorials.
            </p>
          </div>
  
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/lessons" className="hover:text-blue-400">
                  Lessons
                </a>
              </li>
              <li>
                <a href="/tutorials" className="hover:text-blue-400">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-blue-400">
                  Login
                </a>
              </li>
              <li>
                <a href="/register" className="hover:text-blue-400">
                  Register
                </a>
              </li>
            </ul>
          </div>
  
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="mailto:support@nihongo-learn.com" className="hover:text-blue-400">
                  support@nihongo-learn.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-blue-400">
                  +1 234 567 890
                </a>
              </li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0H1.325C.595 0 0 .6 0 1.337v21.326C0 23.4.595 24 1.325 24h21.351C23.405 24 24 23.4 24 22.663V1.337C24 .6 23.405 0 22.675 0zm-6.114 8.788h-3.322v9.124H9.75V8.788H6.431V6.266h3.32V4.537c0-2.355 1.39-3.632 3.518-3.632.97 0 1.805.074 2.048.107v2.376h-1.404c-1.098 0-1.314.52-1.314 1.283v1.592h2.636l-.352 2.522z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.951 4.951 0 0 0 2.163-2.723 9.865 9.865 0 0 1-3.127 1.184 4.927 4.927 0 0 0-8.391 4.482 13.978 13.978 0 0 1-10.15-5.13 4.822 4.822 0 0 0-.666 2.475c0 1.708.869 3.213 2.188 4.096a4.904 4.904 0 0 1-2.23-.616c-.054 1.989 1.394 3.86 3.444 4.27a4.908 4.908 0 0 1-2.224.084c.63 1.965 2.449 3.393 4.604 3.431a9.873 9.873 0 0 1-6.101 2.1c-.396 0-.786-.023-1.175-.067a13.951 13.951 0 0 0 7.557 2.212c9.054 0 14.002-7.496 14.002-13.986 0-.213-.004-.426-.013-.637a9.935 9.935 0 0 0 2.457-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.371 0 0 5.371 0 12c0 5.014 3.659 9.222 8.438 10.422.618.114.847-.27.847-.598v-2.17c-3.43.75-4.146-1.655-4.146-1.655-.563-1.437-1.375-1.82-1.375-1.82-1.125-.768.083-.752.083-.752 1.247.083 1.938 1.312 1.938 1.312 1.104 1.895 2.896 1.349 3.604 1.031.108-.798.434-1.349.79-1.655-2.739-.312-5.605-1.366-5.605-6.075 0-1.342.482-2.442 1.272-3.302-.136-.312-.553-1.553.112-3.231 0 0 1.032-.33 3.39 1.254.978-.272 2.034-.406 3.084-.412 1.051.006 2.105.14 3.088.414 2.353-1.584 3.382-1.254 3.382-1.254.67 1.679.256 2.919.125 3.231.794.857 1.27 1.96 1.27 3.302 0 4.725-2.87 5.758-5.614 6.062.446.382.844 1.152.844 2.326v3.447c0 .33.222.72.862.594C20.337 21.222 24 17.014 24 12c0-6.629-5.371-12-12-12z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400">
          © {new Date().getFullYear()} 日本語 Learn. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  