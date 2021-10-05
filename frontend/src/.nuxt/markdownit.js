import MarkdownIt from 'markdown-it'

const handlePlugin = (plugin) => plugin.default || plugin

export default ({}, inject) => {
  const md = new MarkdownIt('default', {"linkify":true,"breaks":true})

  md.use(handlePlugin(require('markdown-it-plain-text')))

  md.use(handlePlugin(require('markdown-it-title')), {"level":1,"excerpt":2} )

  inject('md', md)
}