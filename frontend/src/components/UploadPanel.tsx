
function handleDragOver(e: React.DragEvent<HTMLDivElement>){
    e.preventDefault();
    console.log("dragging over", e.target)
}

function handleDrop(e: React.DragEvent<HTMLDivElement>){
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    console.log("dropped files: ", )
}

export default function DropArea(){
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