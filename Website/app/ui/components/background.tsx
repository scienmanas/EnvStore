export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
      {/* Main Discord-style gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900"></div>
      
      {/* Secondary gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-800/60 via-purple-800/40 to-blue-800/80"></div>
      
      {/* Diagonal gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 via-indigo-800/30 to-blue-900/40"></div>
      
      {/* Floating stars */}
      <div className="absolute inset-0">
        {/* Large stars */}
        <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0s', animationDuration: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '2.5s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
        <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s', animationDuration: '2.8s'}}></div>
        
        {/* Small stars */}
        <div className="absolute top-1/6 left-2/3 w-0.5 h-0.5 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.3s', animationDuration: '2.2s'}}></div>
        <div className="absolute top-5/6 right-1/6 w-0.5 h-0.5 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '1.2s', animationDuration: '2.7s'}}></div>
        <div className="absolute top-2/5 left-1/6 w-0.5 h-0.5 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '2.1s', animationDuration: '3.1s'}}></div>
        <div className="absolute top-4/5 right-2/5 w-0.5 h-0.5 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.8s', animationDuration: '2.4s'}}></div>
        
        {/* Cross/plus shaped stars */}
        <div className="absolute top-1/8 right-1/8" style={{animationDelay: '1.8s'}}>
          <div className="relative w-2 h-2 animate-pulse" style={{animationDuration: '3.2s'}}>
            <div className="absolute top-1/2 left-0 w-2 h-px bg-white/60 transform -translate-y-1/2"></div>
            <div className="absolute top-0 left-1/2 w-px h-2 bg-white/60 transform -translate-x-1/2"></div>
          </div>
        </div>
        
        <div className="absolute top-3/4 left-3/4" style={{animationDelay: '0.7s'}}>
          <div className="relative w-2 h-2 animate-pulse" style={{animationDuration: '2.9s'}}>
            <div className="absolute top-1/2 left-0 w-2 h-px bg-white/60 transform -translate-y-1/2"></div>
            <div className="absolute top-0 left-1/2 w-px h-2 bg-white/60 transform -translate-x-1/2"></div>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/8" style={{animationDelay: '2.3s'}}>
          <div className="relative w-1.5 h-1.5 animate-pulse" style={{animationDuration: '2.6s'}}>
            <div className="absolute top-1/2 left-0 w-1.5 h-px bg-white/60 transform -translate-y-1/2"></div>
            <div className="absolute top-0 left-1/2 w-px h-1.5 bg-white/60 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
      
      {/* Floating bubbles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
        <div className="absolute top-2/3 right-1/5 w-6 h-6 bg-white/8 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-white/12 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
        <div className="absolute top-4/5 left-1/3 w-5 h-5 bg-white/9 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}></div>
        <div className="absolute top-1/6 right-1/3 w-2 h-2 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3.8s'}}></div>
        <div className="absolute top-5/6 left-2/3 w-4 h-4 bg-white/11 rounded-full animate-bounce" style={{animationDelay: '2.5s', animationDuration: '4.2s'}}></div>
      </div>
      
      {/* Additional floating elements with different animations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/5 left-1/2 w-3 h-3 bg-purple-300/20 rounded-full animate-pulse" style={{animationDelay: '0.8s', animationDuration: '3.3s'}}></div>
        <div className="absolute top-4/5 right-1/4 w-2 h-2 bg-blue-300/25 rounded-full animate-pulse" style={{animationDelay: '1.8s', animationDuration: '2.7s'}}></div>
        <div className="absolute top-2/5 left-1/8 w-1.5 h-1.5 bg-indigo-300/30 rounded-full animate-pulse" style={{animationDelay: '2.8s', animationDuration: '3.9s'}}></div>
      </div>
      
      {/* Subtle gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-800/15 via-transparent to-purple-900/20"></div>
    </div>
  );
}