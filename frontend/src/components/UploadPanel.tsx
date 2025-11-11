import { useState } from "react";



export default function DropArea(){
    const [isDragging, setIsDragging] = useState(false)
    const [files, setFiles] = useState<File[]>([]);


    function handleDragOver(e: React.DragEvent<HTMLDivElement>){
        e.preventDefault();
        console.log("dragging over", e.target)
        setIsDragging(true);
    }   

    function handleDrop(e: React.DragEvent<HTMLDivElement>){
        e.preventDefault();
        const dropped = Array.from(e.dataTransfer.files);
        console.log("dropped files: ", )
        setFiles(dropped)
        setIsDragging(false);
    }

    return(
        <div
            onDragOver={handleDragOver} // call our functions
            onDrop={handleDrop}
            style={{
                border: "2px dashed gray",
                borderRadius: "12px",
                padding: "30px",
                textAlign: "center",
            }}
        >   
            Drop your files here
        </div>
    )
}