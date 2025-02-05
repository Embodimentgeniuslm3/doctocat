import {MDXProvider} from '@mdx-js/react'
import {Link, ThemeProvider} from '@primer/components'
import React from 'react'
import Blockquote from './blockquote'
import Caption from './caption'
import Code from './code'
import DescriptionList from './description-list'
import {Do, DoDontContainer, Dont} from './do-dont'
import {H1, H2, H3, H4, H5, H6} from './heading'
import HorizontalRule from './horizontal-rule'
import Image from './image'
import ImageContainer from './image-container'
import InlineCode from './inline-code'
import List from './list'
import Note from './note'
import Paragraph from './paragraph'
import Table from './table'

const components = {
  a: Link,
  pre: props => props.children,
  code: Code,
  inlineCode: InlineCode,
  table: Table,
  img: Image,
  p: Paragraph,
  hr: HorizontalRule,
  blockquote: Blockquote,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  ul: List,
  ol: List.withComponent('ol'),
  dl: DescriptionList,

  // Shortcodes (https://mdxjs.com/blog/shortcodes)
  Note,
  Do,
  Dont,
  DoDontContainer,
  Caption,
  ImageContainer
}

function wrapRootElement({element}) {
  return (
    <MDXProvider components={components}>
      <ThemeProvider>{element}</ThemeProvider>
    </MDXProvider>
  )
}

export default wrapRootElement
