import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
            {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-white text-lg mb-4">GENAI HACKATHON T$O</h3>
              <p className="text-sm">
                The premier generative AI hackathon bringing together innovators to solve real-world challenges.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-orange-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400">
                    Rules
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-orange-400">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-orange-400">
                  Twitter
                </Link>
                <Link href="#" className="hover:text-orange-400">
                  LinkedIn
                </Link>
                <Link href="#" className="hover:text-orange-400">
                  Instagram
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-sm mb-2 text-orange-500">Jazzee Technologies</p>
              <p className="text-sm mb-2">Bhubaneswar, India</p>
              <p className="text-sm">info@genaihackathon.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            &copy; {new Date().getFullYear()} GENAI HACKATHON T$O. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
