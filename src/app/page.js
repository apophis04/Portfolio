import Bio from './Components/Bio';
import Navbar from './Components/Navbar';
import ProgrammerProfile from './Components/Profile';
import Skills from './Components/Skills';

export default function Home() {
  return (
    <div className="bg-background">
      <div className='absolute'>

      <svg width="1440" height="957" viewBox="0 0 1440 957" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_2_50)">
<rect x="1039.6" y="-471" width="467" height="1233.79" rx="233.5" transform="rotate(42.63 1039.6 -471)" fill="url(#paint0_linear_2_50)" fillOpacity="0.27"/>
</g>
<defs>
<filter id="filter0_f_2_50" x="0.435135" y="-674.565" width="1586.32" height="1631.16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_2_50"/>
</filter>
<linearGradient id="paint0_linear_2_50" x1="1273.1" y1="-471" x2="1273.1" y2="762.793" gradientUnits="userSpaceOnUse">
<stop stopColor="#5454D4"/>
<stop offset="1" stopColor="#5454D4" stopOpacity="0.42"/>
</linearGradient>
</defs>
</svg>

</div>
    <Navbar />
    <div className='m-32'>
    <ProgrammerProfile />
    <Bio />
    <Skills />
    </div>
    </div>
  );
}
