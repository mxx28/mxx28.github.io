import MarkdownIt from 'markdown-it';
import katex from '@vscode/markdown-it-katex';

const md = new MarkdownIt('default', {
  html: true,
  linkify: true,
  typographer: true,
}).use(katex);

export function processMarkdownWithMath(content: string): string {
  return md.render(content);
}
