import 'draft-js/dist/Draft.css';

import { Editor as DraftEditor, EditorState, RichUtils } from 'draft-js';
import { useEffect, useState } from 'react';

const Editor = () => {
  const [editorEnable, setEditorEnable] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleBold = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  useEffect(() => {
    setEditorEnable(true);
  }, []);

  return (
    <>
      {editorEnable && (
        <div className="m-4">
          <div className="mb-1 flex items-center pr-4">
            <div className="ml-auto flex items-center space-x-5">
              <button onClick={handleBold}>B</button>
            </div>
          </div>
          <div className="prose-stone prose h-[500px] overflow-scroll rounded-md border border-gray-300 p-3 shadow-sm sm:text-sm">
            <DraftEditor
              editorState={editorState}
              onChange={setEditorState}
              placeholder="Tell a story..."
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Editor;
