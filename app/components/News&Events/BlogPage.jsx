import { FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";

export default function BlogPage() {
  return (
    <div className="w-full px-[100px] py-8 flex flex-col md:flex-row items-start gap-6">
      {/* LEFT: Main Article */}
      <div className="flex-1 min-w-0">
        <div className="prose lg:prose-xl max-w-none">
          <div className="tmb-4">
            <p className="normal-text-regular mb-[-50px]">
              <span className="text-[#5C5C5C]">Home &gt; </span>
              <span className="text-[#092C4C]">News &amp; Events</span>
            </p>
            <img
              src="/images/post1header.png"
              className="w-[776px] h-[276px]"
              alt=""
            />
          </div>
          <div>
            <p className="w-[757px] text-[#5C5C5C] normal-text-regular mb-5 mt-10">
              <span className="normal-text-bold text-[#5C5C5C]">
                When was the last time you opened your phone just to make a
                call?{" "}
              </span>
              Chances are, your answer reflects how dramatically mobile usage
              has evolved.
            </p>
            <p className="w-[775px] normal-text-regualar text-[#5C5C5C] mb-5">
              For most users today, smartphones serve a far greater purpose than
              voice communication. They are essential tools for managing daily
              life—enabling everything from banking and healthcare access to
              work coordination, shopping, and entertainment. At the center of
              this digital experience are{" "}
              <span className="normal-text-bold">mobile applications.</span>
            </p>
            <p className="w-[775px] normal-text-regualar text-[#5C5C5C] mb-5">
              However, in a marketplace flooded with millions of apps,
              functionality alone is no longer enough. Users expect{" "}
              <span className="normal-text-bold">
                speed, reliability, security, and a seamless interface
              </span>
              —all delivered effortlessly, every time they interact with an
              app. 
            </p>
            <p className="w-[724px] normal-text-regular mb-10 text-[#5C5C5C]">
              <span className="normal-text-bold">Native app development</span>{" "}
              offers a direct answer to this challenge. In the sections ahead,
              we explore the{" "}
              <span className="normal-text-bold">
                benefits of native mobile app development
              </span>{" "}
              and why it remains the preferred choice for organizations focused
              on long-term growth and user satisfaction.
            </p>
            <h1 className="large-text-bold text-[#092C4C]">
              1. Exceptional Speed and Responsiveness
            </h1>
            <p className="w-[739px] text-[#5C5C5C] mb-5">
              Native applications are developed using platform-specific
              languages and tools, which allows them to run directly on the
              device’s operating system. This results in{" "}
              <span className="normal-text-bold">
                faster load times, efficient memory usage, and consistently
                smooth interactions
              </span>
            </p>
            <p className="w-[755px] text-[#5C5C5C] mb-5">
              Because there are no intermediary layers, native apps can process
              user inputs, animations, and transitions more quickly—delivering a
              responsive experience even under high-performance demands such as
              real-
              <br />
              time <br />
              updates, media playback, or data-heavy operations.
            </p>
            <h1 className="large-text-bold text-[#092C4C] mb-10">
              2. Flawless User Experience 
            </h1>
            <p className="normal-text-regular w-[753px] text-[#5C5C5C] mb-5">
              Native development allows designers and developers to follow the
              official interface guidelines of each platform. This ensures the
              app looks, feels, and behaves exactly as users expect,
              contributing to familiarity and ease of use.
            </p>
            <p className="normal-text-regular w-[765px] text-[#5C5C5C]">
              With access to native UI components, the app can incorporate
              standard gestures, transitions, and navigation patterns. As a
              result, users experience a consistent, intuitive interface that
              feels seamlessly integrated into their device environment.
            </p>
            <h1 className="large-text-bold text-[#092C4C] mb-10">
              3. Full Integration with Device Capabilities
            </h1>
            <p className="w-[753px] normal-text-regular text-[#5C5C5C]">
              A native app can interact directly with the core hardware and
              software features of the device, without relying
              <br /> on external plugins or bridging layers. This level of
              access makes it possible to implement advanced functionalities
              such as{" "}
            </p>
            <p className="w-[735px] normal-text-regular text-[#5C5C5C]">
              These capabilities allow developers to build richer, more reliable
              features—whether it’s enabling location tracking, using the camera
              for document capture, or triggering haptic feedback during key
              actions.
            </p>
            <h1 className="large-text-bold text-[#092C4C] mb-10">
              4. Reliable Access Without Network Dependency
            </h1>
            <p className="w-[735px] normal-text-regular text-[#5C5C5C]">
              One of the often-overlooked advantages of native apps is their
              ability to function without constant internet access. Native
              development supports local data storage and caching, enabling the
              app to perform key tasks even when offline.
            </p>
            <p className="w-[735px] normal-text-bold mb-5 text-[#5C5C5C]">
              Common offline functionalities include:
            </p>
            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-5 text-[#5C5C5C] text-sm">
                <span className="mt-0 text-sm text-[#5C5C5C]">•</span>
                <span>
                  Viewing previously loaded content such as articles, videos, or
                  product catalogs
                </span>
              </li>
              <li className="flex items-start gap-5 text-[#5C5C5C] text-sm">
                <span className="mt-0 text-sm text-[#5C5C5C]">•</span>
                <span>
                  Filling out forms or entering data, which can sync once the
                  connection is restored
                </span>
              </li>
              <li className="flex items-start gap-5 text-[#5C5C5C] text-sm">
                <span className="mt-0 text-sm text-[#5C5C5C]">•</span>
                <span>
                  Accessing maps or travel itineraries without live GPS updates
                </span>
              </li>
              <li className="flex items-start gap-5 text-[#5C5C5C] text-sm">
                <span className="mt-0 text-sm text-[#5C5C5C]">•</span>
                <span>
                  Completing step-by-step workflows in productivity or field
                  service apps
                </span>
              </li>
            </ul>
            <p className="w-[735px] normal-text-regular text-[#5C5C5C] mb-5">
              This level of offline capability ensures a more dependable user
              experience, particularly in areas with limited or unstable
              connectivity.
            </p>
            <h1 className="large-text-bold text-[#092C4C] mb-10">
              5. Strong Security Architecture
            </h1>
            <p className="w-[774px] text-[#5C5C5C] mb-5">
              Native app development offers access to the full range of
              platform-specific security features, enabling a more robust and
              controlled approach to protecting user data. Developers can
              implement secure storage mechanisms such as the{" "}
              <span className="normal-text-bold">
                iOS Keychain or Android Keystore, integrate biometric
                authentication
              </span>
              , and enforce encrypted data transmission using native APIs.
            </p>
            <p className="w-[765px] text-[#5C5C5C] mb-10">
              In regulated industries; such as healthcare, finance, and
              enterprise software, this level of control is essential. It allows
              applications to meet compliance requirements more effectively,
              <span className="normal-text-bold">reduce exposure to vulnerabilities</span>, and maintain the integrity of
              sensitive user information across the entire app lifecycle.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT: Sidebar */}
      <div className="w-full md:w-[363px] flex-shrink-0 space-y-6 mt-10">
        {/* Search Bar */}
        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#092C4C w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-9 pr-2 py-1.5 text-sm border border-[#a2a2a2] rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <h4 className="normal-text-bold text-[#092C4C]">Recent Posts</h4>
        {/* Post List */}
        <div className="space-y-2">
          <div className="flex items-start gap-3 cursor-pointer hover:text-blue-600">
            <img src="/images/rp1.png" alt="" />
            <div className="text-sm">
              <p className="normal-text-bold text-[#092C4C]">
                10 Critical Questions to Ask a Mobile App Development…
              </p>
            </div>
          </div>
          {/* Repeat above div manually or map later */}
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3 cursor-pointer hover:text-blue-600">
            <img src="/images/rp2.png" alt="" />
            <div className="text-sm">
              <p className="normal-text-bold text-[#092C4C]">
                Outsourcing Flutter Development: Benefits,…
              </p>
            </div>
          </div>
          {/* Repeat above div manually or map later */}
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3 cursor-pointer hover:text-blue-600">
            <img src="/images/rp3.png" alt="" />
            <div className="text-sm">
              <p className="normal-text-bold text-[#092C4C]">
                Introduction To Web App Development A Complete…
              </p>
            </div>
          </div>
          {/* Repeat above div manually or map later */}
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3 cursor-pointer hover:text-blue-600">
            <img src="/images/rp4.png" alt="" />
            <div className="text-sm">
              <p className="normal-text-bold text-[#092C4C]">
                Tailoring Mobile App Solutions For Small…
              </p>
            </div>
          </div>
          {/* Repeat above div manually or map later */}
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3 cursor-pointer hover:text-blue-600">
            <img src="/images/rp5.png" alt="" />
            <div className="text-sm">
              <p className="normal-text-bold text-[#092C4C]">
                How Much Does It Cost to Develop an App in 2024? A…
              </p>
            </div>
          </div>
          {/* Repeat above div manually or map later */}
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3 cursor-pointer hover:text-blue-600">
            <img src="/images/rp6.png" alt="" />
            <div className="text-sm">
              <p className="normal-text-bold text-[#092C4C]">
                Tips for Effective Communication with Remo…
              </p>
            </div>
          </div>
          {/* Repeat above div manually or map later */}
        </div>

        {/* Pagination */}
        <div className="flex gap-2 justify-center text-sm pt-4">
          {/* Left Arrow */}
          <button className="h-[32px] w-[32px] flex items-center justify-center border border-[#DADADA] rounded-[8px] text-[#092C4C] hover:border-[##0F70B7] hover:bg-[#0F70B7] hover:text-white transition duration-300">
            <FiChevronLeft className="w-5 h-5" />
          </button>

          {/* Page Numbers */}
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className="h-[32px] w-[32px] flex items-center justify-center border border-[#DADADA] rounded-[8px] text-[#092C4C] small-text-bold hover:border-[##0F70B7] hover:bg-[#0F70B7] hover:text-white transition duration-300"
            >
              {num}
            </button>
          ))}

          {/* Right Arrow */}
          <button className="h-[32px] w-[32px] flex items-center justify-center border border-[#DADADA] rounded-[8px] text-[#092C4C] hover:border-[##0F70B7] hover:bg-[#0F70B7] hover:text-white transition duration-300">
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}