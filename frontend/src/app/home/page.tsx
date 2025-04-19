import AnimatedWords from "@/components/home/AnimatedWords";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";
import FeatureCard from "@/components/home/FeatureCard";
import {
  LayoutGrid,
  User,
  Image,
  MessageSquare,
  Users,
  UserPlus,
  Heart,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center px-4 ">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Your Space to{" "}
            <span className="inline-block w-[100px] text-left">
              <AnimatedWords />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Connect instantly with friends, share ideas, and stay in touch — all in one secure place.
          </p>
          <Link href="/login">
          <Button className="text-base px-6 py-3 rounded-xl shadow-md">
            Get Started
          </Button>
          </Link>
        </div>

        <div className="mt-12">
          <img
            src="/images/hero.png"
            alt="Chat illustration"
            className="w-full max-w-lg mx-auto"
            
          />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Powerful Features for Seamless Communication
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Everything you need to stay connected with friends, communities, and teams
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={LayoutGrid}
              title="Communities & Groups"
              description="Create and explore topic-based servers like forums or communities. Build group chats with unlimited members, admin controls, and rich discussions."
              bgColor="bg-indigo-500"
            />
            <FeatureCard
              icon={User}
              title="One-on-One Chat"
              description="Enjoy seamless individual chats with a clean and intuitive UI. Real-time messaging with typing indicators and instant delivery."
              bgColor="bg-blue-500"
            />
            <FeatureCard
              icon={Image}
              title="Media & Sharing"
              description="Easily share photos, videos, and documents in any conversation. Engage deeply with rich content support and fast upload speeds."
              bgColor="bg-green-500"
            />
          </div>

         
        </div>
      </section>


 
      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in just a few simple steps and unlock the power of seamless collaboration
          </p>
        </div>

        
        
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {/* Step 1 */}
          <FeatureCard
              icon={UserPlus}
              title="1. Sign Up"
              description="Create an account using Google or email in seconds."
              bgColor="bg-amber-600"
            />
          
          {/* Step 2 */}
          <FeatureCard
              icon={Users}
              title="2. Join or Create"
              description="Join existing communities or start your own space or chat with individuals."
              bgColor="bg-green-600"
            />
          
          {/* Step 3 */}
          <FeatureCard
              icon={MessageSquare}
              title="3. Start Chatting"
              description="Send messages, share media, and communicate in real-time."
              bgColor="bg-purple-600"
            />
        
        <div className="mt-16 text-center">

        </div>
      </div>
      </div>
    </section>

    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="w-full px-4 flex justify-center items-center flex-col">

          {/* Brand Info */}
          <div className="space-y-4 flex flex-col justify-center items-center">
            <Link href="/" className="flex items-center space-x-2">
             <img src="/logo.svg" alt="logo" 
             className="overlay-white"
             width={200}
             height={200}/>
            </Link>
            <p className="text-gray-400">
              Connect, collaborate, and communicate seamlessly with individuals and communities.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
    
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} BaatCheet. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 fill-red-500 text-red-500" /> for better communication
          </p>
        </div>
      </div>
    </footer>
     
 
    </>
  );
}
