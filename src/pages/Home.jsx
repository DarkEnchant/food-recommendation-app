import React from "react";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-indigo-200 to-purple-100 overflow-hidden">
      
      {/* Blurred gradient circles */}
      <div className="absolute w-[600px] h-[600px] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -top-40 -left-40"></div>
      <div className="absolute w-[500px] h-[500px] bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse -bottom-20 -right-20"></div>

      {/* Main card */}
      <div className="z-10 bg-white/40 backdrop-blur-xl shadow-2xl rounded-3xl p-10 max-w-2xl w-full text-center border border-white/20">
        <h1 className="text-5xl font-extrabold text-purple-800 drop-shadow mb-6">
          Welcome to <span className="text-purple-600">Food Finder 🍱</span>
        </h1>
        <p className="text-lg text-gray-800 font-medium mb-8">
          Discover delicious <strong>Malaysian</strong> food based on your preferences — perfect for visitors exploring local flavors!
        </p>
        <Button className="text-lg px-8 py-3" onClick={() => window.location.href = "/questionnaire"}>
          Get Started →
        </Button>
      </div>
    </div>
  );
}
