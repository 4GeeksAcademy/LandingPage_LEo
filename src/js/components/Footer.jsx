import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {

  return (
    <footer className="mx-auto w-full fixed bottom-0 shadow-sm " style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', }}>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
         <p>Copyright &copy; Your Website 2019</p>
        </span>
    
      </div>
    </footer>

  );
}
export default Footer;