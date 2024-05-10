import type { Plugin } from 'vitepress';

import { getPageWords } from '../../docs/utils/page';

export function MarkdownTransform(): Plugin {
  return {
    name: 'redlonely-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/)) {
        return null;
      }

      const [_name, i] = id.split('/').slice(-2);

      // convert img
      const imgRegex = /!\[(.*?)\]\((.*?)\)/g;
      let imgMatches = imgRegex.exec(code);
      while (imgMatches) {
        const [text, link] = imgMatches.slice(1);
        code = code.replace(
          imgMatches[0],
          `<Img link="${link}" text={${text}} />`,
        );
        imgMatches = imgRegex.exec(code);
      }

      if (_name === 'docs' && i === 'index.md') return code;

      const { footer } = await getDocsMarkdown();

      code = replacer(code, footer, 'FOOTER', 'tail');

      const { words } = getPageWords(code);

      code = code.replace(/(#\s.+)/, `$1\n\n<Pageinfo words="${words}" />\n\n`);

      return code;
    },
  };
}

function replacer(
  code: string,
  value: string,
  key: string,
  insert: 'head' | 'tail' | 'none' = 'none',
) {
  const START = `<!--${key}_STARTS-->`;
  const END = `<!--${key}_ENDS-->`;
  const regex = new RegExp(`${START}[\\s\\S]*?${END}`, 'im');

  const target = value ? `${START}\n${value}\n${END}` : `${START}${END}`;

  if (!code.match(regex)) {
    if (insert === 'none') return code;
    else if (insert === 'head') return `${target}\n\n${code}`;
    else return `${code}\n\n${target}`;
  }

  return code.replace(regex, target);
}

export async function getDocsMarkdown() {
  const ContributorsSection = `## Contributors
  <Contributors/>`;

  const CopyRightSection = `
  <CopyRight/>`;

  const footer = `${ContributorsSection}\n${CopyRightSection}\n`;

  return {
    footer,
  };
}
