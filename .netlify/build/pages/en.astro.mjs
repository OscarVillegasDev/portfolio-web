import { c as createComponent, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_Br2SCbNd.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$EndpointView } from '../chunks/EndpointView_6_w4SgGl.mjs';
import { P as PORTFOLIO_DATA } from '../chunks/portfolio-data-en_DsYw2Aej.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const personalData = {
    personalInfo: PORTFOLIO_DATA.details[0].personalInfo,
    summary: PORTFOLIO_DATA.details[0].summary
  };
  const response = {
    code: PORTFOLIO_DATA.code,
    message: PORTFOLIO_DATA.message,
    details: personalData
  };
  const fieldsToCopy = [
    "details.personalInfo.fullName",
    "details.personalInfo.email",
    "details.personalInfo.phone",
    "details.personalInfo.linkedin"
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "EndpointView", $$EndpointView, { "endpointTitle": "Personal-Data", "dataToShow": response, "isHomePage": true, "copyableFields": fieldsToCopy })} ` })}`;
}, "C:/Users/PC PRIDE RACCOON/Desktop/portfolio-web/src/pages/en/index.astro", void 0);

const $$file = "C:/Users/PC PRIDE RACCOON/Desktop/portfolio-web/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
