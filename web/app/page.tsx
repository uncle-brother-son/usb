export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="flex flex-col items-center justify-center px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
              Coming Soon
            </h1>
            <div className="h-1 w-32 mx-auto bg-linear-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            We're working on something amazing. Stay tuned!
          </p>
          
          <div className="pt-8">
            <div className="inline-flex items-center space-x-2 text-gray-400">
              <div className="animate-pulse h-2 w-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Under Construction</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

