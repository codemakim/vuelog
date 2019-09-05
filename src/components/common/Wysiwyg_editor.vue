<template>
  <div>
    <editor-menu-bar :editor="editor">
      <div slot-scope="{ commands, isActive }">
        <div>
          <button
            class="w3-button w3-white"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <i class="fas fa-bold"></i>
          </button>

          <button
            class="w3-button w3-white"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <i class="fas fa-italic"></i>
          </button>

          <button
            class="w3-button w3-white"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          >
            <i class="fas fa-strikethrough"></i>
          </button>

          <button
            class="w3-button w3-white"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <i class="fas fa-underline"></i>
          </button>

          <button
            class="w3-button w3-white"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            <strong>H1</strong>
          </button>

          <button
            class="w3-button w3-white"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            <strong>H2</strong>
          </button>

          <button
            class="w3-button w3-white"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            <strong>H3</strong>
          </button>

          <button
            class="w3-button w3-white"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <i class="fas fa-list-ul"></i>
          </button>

          <button
            class="w3-button w3-white"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <i class="fas fa-list-ol"></i>
          </button>

          <button
            class="w3-button w3-white"
            :class="{ 'is-active': isActive.blockquote() }"
            @click="commands.blockquote"
          >
            <i class="fas fa-quote-left"></i>
          </button>

          <button
            class="w3-button w3-white"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <i class="fas fa-code"></i>
          </button>

          <button class="w3-button w3-white" @click="commands.horizontal_rule">
            <strong>─</strong>
          </button>
        </div>
      </div>
    </editor-menu-bar>
    <div class="search">
      <input
        ref="search"
        @keydown.enter.prevent="editor.commands.find(searchTerm)"
        placeholder="Search …"
        type="text"
        v-model="searchTerm"
      />
      <input
        @keydown.enter.prevent="editor.commands.replace(replaceWith)"
        placeholder="Replace …"
        type="text"
        v-model="replaceWith"
      />
      <button class="button" @click="editor.commands.find(searchTerm)">Find</button>
      <button class="button" @click="editor.commands.clearSearch()">Clear</button>
      <button class="button" @click="editor.commands.replace(replaceWith)">Replace</button>
      <button class="button" @click="editor.commands.replaceAll(replaceWith)">Replace All</button>
    </div>
    <hr />
    <editor-content :editor="editor" />
    <div class="export">
      <h3>JSON</h3>
      <pre><code v-html="json"></code></pre>

      <h3>HTML</h3>
      <pre><code>{{ html }}</code></pre>
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
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Search
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
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
          new Search({
            disableRegex: false
          })
        ],
        content: null,
        autoFocus: true,
        comments: {},
        onUpdate: ({getJSON, getHTML}) => {
          this.json = getJSON();
          this.html = getHTML();
        },
      }),
      json: 'json으로 변환한 결과',
      html: 'html로 변환한 결과',
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>

<style>
p span.find {
  background: yellow;
}
.board-write pre {
  padding: 20px 20px 20px 20px;
  margin-left: 20px;
  margin-right: 30px;
  background: hotpink;
  border-radius: 10px;
  color: white;
}

.board-write pre code .find {
  background: orangered;
}
</style>