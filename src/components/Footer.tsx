// Icons removed for now or use valid icons if needed

export function Footer() {
  return (
    <footer id="contact" className="bg-surface-dark py-16 px-6 md:px-[60px]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-white">
                  <path d="M12 2C8.686 2 6 4.686 6 8c0 3.314 2.686 6 6 6s6-2.686 6-6c0-3.314-2.686-6-6-6zM12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z" />
                </svg>
              </div>
              <span className="font-sans font-extrabold text-[1.1rem] text-white tracking-[-0.01em]">
                DENTORA
              </span>
            </div>
            <p className="font-sans font-light text-[0.7rem] text-white/40 tracking-[0.1em] mt-1 mb-5">
              Your Family's Dental Clinic
            </p>
            <a href="tel:8005592648" className="font-sans font-semibold text-sm text-white block">
              (800) 559-2648
            </a>
            <a href="mailto:hello@dentoraclinic.com" className="font-sans font-light text-sm text-white/50 hover:text-white transition-colors block mt-1">
              hello@dentoraclinic.com
            </a>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-sans font-semibold text-[0.6rem] tracking-[0.2em] uppercase text-white/30 mb-5">
              SERVICES
            </h4>
            <div className="flex flex-col gap-3">
              {['Dental Check-Up', 'Teeth Cleaning', 'Whitening', 'Implants', 'Veneers', 'Emergency Care'].map((link) => (
                <a key={link} href="#" className="font-sans font-normal text-sm text-white/55 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-sans font-semibold text-[0.6rem] tracking-[0.2em] uppercase text-white/30 mb-5">
              CLINIC
            </h4>
            <div className="flex flex-col gap-3">
              {['About Us', 'Meet the Team', 'Patient Reviews', 'Blog', 'Careers'].map((link) => (
                <a key={link} href="#" className="font-sans font-normal text-sm text-white/55 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-sans font-semibold text-[0.6rem] tracking-[0.2em] uppercase text-white/30 mb-5">
              OPENING HOURS
            </h4>
            <div className="flex flex-col gap-2 font-sans font-normal text-sm text-white/55">
              <p>Mon – Fri: 8:00am – 7:00pm</p>
              <p>Saturday: 9:00am – 5:00pm</p>
              <p>Sunday: Emergency only</p>
              <p className="text-white/70 mt-2">24/7 Emergency: (800) 559-2648</p>
            </div>
            
            <div className="flex gap-5 mt-5 text-white/30">
              <a href="#" className="hover:text-white transition-colors">FB</a>
              <a href="#" className="hover:text-white transition-colors">IG</a>
              <a href="#" className="hover:text-white transition-colors">TW</a>
              <a href="#" className="hover:text-white transition-colors">LI</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex justify-between items-center flex-wrap gap-4">
          <p className="font-sans font-light text-xs text-white/30">
            © 2026 Dentora Dental Clinic. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="font-sans font-light text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="font-sans font-light text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
