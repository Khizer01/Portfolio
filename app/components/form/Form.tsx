'use client';
import React, { useState } from 'react';
import Label from '../ui/Label';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = async (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setIsSubmitting(true);

    // validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please Enter a valid Email Address');
      setIsSubmitting(false);
      return;
    }

    if (formData.name.length < 3) {
      setError('Please Enter a valid Name');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSuccessMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to send message.');
      setTimeout(() => setError(''), 4000);
      console.log("Error occured", err);

    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSuccessMessage(''), 4000);
    }
  };

  return (
    <div id="contact" className="max-w-full w-full mx-auto md:p-8 my-36 shadow-input border rounded-[12px] border-[#383838] relative">
      <div className="dark:fpx-10 py-5">
        <h1 className="text-center text-2xl md:text-xl lg:text-3xl font-semibold">
          Want to get{' '}
          <span className="text-purple">in touch?</span>
        </h1>
      </div>
      <form className="py-5 px-10" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4 mb-4">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" type="text" required />
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@email.com" type="email" required />
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Any message for me..?" required />
        </div>
        <div className="relative group">
          <button
            className="bg-[#000319] relative cursor-pointer disabled:cursor-wait w-full text-white rounded-[10px] h-10 font-medium 
              shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
              group-hover:opacity-100"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'SUBMIT'}
          </button>
          <BottomGradient />
        </div>
        {error && <div className="text-red-500 mt-3 text-sm">{error}</div>}
        {successMessage && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-[10px] transition-transform transform translate-x-0">
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;


const BottomGradient = () => {
  return (
    <>
      <span className="group-hover:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-0 inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-4/5 mx-auto -bottom-0 inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
