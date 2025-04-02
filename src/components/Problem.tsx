
import { Code2, HardDrive, Zap } from "lucide-react";

const Problem = () => {
  return (
    <section id="problem" className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            No hardware required.
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-6">
            Our software-only solution integrates with existing systems and requires no specialized hardware to participate.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 transition-all hover:bg-gray-800/70">
            <div className="mb-6 p-4 rounded-full bg-blue-500/20">
              <Code2 size={32} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">API-First Approach</h3>
            <p className="text-gray-400">
              Simple REST API integration with your existing energy management systems.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 transition-all hover:bg-gray-800/70">
            <div className="mb-6 p-4 rounded-full bg-green-500/20">
              <HardDrive size={32} className="text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">Cloud-Based Solution</h3>
            <p className="text-gray-400">
              Fully hosted and managed infrastructure with enterprise-grade security and reliability.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 transition-all hover:bg-gray-800/70">
            <div className="mb-6 p-4 rounded-full bg-purple-500/20">
              <Zap size={32} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-4">Rapid Deployment</h3>
            <p className="text-gray-400">
              Get up and running in days, not months, with our streamlined onboarding process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
