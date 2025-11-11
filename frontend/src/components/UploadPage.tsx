// owns the state and decideds when we actually show our panel off

import {useState} from "react";
import DropArea from "./DropArea";
import UploadPanel from "./UploadPanel";

export default function UploadPage(){
    const [files, setFiles] = useState<File[]>([]) // using states here
    return(
        <div className="p-6 max-w-3xl mx-auto">
            <DropArea onFiles={setFiles} />
            {files.length > 0 && <UploadPanel files={files}/>}
        </div>
    );
}