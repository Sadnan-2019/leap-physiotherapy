import React from 'react';
import dr1 from "../../assets/tonni.760bf943c7f274b05a3f.jpg"
import dr2 from "../../assets/faisal.c4359edf3e6e8acb6190.jpg"
import dr3 from "../../assets/sumaiya2.ba7d38ab35afd1967c5b.jpg"
import dr4 from "../../assets/jasim.0dd0b4e2a955b63524fe.jpg"
import dr5 from "../../assets/rajib.10317f1f0c394a0d4520.jpg"
import dr6 from "../../assets/khadija.jpg"
import dr7 from "../../assets/irin.e191012389facb999a9d.jpg"

import "./HomeTeam.css"
const HomeTeam = () => {
    return (
        <div class="  py-16 px-4 sm:px-8 lg:px-16">
  {/* <!-- Section Header --> */}
  <div class="max-w-7xl mx-auto text-center mb-12">
    <h2 class="text-3xl font-bold tracking-tight text-black sm:text-4xl">
      Meet Our Experts
    </h2>
  </div>

  {/* <!-- Team Grid --> */}
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
    
    {/* <!-- Expert 1: Tanzina Akter --> */}
    <div class="w-full max-w-sm bg-slate-800/40 border border-white/10 rounded-2xl overflow-hidden shadow-xl group relative aspect-[3/4]">
      <img alt="Tanzina Akter" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-in-out" src={dr1}/>
      {/* <!-- Hover Overlay Info --> */}
      <div class="absolute inset-0 bg-gradient-to-t from-[#034ca7] via-[#034ca7]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
        <h3 class="text-xl font-bold mb-2">Tanzina Akter</h3>
        <ul class="text-sm space-y-2 list-disc list-inside text-slate-200">
          <li>Over 14 years of professional experience as Senior Physiotherapist</li>
          <li>Completed a 2-year Therapeutic Training Program in Romania</li>
        </ul>
      </div>
    </div>

    {/* <!-- Expert 2: Md Mahmudul Hasan Khan Faisal --> */}
    <div class="w-full max-w-sm bg-slate-800/40 border border-white/10 rounded-2xl overflow-hidden shadow-xl group relative aspect-[3/4]">
      <img alt="Md Mahmudul Hasan Khan Faisal" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-in-out" src={dr2}/>
      <div class="absolute inset-0 bg-gradient-to-t from-[#034ca7] via-[#034ca7]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
        <h3 class="text-xl font-bold mb-2">Md Mahmudul Hasan Khan Faisal</h3>
        <ul class="text-sm space-y-2 list-disc list-inside text-slate-200">
          <li>BSPT (Faculty of Medicine, DU)</li>
          <li>Senior Clinical Physiotherapist</li>
        </ul>
      </div>
    </div>

    {/* <!-- Expert 3: Sumaiya Akter --> */}
    <div class="w-full max-w-sm bg-slate-800/40 border border-white/10 rounded-2xl overflow-hidden shadow-xl group relative aspect-[3/4]">
      <img alt="Sumaiya Akter" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-in-out" src={dr3}/>
      <div class="absolute inset-0 bg-gradient-to-t from-[#034ca7] via-[#034ca7]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
        <h3 class="text-xl font-bold mb-2">Sumaiya Akter</h3>
        <ul class="text-sm space-y-2 list-disc list-inside text-slate-200">
          <li>BSPT(DU). MPH(SUB)</li>
          <li>With 4 years of experience as a Consultant Physiotherapist.</li>
        </ul>
      </div>
    </div>

    {/* <!-- Expert 4: Khadiza Akter --> */}
    <div class="w-full max-w-sm bg-slate-800/40 border border-white/10 rounded-2xl overflow-hidden shadow-xl group relative aspect-[3/4]">
      <img alt="Khadiza Akter" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-in-out" src={dr6}/>
      <div class="absolute inset-0 bg-gradient-to-t from-[#034ca7] via-[#034ca7]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
        <h3 class="text-xl font-bold mb-2">Khadiza Akter</h3>
        <ul class="text-sm space-y-2 list-disc list-inside text-slate-200">
          <li>BSPT(DU). MFR(India). Taping (India)</li>
          <li>Senior Consultant Physiotherapist (Neuro &amp; Musculoskeletal Pain Management)</li>
          <li>With 15 years of experience as a Consultant Physiotherapist and over 10 years of working experience at Leap</li>
        </ul>
      </div>
    </div>

    {/* <!-- Expert 5: Md. Sajedul Islam Rajib --> */}
    <div class="w-full max-w-sm bg-slate-800/40 border border-white/10 rounded-2xl overflow-hidden shadow-xl group relative aspect-[3/4]">
      <img alt="Md. Sajedul Islam Rajib" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-in-out" src={dr5}/>
      <div class="absolute inset-0 bg-gradient-to-t from-[#034ca7] via-[#034ca7]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
        <h3 class="text-xl font-bold mb-2">Md. Sajedul Islam Rajib</h3>
        <ul class="text-sm space-y-2 list-disc list-inside text-slate-200">
          <li>Clinical Physiotherapist (Bsc. in DU)</li>
          <li>Over 18 years of experience at Leap</li>
        </ul>
      </div>
    </div>

    {/* <!-- Expert 6: Irin Islam --> */}
    <div class="w-full max-w-sm bg-slate-800/40 border border-white/10 rounded-2xl overflow-hidden shadow-xl group relative aspect-[3/4]">
      <img alt="Irin Islam" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-in-out" src={dr7}/>
      <div class="absolute inset-0 bg-gradient-to-t from-[#034ca7] via-[#034ca7]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
        <h3 class="text-xl font-bold mb-2">Irin Islam</h3>
        <ul class="text-sm space-y-2 list-disc list-inside text-slate-200">
          <li>BSPT(DU)</li>
          <li>With 4 years of experience as a Consultant Physiotherapist (Neuro &amp; Musculoskeletal Pain Management)</li>
        </ul>
      </div>
    </div>

    {/* <!-- Expert 7: Jasim Uddin --> */}
    <div class="w-full max-w-sm bg-slate-800/40 border border-white/10 rounded-2xl overflow-hidden shadow-xl group relative aspect-[3/4]">
      <img alt="Jasim Uddin" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-in-out" src={dr4}/>
      <div class="absolute inset-0 bg-gradient-to-t from-[#034ca7] via-[#034ca7]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
        <h3 class="text-xl font-bold mb-2">Jasim Uddin</h3>
        <ul class="text-sm space-y-2 list-disc list-inside text-slate-200">
          <li>Senior Consultant Physiotherapist | Lecturer B.Sc in Physiotherapy, University of Dhaka | M.Sc. in Rehabilitation Science at BHPI, CRP (Ongoing)</li>
          <li>7 years at L.E.A.P, Gulshan Labaid Lecturer, Dept. Of Physiotherapy at SCHS</li>
        </ul>
      </div>
    </div>

  </div>
</div>
    );
};

export default HomeTeam;