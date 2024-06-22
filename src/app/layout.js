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
          className="flex bg-white border-b border-[#a0a0a04d] h-16 fixed w-screen items-center leading-[3rem]"
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
              <li className="leading-4 ml-4 pl-4 border-l border-[#a0a0a04d] cursor-pointer hover:text-green-500">
                MY BLOG
              </li>
              <li className="leading-4 ml-4 pl-4 border-l border-[#a0a0a04d] cursor-pointer hover:text-green-500">
                PROJECTS
              </li>
              <li className="leading-4 ml-4 pl-4 border-l border-[#a0a0a04d] cursor-pointer hover:text-green-500">
                CONTACT
              </li>
            </ul>
          </nav>
        </header>
        <main className="w-[90rem] max-w-screen-xl mx-auto px-20 flex pt-36">
          <div className="min-w-96 mr-12">
            <Image
              className="rounded-full"
              style={{ width: "10rem" }}
              width={200}
              height={200}
              src="https://avatars.githubusercontent.com/u/52569690?v=4"
            />
            <h2 className="f-w-20 text-[1.8rem] font-bold mt-8 tracking-widest text-[#3c3b3b]">
              LEO XIA (XIAYUXUAN)
            </h2>
            <div className="mt-4 text-sm">
              <a
                className="tracking-[.25rem] border-b text-[#646464]"
                href="mailto:xiayx.leo@gmail.com"
                style={{
                  fontFamily: "Raleway,Helvetica,sans-serif",
                  textTransform: "uppercase",
                }}
              >
                xiayx.leo@gmail.com
              </a>
            </div>
          </div>
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
