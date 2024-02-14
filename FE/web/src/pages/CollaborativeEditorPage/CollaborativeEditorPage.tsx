// import "./styles.scss";

import Collaboration from "@tiptap/extension-collaboration";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Placeholder from "@tiptap/extension-placeholder";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { WebrtcProvider } from "y-webrtc";
import * as Y from "yjs";

const ydoc = new Y.Doc();
// @ts-expect-error: This line intentionally creates an error for demonstration purposes.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const provider = new WebrtcProvider("tiptap-collaboration-extension", ydoc, {
  signaling: ["wss://y-webrtc-ckynwnzncc.now.sh"],
});

function CollaborativeEditorPage() {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      StarterKit.configure({
        // The Collaboration extension comes with its own history handling
        history: false,
      }),
      Collaboration.configure({
        document: ydoc,
      }),
      Placeholder.configure({
        placeholder:
          "Write something … It’ll be shared with everyone else looking at this example.",
      }),
    ],
  });

  return <EditorContent editor={editor} />;
}

export default CollaborativeEditorPage;
