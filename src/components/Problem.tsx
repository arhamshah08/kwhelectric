
const Problem = () => {
  return (
    <section id="problem" className="py-20 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              No hardware required.
            </h2>
            <p className="text-xl text-gray-300 max-w-lg">
              Our software-only solution integrates with existing systems and requires no specialized hardware to participate.
            </p>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="public/lovable-uploads/5da94a76-0840-4d06-91d6-40766131a401.png" 
              alt="Software solution" 
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
