import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-4">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-lg font-semibold text-blue-600">My Website</p>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
