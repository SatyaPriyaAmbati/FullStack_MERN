import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // This will take the user back to the previous page
  };

  return (
    <div className="bg-gray-100 py-12 flex justify-center items-center min-h-screen">
      <div className="max-w-2xl text-center bg-white p-8 rounded-lg shadow-lg relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to our Bookstore! We are passionate about books and dedicated to helping you find the perfect read.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Our mission is to provide a wide range of books to cater to all types of readers, from fiction lovers to non-fiction enthusiasts. Whether you're looking for the latest bestsellers, timeless classics, or educational materials, we have something for everyone.
        </p>
        <p className="text-lg text-gray-600">
          We believe in the power of books to inspire, educate, and entertain. Our carefully curated collection is designed to bring you the best reading experience. Thank you for visiting our store. Happy reading!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
