// import { EditorState, basicSetup } from '@codemirror/basic-setup'
// import { EditorView, keymap } from '@codemirror/view'
// import { defaultKeymap } from '@code''
// import { json } from '@codemirror/lang-json'

// export default function setupEditors() {
//   const basicExtensions = [
//     basicSetup,
//     keymap.of([defaultKeymap]),
//     json,
//     EditorState.tabSize.of(2),
//   ]
//   const requestEditor = new EditorView({
//     state: EditorState.create({
//       doc: '{\n\t\n}',
//       extensions: basicExtensions,
//     }),
//   })
//   const responseEditor = new EditorView({
//     state: EditorState.create({
//       doc: '',
//       extensions: [...basicExtensions,EditorView.editable.of(false)]
//     }),
//   })
//   return {requestEditor,responseEditor}
// }
