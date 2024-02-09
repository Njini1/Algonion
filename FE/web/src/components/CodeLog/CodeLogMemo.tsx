// src/Tiptap.jsx
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import classes from "./CodeLogMemo.module.scss"
// define your extension array
const extensions = [
  StarterKit,
]

const content = '<h1>📝메모</h1><h2>문제 요약</h2><p></p><p></p><h2>사용한 알고리즘</h2><ul><li></li><li></li></ul><h2>풀이</h2>'

const Tiptap = () => {
  const editor = useEditor({
    extensions,
    content,
    onUpdate({ editor }) {
      // 내용이 업데이트 되었을 때
      const html = editor.getHTML();
      console.log(html);
    },
  })

  return (
    <div className={classes.editor}>
      <EditorContent editor={editor} />
      <FloatingMenu editor={editor ? editor : undefined}> </FloatingMenu>
      <BubbleMenu editor={editor ? editor : undefined}> </BubbleMenu>
    </div>
  )
}

export default Tiptap