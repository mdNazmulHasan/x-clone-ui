import React from "react";

interface ImageEditorProps {
  previewUrl: string;
  settings: { type: "original" | "wide" | `square`; sensitive: boolean };
  setSettings: React.Dispatch<
    React.SetStateAction<{
      type: "original" | "wide" | `square`;
      sensitive: boolean;
    }>
  >;
  onClose: () => void;
}
const ImageEditor: React.FC<ImageEditorProps> = ({
  onClose,
  previewUrl,
  settings,
  setSettings,
}) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 z-10 flex items-center justify-center">
      <div className="bg-black rounded-xl p-12 flex flex-col gap-4">Test</div>
    </div>
  );
};

export default ImageEditor;
