function Footer() {
  return (
    <footer>
      <div className="h-auto bg-[#0C2945]">
        <div>
          {/* Links Column 1 */}
          <div className="flex flex-row gap-20 justify-between max-sm:text-center flex-wrap px-[100px] pt-[80px] max-sm:flex-col max-sm:px-2 max-sm:pt-10">
            <div className="flex flex-row gap-20 max-sm:gap-4 px-">
              <div className="max-sm:mx-auto">
                <h1 className="normal-text-bold text-white">Our Services</h1>
                <ul className="list-none small-text-regular space-y-3">
                  <li className="text-[#EEEEEE]">
                    <a href="/services1">Branding & UI/UX Design</a>
                  </li>
                  <li className="text-[#EEEEEE]">
                    <a href="/services3">Product Development</a>
                  </li>
                  <li className="text-[#EEEEEE]">
                    <a href="/services2">E-Commerce Solutions</a>
                  </li>
                  <li className="text-[#EEEEEE]">
                    <a href="/services4">Digital Marketing</a>
                  </li>
                </ul>
              </div>
              <div className="max-sm:mx-auto">
                <h1 className="normal-text-bold text-white">Our Solutions</h1>
                <ul className="list-none small-text-regular space-y-3">
                  <li className="text-[#EEEEEE]">
                    <a href="#">Video Surveillance Systems</a>
                  </li>
                  <li className="text-[#EEEEEE]">
                    <a href="#">Security Barriers</a>
                  </li>
                  <li className="text-[#EEEEEE]">
                    <a href="#">Access Control Systems</a>
                  </li>
                  <li className="text-[#EEEEEE]">
                    <a href="#">POC Development</a>
                  </li>
                  <li className="text-[#EEEEEE]">
                    <a href="#">AI Software Development</a>
                  </li>
                </ul>
              </div>
              <div className="max-sm:mx-auto">
                <h1 className="normal-text-bold text-white">General Links</h1>
                <ul className="list-none small-text-regular space-y-3">
                  <li className="text-[#EEEEEE]">
                    <a href="/">Home</a>
                  </li>
                  <li className="text-[#EEEEEE]">
                    <a href="/about">About Us</a>
                  </li>
                  <li className="text-[#EEEEEE]">
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li className="text-[#EEEEEE]">
                    <a href="/partners">Partners</a>
                  </li>
                  <li className="text-[#EEEEEE]">
                    <a href="#">News & Events</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Awards Section */}
            <div className="max-sm:mt-0 max-sm:mx-auto">
              <h1 className="normal-text-bold text-white mb-3 max-sm:text-center">
                Awards & Certifications
              </h1>
              <div className="flex flex-row gap-2 max-sm:justify-center">
                <div className="flex flex-row mb-2 gap-2">
                  <div className="w-[210px] h-[120px] bg-white rounded-[8px]">
                    <img src="/images/award 1.jpg" className="w-full h-full rounded-[8px]" alt="" />
                  </div>
                  <div className="w-[180px] h-[120px] bg-white rounded-[8px]">
                    <img src="/images/award 2.png" className="w-full h-full rounded-[8px]" alt="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 max-sm:justify-center">
                <div className="w-[120px] h-[170px] bg-white rounded-[8px]">
                  <img src="/images/award 3.png" className="w-full h-full rounded-[8px]" alt="" />
                </div>
                <div className="w-[272px] h-[170px] bg-white rounded-[8px]">
                  <img src="/images/award 4.jpg" className="w-full h-full rounded-[8px]" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Info with Equal Box Widths */}
          <div className="mt-10 border border-[#F5F5F51A] overflow-hidden">
            <div className="flex flex-row justify-between w-full max-sm:flex-col max-sm:items-stretch">
              {/* Shared Box Styles */}
              {[
                {
                  content: (
                    <img
                      src="/images/secutechWhite logo.png"
                      className="h-[113px] w-[231px] mx-auto"
                      alt="Logo"
                    />
                  ),
                },
                {
                  title: "Address",
                  content: (
                    <p className="small-text-regular text-[#EEEEEE] text-center sm:text-left">
                      Jeddah, Makkah Province,
                      <br />
                      Saudi Arabia
                    </p>
                  ),
                },
                {
                  title: "Contact Us",
                  content: (
                    <>
                      <div className="flex items-center gap-2 small-text-regular text-[#EEEEEE] mb-1 justify-center sm:justify-start">
                        <img
                          src="/images/icons/EmailIcon.png"
                          className="w-5 h-5"
                          alt="Email"
                        />
                        info@secutecharabia.com
                      </div>
                      <div className="flex items-center gap-2 small-text-regular text-[#EEEEEE] justify-center sm:justify-start">
                        <img
                          src="/images/icons/PhoneIcon.png"
                          className="w-5 h-5"
                          alt="Phone"
                        />
                        +966 123 456 789
                      </div>
                    </>
                  ),
                },
                {
                  title: "Follow Us",
                  content: (
                    <div className="flex gap-2 justify-center sm:justify-start">
                      <a href="https://www.youtube.com/channel/UCz8KBdA0xz3dSYU8N2cnfLw">
                        <img
                          src="/images/icons/ytIcon.png"
                          className="hover:scale-95 transition duration-300"
                          alt="YouTube"
                        />
                      </a>
                      <a href="https://www.facebook.com/secutecharabia.pk/">
                        <img
                          src="/images/icons/fbIcon.png"
                          className="hover:scale-95 transition duration-300"
                          alt="Facebook"
                        />
                      </a>
                      <a href="https://www.instagram.com/p/DI4Ws87IYQr/">
                        <img
                          src="/images/icons/InsIcon.png"
                          className="hover:scale-95 transition duration-300"
                          alt="Instagram"
                        />
                      </a>
                      <a href="https://x.com/secutecharabia">
                        <img
                          src="/images/icons/xIcon.png"
                          className="hover:scale-95 transition duration-300"
                          alt="Twitter"
                        />
                      </a>
                    </div>
                  ),
                },
              ].map((box, index) => (
                <div
                  key={index}
                  className={`w-1/4 px-6 py-6 border-l border-[#F5F5F51A] max-sm:w-full max-sm:border-l-0 ${
                    index === 0 ? "border-l-0" : ""
                  } max-sm:border-b`}
                >
                  {box.title && (
                    <h1 className="normal-text-bold text-white mb-2 text-center sm:text-left">
                      {box.title}
                    </h1>
                  )}
                  {box.content}
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-row justify-between items-center py-5 px-[100px] max-sm:flex-col max-sm:text-center max-sm:gap-3 max-sm:px-6">
            <h3 className="small-text-regular text-[#EEEEEE]">
              © 2025 | Secutech All rights reserved.
            </h3>
            <h3 className="small-text-regular text-[#A3D348]">Want to unlock something special? Try pressing S, T, and A on the homepage.</h3>
            <h3 className="small-text-regular text-[#EEEEEE]">
              Designed and Developed by DevTech Fusion.
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
