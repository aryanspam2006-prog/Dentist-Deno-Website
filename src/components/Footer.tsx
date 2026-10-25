const socials = [
  { name: 'Facebook', path: 'M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z' },
  { name: 'Instagram', path: 'M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z' },
  { name: 'X', path: 'M17.687 3.063 12.996 8.4 8.94 3.063H3l7.096 9.281L3.371 20h2.88l5.19-5.912L15.98 20h5.79l-7.4-9.78 6.29-7.157zm-1.01 15.214L6.282 4.698h1.711l10.283 13.579z' },
  { name: 'LinkedIn', path: 'M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z' }
];

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-surface-dark py-14 md:py-16 px-6 md:px-[60px]">
      {/* Oversized wordmark */}
      <div aria-hidden className="hidden lg:block pointer-events-none select-none absolute left-1/2 -translate-x-1/2 -bottom-[0.22em] font-sans font-extrabold text-[16vw] leading-none tracking-[-0.04em] text-white/[0.025] whitespace-nowrap">
        DENTORA
      </div>

      <div className="relative max-w-[1200px] mx-auto">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-12 mb-10 md:mb-14">
          {/* Col 1 */}
          <div className="col-span-2 md:col-span-1">
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
            <a href="tel:8005592648" className="py-1.5 md:py-0 font-sans font-semibold text-sm text-white block">
              (800) 559-2648
            </a>
            <a href="mailto:hello@dentoraclinic.com" className="font-sans font-light text-sm text-white/50 hover:text-white transition-colors block py-1.5 md:py-0 md:mt-1">
              hello@dentoraclinic.com
            </a>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-sans font-semibold text-[0.65rem] md:text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-3 md:mb-5">
              SERVICES
            </h4>
            <div className="flex flex-col md:gap-3">
              {['Dental Check-Up', 'Teeth Cleaning', 'Whitening', 'Implants', 'Veneers', 'Emergency Care'].map((link) => (
                <a key={link} href="#" className="py-2 md:py-0 font-sans font-normal text-sm text-white/55 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-sans font-semibold text-[0.65rem] md:text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-3 md:mb-5">
              CLINIC
            </h4>
            <div className="flex flex-col md:gap-3">
              {['About Us', 'Meet the Team', 'Patient Reviews', 'Blog', 'Careers'].map((link) => (
                <a key={link} href="#" className="py-2 md:py-0 font-sans font-normal text-sm text-white/55 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4 */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-sans font-semibold text-[0.65rem] md:text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-3 md:mb-5">
              OPENING HOURS
            </h4>
            <div className="flex flex-col gap-2 font-sans font-normal text-sm text-white/55">
              <p>Mon – Fri: 8:00am – 7:00pm</p>
              <p>Saturday: 9:00am – 5:00pm</p>
              <p>Sunday: Emergency only</p>
              <p className="text-white/70 mt-2">24/7 Emergency: (800) 559-2648</p>
            </div>
            
            <div className="flex gap-2.5 mt-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="w-10 h-10 md:w-9 md:h-9 rounded-full border border-white/15 text-white/50 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex justify-between items-center flex-wrap gap-4">
          <p className="font-sans font-light text-xs text-white/40">
            © 2026 Dentora Dental Clinic. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="py-2 md:py-0 font-sans font-light text-xs text-white/40 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="py-2 md:py-0 font-sans font-light text-xs text-white/40 hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
