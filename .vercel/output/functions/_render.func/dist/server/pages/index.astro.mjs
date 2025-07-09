import { c as createComponent, a as createAstro, b as renderHead, r as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_ueu1cKe0.mjs';
import 'kleur/colors';
import 'clsx';
import { diffWords } from 'jsdiff';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../content/forecasts/2024-05-21.md": () => import('../chunks/2024-05-21_DAbr3jGh.mjs'),"../content/forecasts/2024-05-22.md": () => import('../chunks/2024-05-22_BqtI6o5z.mjs'),"../content/forecasts/2025-06-30.md": () => import('../chunks/2025-06-30_p88TkSC4.mjs'),"../content/forecasts/2025-07-07.md": () => import('../chunks/2025-07-07_B3TkzyVU.mjs')}), () => "../content/forecasts/*.md");
  const sortedPosts = allPosts.sort((a, b) => {
    const dateA = a.frontmatter.date ? new Date(a.frontmatter.date).getTime() : 0;
    const dateB = b.frontmatter.date ? new Date(b.frontmatter.date).getTime() : 0;
    return dateB - dateA;
  });
  const latestPost = sortedPosts.length > 0 ? sortedPosts[0] : null;
  const previousPost = sortedPosts.length > 1 ? sortedPosts[1] : null;
  const models = ["gpt-4o", "gemini", "claude"];
  function createDiffHtml(latestText, previousText) {
    if (latestText === null || latestText === void 0) {
      return "<span>N/A</span>";
    }
    if (previousText === null || previousText === void 0) {
      return latestText;
    }
    const diff = diffWords(String(previousText), String(latestText));
    return diff.map((part) => {
      if (part.added) {
        return `<span class="added">${part.value}</span>`;
      }
      if (part.removed) {
        return `<del>${part.value}</del>`;
      }
      return part.value;
    }).join("");
  }
  const predictionsWithDiff = models.map((model) => {
    const latestPrediction = latestPost?.frontmatter?.predictions?.[model];
    const previousPrediction = previousPost?.frontmatter?.predictions?.[model];
    return {
      model,
      diffHtml: createDiffHtml(latestPrediction, previousPrediction)
    };
  });
  const latestDate = latestPost?.frontmatter?.date;
  return renderTemplate`<html lang="ja" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>AIによるAGI実現予測の定点観測</title>${renderHead()}</head> <body data-astro-cid-j7pv25f6> <header data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>AIによるAGI実現予測の定点観測</h1> ${latestDate ? renderTemplate`<p data-astro-cid-j7pv25f6>最新の予測 (${latestDate})</p>` : renderTemplate`<p data-astro-cid-j7pv25f6>予測データがありません。</p>`} </header> <main data-astro-cid-j7pv25f6> ${predictionsWithDiff.map((prediction) => renderTemplate`<div class="prediction-container" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>${prediction.model.toUpperCase()}</h2> <p data-astro-cid-j7pv25f6>${unescapeHTML(prediction.diffHtml)}</p> </div>`)} </main> </body></html>`;
}, "D:/Gemini-cli/test/my-ai-predictions/src/pages/index.astro", void 0);

const $$file = "D:/Gemini-cli/test/my-ai-predictions/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
