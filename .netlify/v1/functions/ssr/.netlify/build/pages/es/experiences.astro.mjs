import { c as createComponent, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server_Br2SCbNd.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$EndpointView } from '../../chunks/EndpointView_6_w4SgGl.mjs';
import { P as PORTFOLIO_DATA } from '../../chunks/portfolio-data-es_BX1voazO.mjs';
export { renderers } from '../../renderers.mjs';

const $$Experiences = createComponent(($$result, $$props, $$slots) => {
  const experienceData = {
    experience: PORTFOLIO_DATA.details[1].experience
  };
  const response = {
    code: PORTFOLIO_DATA.code,
    message: PORTFOLIO_DATA.message,
    details: experienceData
  };
  const experienceShowMoreConfig = {
    "details.experience": { limit: 3 }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "EndpointView", $$EndpointView, { "endpointTitle": "Experiences", "dataToShow": response, "showMoreConfig": experienceShowMoreConfig })} ` })}`;
}, "C:/Users/PC PRIDE RACCOON/Desktop/portfolio-web/src/pages/es/experiences.astro", void 0);

const $$file = "C:/Users/PC PRIDE RACCOON/Desktop/portfolio-web/src/pages/es/experiences.astro";
const $$url = "/es/experiences";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Experiences,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
