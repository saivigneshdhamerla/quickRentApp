
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  return (
    <div id="contact" className="bg-gray-50 dark:bg-gray-800 py-24 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Have questions? We're here to help!
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Visit Us</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">123 Fab city, Hyderabad, TG 500001</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email Us</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">contact@quickrent.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Call Us</h4>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">+91 1234567890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}