<template>
  <div>
    <editor-menu-bar :editor="editor">
      <div slot-scope="{ commands, isActive }">
        <div>
          <button
            class="w3-button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <i class="fas fa-bold"></i>
          </button>

          <button
            class="w3-button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <i class="fas fa-italic"></i>
          </button>

          <button
            class="w3-button"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          >
            <i class="fas fa-strikethrough"></i>
          </button>

          <button
            class="w3-button"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <i class="fas fa-underline"></i>
          </button>

          <button
            class="w3-button"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            <strong>H1</strong>
          </button>

          <button
            class="w3-button"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            <strong>H2</strong>
          </button>

          <button
            class="w3-button"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            <strong>H3</strong>
          </button>

          <button
            class="w3-button"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <i class="fas fa-list-ul"></i>
          </button>

          <button
            class="w3-button"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <i class="fas fa-list-ol"></i>
          </button>

          <button
            class="w3-button"
            :class="{ 'is-active': isActive.blockquote() }"
            @click="commands.blockquote"
          >
            <i class="fas fa-quote-left"></i>
          </button>

          <button
            class="w3-button"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <i class="fas fa-code"></i>
          </button>

          <button class="w3-button" @click="commands.horizontal_rule">
            <strong>─</strong>
          </button>

          <button class="w3-button" @click="showImagePrompt(commands.image)">
            <i class="fas fa-images"></i>
          </button>
          <button
            class="w3-button"
            @click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: false })"
          >
            <i class="fas fa-table"></i>
          </button>
          <br />
          <span v-if="isActive.table()">
            <button class="w3-button" @click="commands.deleteTable">표제거</button>
            <button class="w3-button" @click="commands.addColumnBefore">왼쪽 열추가</button>
            <button class="w3-button" @click="commands.addColumnAfter">오른쪽 열 추가</button>
            <button class="w3-button" @click="commands.deleteColumn">열 삭제</button>
            <button class="w3-button" @click="commands.addRowBefore">위로 행 추가</button>
            <button class="w3-button" @click="commands.addRowAfter">아래로 행 추가</button>
            <button class="w3-button" @click="commands.deleteRow">행 삭제</button>
            <button class="w3-button" @click="commands.toggleCellMerge">셀 합치기</button>
          </span>
        </div>
      </div>
    </editor-menu-bar>
    <hr />
    <editor-content :editor="editor" class="w3-border" />
    <div class="export">
      <h3>JSON</h3>
      <span v-html="json"></span>
      <h3>HTML</h3>
      {{ html }}
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  Focus,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  Image
} from "tiptap-extensions";
export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  data() {
    return {
      searchTerm: null,
      replaceWith: null,
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new Focus({
            className: "hasFocus",
            nested: true
          }),
          new Table({
            resizable: true
          }),
          new TableHeader(),
          new TableCell(),
          new TableRow(),
          new Image(),
        ],
        content: null,
        autoFocus: true,
        comments: {},
        onUpdate: ({ getJSON, getHTML }) => {
          this.json = getJSON();
          this.html = getHTML();
        }
      }),
      json: "json으로 변환한 결과",
      html: "html로 변환한 결과"
    };
  },
  methods: {
    showImagePrompt(command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    }
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>

<style>
/* 에디터 스타일 시작 */
div.ProseMirror {
  min-width: 150px;
  overflow: auto;
}
/* 에디터 스타일 끝 */

/* 코드 블록 스타일 */
pre {
  padding: 20px 20px 20px 20px;
  margin-left: 20px;
  margin-right: 30px;
  background: black;
  border-radius: 10px;
  color: white;
  font-weight: bold;
}
/* 표 스타일 시작 */
div.resize-cursor {
  cursor: e-resize;
}
div.ProseMirror div.tableWrapper table col {
  width: 150px;
}
div.ProseMirror div.tableWrapper table {
  margin-top: 30px;
  border: black 1px solid;
  border-collapse: collapse;
  table-layout: fixed;
  max-width: 100%;
}
div.ProseMirror div.tableWrapper table tr,
td {
  border: black 1px solid;
}
div.ProseMirror div.tableWrapper table td.selectedCell {
  background: skyblue;
}
/* 표 스타일 끝 */
</style>