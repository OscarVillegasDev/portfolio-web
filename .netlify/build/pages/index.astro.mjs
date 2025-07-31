import { c as createComponent, d as createAstro } from '../chunks/astro/server_Br2SCbNd.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const langHeader = Astro2.request.headers.get("accept-language");
  const userLang = langHeader?.split(",")[0].split("-")[0];
  if (userLang === "es") {
    return Astro2.redirect("/es");
  } else {
    return Astro2.redirect("/en");
  }
}, "C:/Users/PC PRIDE RACCOON/Desktop/portfolio-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/PC PRIDE RACCOON/Desktop/portfolio-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
