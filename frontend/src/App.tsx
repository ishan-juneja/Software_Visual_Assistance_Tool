import { useState } from "react";
import DropArea from "./components/DropArea";

export default function App() {
  // this state lives in App and will be updated when files are dropped
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 80,
      }}
    >
      <DropArea onFiles={setFiles} /> {/* pass callback */}
      {files.length > 0 && (
        <ul style={{ marginTop: 12 }}>
          {files.map((f) => (
            <li key={f.name}>
              {f.name} ({Math.round(f.size / 1024)} KB)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
