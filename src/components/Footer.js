import Narrower from "./Narrower";

function Footer() {
  return (
    <footer className="pt-12 relative bg-white w-screen">
      <div class="w-screen h-32 absolute bottom-full opacity-90" />
      <Narrower className="grid gap-4 pb-4">
        <div class="grid place-content-center gap-1">
          <span class="justify-self-center text-sm text-black">
            Copyright © 2022. Nicolas Ludueña
          </span>
        </div>
        <div class="justify-self-end grid grid-flow-col gap-4 text-2xl">
          <a
            className="uppercase font-semibold transition-all opacity-80 hover:opacity-100"
            href="#"
            target="_BLANK"
          >
            <i className="fa-brands fa-whatsapp" />
          </a>
          <a
            className="uppercase font-semibold transition-all opacity-80 hover:opacity-100"
            href="https://www.instagram.com/nicolasluduena7/"
            target="_BLANK"
          >
            <i className="fa-brands fa-instagram" />
          </a>
          <a
            className="uppercase font-semibold transition-all opacity-80 hover:opacity-100"
            href="https://www.linkedin.com/in/nicolas-ludue%C3%B1a-aba674239/"
            target="_BLANK"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
          <a
            className="uppercase font-semibold transition-all opacity-80 hover:opacity-100"
            href="mailto:nicolascluduena@gmail.com"
            target="_BLANK"
          >
            <i className="fa-regular fa-envelope" />
          </a>
        </div>
      </Narrower>
    </footer>
  );
}

export default Footer;
