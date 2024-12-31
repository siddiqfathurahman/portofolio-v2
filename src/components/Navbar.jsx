import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-slate-100 font-poppins py-4">
      <nav className="bg-transparent border-2 border-black w-96 rounded-full py-4 mx-auto">
        <div className="flex justify-center">
          <ul className="flex space-x-8 text-black font-semibold">
            <li>
              <a href="#profil" className="hover:text-blue-300">
                Profil
              </a>
            </li>
            <li>
              <a href="#project" className="hover:text-blue-300">
                Project
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
