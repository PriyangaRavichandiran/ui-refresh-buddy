
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[800px] overflow-hidden">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/90">
          <div className="absolute inset-0 bg-[url('/image/background.png')] bg-cover bg-center opacity-70 mix-blend-overlay"></div>
        </div>
        
        {/* Animated shuttlecock */}
        <div className="absolute animate-bounce delay-700 top-20 right-40">
          <img src="/image/shuttlecock.png" alt="Shuttlecock" className="w-12 h-12" />
        </div>

        {/* Header/Navigation */}
        <header className="relative z-10 px-4 pt-6">
          <nav className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              <img src="/image/navbrand.png" alt="DreamSports" className="h-12" />
              <div className="hidden md:flex ml-8 items-center p-2 rounded-full bg-white/10 backdrop-blur-sm">
                <img src="/image/search.png" alt="Search" className="w-4 h-4 mx-2" />
                <input type="text" placeholder="Search" className="bg-transparent text-white outline-none w-40" />
              </div>
            </div>
            
            <button className="md:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <div className="hidden md:flex items-center">
              <ul className="flex space-x-8 mr-8">
                {["Home", "Explore Courts", "Coaches", "Pages", "Blogs", "Contact"].map((item, index) => (
                  <li key={index} className="group relative">
                    <img src="/image/suttleicon.png" alt="Shuttlecock" className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-6 opacity-0 group-hover:opacity-100 transition-all" />
                    <a href="#" className="text-white hover:text-[#AAF40C] font-medium transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
              
              <div className="space-x-2">
                <Button variant="outline" className="bg-green-50 text-green-600 hover:bg-green-100 border-0">
                  <img src="/image/user-icon.png" alt="User Icon" className="w-4 h-4 mr-2" />
                  Login / Register
                </Button>
                <Button className="bg-gray-800 hover:bg-gray-900 text-white">
                  <img src="/image/check-circle.png" alt="Check" className="w-4 h-4 mr-2" />
                  List Your Court
                </Button>
              </div>
            </div>
          </nav>
        </header>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-0 relative z-10 pt-24 pb-16 md:pt-32 md:pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="text-white">
              <p className="text-[#AAF40C] font-bold mb-4">World class badminton coaching & premium courts</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Choose Your <span className="text-[#AAF40C] font-bold">Coaches</span>
                <br />And Start Your Training
              </h1>
              <p className="text-gray-200 mb-8 max-w-lg">
                Unleash your athletic potential with expert coaching, state-of-the-art facilities and
                personalized training programs.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col md:flex-row items-center gap-3 max-w-xl">
                <div className="relative w-full md:w-auto">
                  <select className="appearance-none bg-white rounded-md px-4 py-2 pr-8 text-gray-800 w-full">
                    <option>Courts</option>
                    <option>Courts1</option>
                    <option>Courts2</option>
                    <option>Courts3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
                <input type="text" placeholder="Enter location" className="bg-white rounded-md px-4 py-2 text-gray-800 w-full" />
                <button className="bg-[#AAF40C] hover:bg-[#95d908] text-gray-900 font-medium rounded-md px-4 py-2 flex items-center whitespace-nowrap">
                  <img src="/image/search.png" alt="Search" className="w-4 h-4 mr-2" />
                  Search
                </button>
              </div>
            </div>
            
            <div className="hidden md:block">
              <img src="/image/shuttlegroup.png" alt="Badminton Players" className="max-w-full" />
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,64C160,64,320,64,480,53.3C640,43,800,21,960,21.3C1120,21,1280,43,1360,53.3L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 px-4 relative">
        <img src="/image/boy-playing.png" alt="Boy Playing" className="absolute right-0 top-0 w-40 md:w-52 opacity-70 md:opacity-100" />
        
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">How It Works</h2>
          <p className="text-gray-600 mb-12">Simplifying the process to get you started faster.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 transition-all hover:shadow-xl">
              <div className="flex justify-center mb-4">
                <img src="/image/hands.png" alt="Join Us" className="h-24" />
              </div>
              <h3 className="text-xl font-bold mb-2">Join Us</h3>
              <p className="text-gray-600 mb-4">Create your account and explore.</p>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/5">Register now</Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 transition-all hover:shadow-xl">
              <div className="flex justify-center mb-4">
                <img src="/image/man.png" alt="Select Coaches/Venues" className="h-24" />
              </div>
              <h3 className="text-xl font-bold mb-2">Select Coaches/Venues</h3>
              <p className="text-gray-600 mb-4">Choose your preferred coach and venue.</p>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/5">Go to coaches</Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 transition-all hover:shadow-xl">
              <div className="flex justify-center mb-4">
                <img src="/image/booknowouter.png" alt="Booking Process" className="h-24" />
              </div>
              <h3 className="text-xl font-bold mb-2">Booking Process</h3>
              <p className="text-gray-600 mb-4">Complete your booking and start training.</p>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/5">Book Now</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Venues Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <img src="/image/batminton-icon.png" alt="Badminton Icon" className="h-16" />
            </div>
            <h2 className="text-3xl font-bold mb-3">Featured Venues</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced sports venues offer the latest facilities, dynamic and unique environments for enhanced
              badminton performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Venue Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative">
                <img src="/image/court.png" alt="Sports Academy" className="w-full h-56 object-cover" />
                <Badge className="absolute top-3 left-3 bg-blue-500">Featured</Badge>
                <Badge className="absolute top-3 right-3 bg-green-500">$450/hr</Badge>
              </div>
              
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-gray-100 px-2 py-1 rounded font-semibold text-sm">4.2</span>
                    <span className="text-gray-500 text-sm">300 Reviews</span>
                  </div>
                  <button className="text-gray-400 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                
                <h3 className="text-xl font-bold mb-2">Sarah Sports Academy</h3>
                <p className="text-gray-600 mb-4">Elevate your athletic journey at Sarah Sports Academy, where excellence meets opportunity.</p>
                
                <div className="flex items-center mb-2 text-gray-700">
                  <img src="/image/map-pin.png" alt="Location" className="w-4 h-4 mr-2" />
                  <span className="text-sm">Port Alsworth, AK</span>
                </div>
                
                <div className="flex items-center mb-4 text-gray-700">
                  <img src="/image/calendar.png" alt="Calendar" className="w-4 h-4 mr-2" />
                  <span className="text-sm">Next availability: 21 May 2023</span>
                </div>
                
                <hr className="my-4" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src="/image/avatar2.png" alt="Mart Sublin" className="w-10 h-10 rounded-full mr-2" />
                    <span className="font-medium">Mart Sublin</span>
                  </div>
                  <Button variant="ghost" className="text-gray-800 hover:text-black hover:bg-gray-100">
                    <img src="/image/calendar.png" alt="Calendar" className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Venue Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative">
                <img src="/image/playing.png" alt="Badminton Academy" className="w-full h-56 object-cover" />
                <Badge className="absolute top-3 left-3 bg-purple-500">Top Rated</Badge>
                <Badge className="absolute top-3 right-3 bg-green-500">$450/hr</Badge>
              </div>
              
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-gray-100 px-2 py-1 rounded font-semibold text-sm">4.2</span>
                    <span className="text-gray-500 text-sm">300 Reviews</span>
                  </div>
                  <button className="text-gray-400 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                
                <h3 className="text-xl font-bold mb-2">Badminton Academy</h3>
                <p className="text-gray-600 mb-4">Unleash your badminton potential at our premier Badminton Academy, where champions are made.</p>
                
                <div className="flex items-center mb-2 text-gray-700">
                  <img src="/image/map-pin.png" alt="Location" className="w-4 h-4 mr-2" />
                  <span className="text-sm">Sacramento, CA</span>
                </div>
                
                <div className="flex items-center mb-4 text-gray-700">
                  <img src="/image/calendar.png" alt="Calendar" className="w-4 h-4 mr-2" />
                  <span className="text-sm">Next availability: 15 May 2023</span>
                </div>
                
                <hr className="my-4" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src="/image/avatar.png" alt="Mart Sublin" className="w-10 h-10 rounded-full mr-2" />
                    <span className="font-medium">Mart Sublin</span>
                  </div>
                  <Button variant="ghost" className="text-gray-800 hover:text-black hover:bg-gray-100">
                    <img src="/image/calendar.png" alt="Calendar" className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Venue Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative">
                <img src="/image/shuttleracket.png" alt="Manchester Academy" className="w-full h-56 object-cover" />
                <Badge className="absolute top-3 right-3 bg-green-500">$450/hr</Badge>
              </div>
              
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-gray-100 px-2 py-1 rounded font-semibold text-sm">4.2</span>
                    <span className="text-gray-500 text-sm">300 Reviews</span>
                  </div>
                  <button className="text-gray-400 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                
                <h3 className="text-xl font-bold mb-2">Manchester Academy</h3>
                <p className="text-gray-600 mb-4">Manchester Academy: Where dreams meet excellence in sports education and training.</p>
                
                <div className="flex items-center mb-2 text-gray-700">
                  <img src="/image/map-pin.png" alt="Location" className="w-4 h-4 mr-2" />
                  <span className="text-sm">Guysville, OH</span>
                </div>
                
                <div className="flex items-center mb-4 text-gray-700">
                  <img src="/image/calendar.png" alt="Calendar" className="w-4 h-4 mr-2" />
                  <span className="text-sm">Next availability: 16 May 2023</span>
                </div>
                
                <hr className="my-4" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src="/image/avatar.png" alt="Mart Sublin" className="w-10 h-10 rounded-full mr-2" />
                    <span className="font-medium">Mart Sublin</span>
                  </div>
                  <Button variant="ghost" className="text-gray-800 hover:text-black hover:bg-gray-100">
                    <img src="/image/calendar.png" alt="Calendar" className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-gray-800 hover:bg-gray-900 text-white">
              <img src="/image/check-circle.png" alt="Check" className="w-4 h-4 mr-2" />
              List Your Court
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gray-50 relative">
        <img src="/image/man-bat.png" alt="Man with Bat" className="absolute left-0 bottom-0 h-60 opacity-50 md:opacity-80" />
        <img src="/image/shuttlecock.png" alt="Shuttlecock" className="absolute top-10 right-10 w-12 opacity-20" />
        
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 flex items-center justify-center">
                <img src="/image/startshot.png" alt="Newsletter Image" className="max-h-60" />
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Subscribe to Newsletter</h2>
                <p className="text-blue-100 mb-6">Just for you, exciting badminton news updates.</p>
                
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter email address" 
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 pr-24"
                  />
                  <Button className="absolute right-1 top-1 bg-blue-600 hover:bg-blue-700 text-white">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-blue-900 text-white pt-16 pb-8">
        {/* Welcome Message */}
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">We Welcome Your Passion and Expertise</h2>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              Join With Us
            </Button>
          </div>
          <hr className="border-blue-800 mt-12" />
        </div>
        
        {/* Footer Links */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Contact us</h4>
              <p className="text-blue-200 mb-2">Toll Free Customer Care:<br/>+18064 166654</p>
              <p className="text-blue-200 mb-4">Need Live Support</p>
              <div className="flex space-x-3">
                <a href="#" className="text-blue-300 hover:text-white">
                  <img src="/image/Facebook.png" alt="Facebook" className="h-5" />
                </a>
                <a href="#" className="text-blue-300 hover:text-white">
                  <img src="/image/Twitter.png" alt="Twitter" className="h-5" />
                </a>
                <a href="#" className="text-blue-300 hover:text-white">
                  <img src="/image/Instagram.png" alt="Instagram" className="h-5" />
                </a>
                <a href="#" className="text-blue-300 hover:text-white">
                  <img src="/image/Pinterest.png" alt="Pinterest" className="h-5" />
                </a>
                <a href="#" className="text-blue-300 hover:text-white">
                  <img src="/image/Linkedin.png" alt="LinkedIn" className="h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About us", "Blog", "Careers", "Contact us", "Press"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-2">
                {["Contact", "Legal Notice", "Privacy Policy", "Terms & Conditions", "Payment Policy"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Other Links</h4>
              <ul className="space-y-2">
                {["Coaches", "Sports Venues", "Join As Coach", "Add Venue", "My Account"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Our Locations</h4>
              <ul className="space-y-2">
                {["Germany", "Russia", "France", "UK", "Colombia"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Download</h4>
              <div className="space-y-3">
                <a href="#">
                  <img src="/image/appstore.png" alt="App Store" className="h-10" />
                </a>
                <a href="#">
                  <img src="/image/googlepaly.png" alt="Google Play" className="h-10" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-blue-800 flex flex-col md:flex-row justify-between">
            <p className="text-blue-300 text-sm">© 2023 DreamSports - All rights reserved.</p>
            <p className="text-blue-300 text-sm mt-2 md:mt-0">English (US) | USD</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
