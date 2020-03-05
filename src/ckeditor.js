/**
 * @license Copyright (c) 2014-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import InlineEditor from "@ckeditor/ckeditor5-editor-inline/src/inlineeditor.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import Autosave from "@ckeditor/ckeditor5-autosave/src/autosave.js";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code.js";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock.js";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
import PageBreak from "@ckeditor/ckeditor5-page-break/src/pagebreak.js";
import Mention from "@ckeditor/ckeditor5-mention/src/mention.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock.js";
import MediaEmbedToolbar from "@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat.js";
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters.js";
import SpecialCharactersArrows from "@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js";
import SpecialCharactersEssentials from "@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js";
import SpecialCharactersCurrency from "@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js";
import SpecialCharactersMathematical from "@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js";
import SpecialCharactersText from "@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript.js";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough.js";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript.js";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import Title from "@ckeditor/ckeditor5-heading/src/title.js";
import TodoList from "@ckeditor/ckeditor5-list/src/todolist";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
//unused in default build
// import MathType from "@wiris/mathtype-ckeditor5";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder.js";
import CKFinderUploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js";

export default class CloudInEditor extends InlineEditor {}

// Plugins to include in the build.
CloudInEditor.builtinPlugins = [
  Bold,
  Italic,
  BlockQuote,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  Link,
  List,
  MediaEmbed,
  PasteFromOffice,
  Table,
  TableToolbar,
  Alignment,
  Autosave,
  Code,
  CodeBlock,
  FontBackgroundColor,
  FontColor,
  FontSize,
  Highlight,
  FontFamily,
  HorizontalLine,
  ImageResize,
  PageBreak,
  Mention,
  Autoformat,
  IndentBlock,
  MediaEmbedToolbar,
  RemoveFormat,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersEssentials,
  SpecialCharactersCurrency,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Subscript,
  Strikethrough,
  Superscript,
  TableCellProperties,
  TableProperties,
  Title,
  TodoList,
  Underline,
  WordCount,
  Essentials,
  Paragraph,
  //unused in default
  // MathType,
  CKFinder,
  CKFinderUploadAdapter
];

// Editor configuration.
InlineEditor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "link",
      "bulletedList",
      "todoList",
      "numberedList",
      "fontFamily",
      "fontSize",
      "fontColor",
      "fontBackgroundColor",
      "highlight",
      "|",
      "alignment",
      "indent",
      "outdent",
      "pageBreak",
      "removeFormat",
      "horizontalLine",
      "|",
      // "CKFinder",
      "imageUpload",
      "blockQuote",
      "insertTable",
      "mediaEmbed",
      "subscript",
      "superscript",
      "specialCharacters",
      "code",
      "codeBlock",
      "undo",
      "redo"
    ]
  },
  language: "en",
  image: {
    toolbar: ["imageTextAlternative", "imageStyle:full", "imageStyle:side"]
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableCellProperties",
      "tableProperties"
    ]
  },
  licenseKey: ""
};
