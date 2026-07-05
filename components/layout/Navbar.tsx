
import Container from "./Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full">
            <Container>
                <div className="mt-4 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-6 backdrop-blur-xl">
                    <Logo />

                    <NavLinks />

                    <div className="hidden lg:block">
                        CTA
                    </div>
                </div>
            </Container>
        </header>
    );
}

// "use client";

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
//       <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
//         <h1 className="text-xl font-bold tracking-tight">
//           Akash Maurya
//         </h1>

//         <div className="hidden gap-8 md:flex">
//           <a href="/">Home</a>
//           <a href="/about">About</a>
//           <a href="/projects">Projects</a>
//           <a href="/services">Services</a>
//           <a href="/blog">Blog</a>
//           <a href="/contact">Contact</a>
//         </div>

//         <button className="rounded-lg bg-white px-5 py-2 text-black transition hover:scale-105">
//           Hire Me
//         </button>
//       </nav>
//     </header>
//   );
// }