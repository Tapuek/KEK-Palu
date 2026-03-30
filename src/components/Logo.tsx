export default function Logo({ className = "w-40 h-auto", imageClassName = "" }: { className?: string, imageClassName?: string }) {
  // Using an img tag so the exact uploaded picture can be used.
  // Please upload your logo image file to the 'public' folder and name it 'Logo.jpg.png'
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/Logo.jpg.png?v=3" 
        alt="Palu SEZ Logo" 
        className={`w-full h-auto object-contain ${imageClassName}`}
        onError={(e) => {
          // Fallback text if the image hasn't been uploaded yet
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <span className="hidden font-bold text-2xl tracking-tight text-zinc-900 dark:text-white">PALU SEZ</span>
    </div>
  );
}
