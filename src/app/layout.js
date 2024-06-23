import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "LEO XIA",
  description: "my profile page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-[#f4f4f4]"
        style={{ fontFamily: "Raleway, Helvetica, sans-serif" }}
      >
        <header
          className="flex bg-white border-b border-[#a0a0a04d] h-16 fixed w-screen items-center leading-[3rem] top-0"
          style={{ letterSpacing: ".25rem" }}
        >
          <h1 className="f-w-20 ml-4 text-sm font-bold px-8 text-[#3c3b3b]">
            <a href="/" className="cursor-pointer hover:text-green-500">
              LEO XIA
            </a>
          </h1>
          <nav className="border-l h-[inherit] leading-[inherit] ml-4 px-4 tracking-widest font-thin flex items-center">
            <ul className="flex text-sm text-[#646464]">
              <li className="cursor-pointer hover:text-green-500">ABOUT ME</li>
              <a
                href="https://www.sablogs.cn"
                target="_blank"
                className="flex items-center leading-4 ml-4 pl-4 border-l border-[#a0a0a04d] cursor-pointer hover:text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                <span className="ml-2">BLOG</span>
              </a>
              <li className="leading-4 ml-4 pl-4 border-l border-[#a0a0a04d] cursor-pointer hover:text-green-500">
                PROJECTS
              </li>
              <li className="leading-4 ml-4 pl-4 border-l border-[#a0a0a04d] cursor-pointer hover:text-green-500">
                CONTACT
              </li>
            </ul>
          </nav>
        </header>
        <main className="max-w-[1680px] mx-auto flex p-20 mt-16">
          <section id="sidebar" className="min-w-[26rem] w-[26rem] mr-12">
            <section id="intro">
              <Image
                className="rounded-full"
                style={{ width: "10rem" }}
                width={200}
                height={200}
                src="https://avatars.githubusercontent.com/u/52569690?v=4"
              />
              <h2 className="f-w-20 text-[1.5rem] font-[900] mt-8 tracking-widest text-[#3c3b3b]">
                LEO XIA (XIA YU XUAN)
              </h2>
              <div className="mt-6 text-sm">
                <a
                  className="border-[#a0a0a0a6] tracking-[.25rem] border-b text-[#646464] cursor-pointer hover:text-green-500 border-dashed hover:border-none transition-colors"
                  href="mailto:xiayx.leo@gmail.com"
                  style={{
                    textTransform: "uppercase",
                  }}
                >
                  xiayx.leo@gmail.com
                </a>
              </div>
            </section>

            <section
              id="blurb"
              className="border-t mt-16 pt-16 border-[#a0a0a04d]"
            >
              <h2 className="text-[.8rem] mb-6">ABOUT</h2>
              <p className="text-[#646464] leading-7">
                Hi, I'm Leo. A full stack engineer. I currently work for{" "}
                <a
                  className="border-[#a0a0a0a6] border-b text-[#646464] cursor-pointer hover:text-[#0052D9] border-dashed hover:border-none transition-colors"
                  href="https://www.tencent.com/en-us/index.html"
                  target="_blank"
                >
                  Tencent
                </a>{" "}
                as a Front-end development engineer.
              </p>
            </section>
          </section>
          <section className="w-full">{children}</section>
        </main>
      </body>
    </html>
  );
}
