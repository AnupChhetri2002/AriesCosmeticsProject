import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <nav class="flex items-center justify-between bg-white p-4 px-6">
  <a href="/" class="text-gray-600 font-semibold">My Company</a>
  <div class="flex items-center space-x-4">
    <a href="/about" class="text-gray-600 hover:text-gray-400">About</a>
    <a href="/services" class="text-gray-600 hover:text-gray-400">Services</a>
    <a href="/contact" class="text-gray-600 hover:text-gray-400">Contact</a>
  </div>
</nav>
<div class="contact-us display: inline-block  " >
  <div class="container mx-auto px-4 sm:px-8">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-3xl font-bold text-purple-600">Contact Us</h1>
      <p class="text-sm text-gray-400">HOME / CONTACT US</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      </div>
  </div>
</div>
<nav class="bg-green-100 text-green-700 p-4">
    <ul class="flex justify-center items-center">
      <li class="px-4"><a href="#">Home</a></li>
      <li class="px-4"><a href="#">About</a></li>
      <li class="px-4"><a href="#">Contact</a></li>
    </ul>
  </nav>

  <main class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Welcome to Your Website</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click Me</button>
  </main>
    </div>
  )
}

export default ContactUs
