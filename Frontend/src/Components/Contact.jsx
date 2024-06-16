import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const openModal = () => {
    const modal = document.getElementById('my_modal_3');
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById('my_modal_3');
    if (modal) {
      modal.close();
    }
  };

  const onSubmit = data => {
    console.log(data);
   
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-md shadow-md">
        <Link to="/" onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          <h3 className="font-bold text-lg">Contact Me</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4 space-y-2">
              <label>Email</label><br />
              <input {...register('email', { required: 'Email is required' })} type="email" placeholder="Enter email" className="w-80 px-3 py-1 border rounded-md outline-none" />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            <div className="mt-4 space-y-2">
              <label>Message</label><br />
              <textarea {...register('message', { required: 'Message is required' })} placeholder="Enter your message" className="w-80 px-3 py-1 border rounded-md outline-none" />
              {errors.message && <span className="text-red-500">{errors.message.message}</span>}
            </div>
            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1">Submit</button>
              <button type="button" className="bg-blue-500 text-white rounded-md px-3 py-1" onClick={openModal}>Login</button>
            </div>
          </form>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4 space-y-2">
              <label>Email</label><br />
              <input {...register('loginEmail', { required: 'Email is required' })} type="email" placeholder="Enter email" className="w-80 px-3 py-1 border rounded-md outline-none" />
              {errors.loginEmail && <span className="text-red-500">{errors.loginEmail.message}</span>}
            </div>
            <div className="mt-4 space-y-2">
              <label>Password</label><br />
              <input {...register('loginPassword', { required: 'Password is required' })} type="password" placeholder="Enter Password" className="w-80 px-3 py-1 border rounded-md outline-none" />
              {errors.loginPassword && <span className="text-red-500">{errors.loginPassword.message}</span>}
            </div>
            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1">Login</button>
              <p>Not Registered? 
                <Link to="/signup" className="text-blue-500"> Signup </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Contact;
