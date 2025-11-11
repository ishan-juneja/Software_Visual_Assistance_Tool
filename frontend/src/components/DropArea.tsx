// this file serves as where files can be dropped and the prop will be updated to 
// then handle any dropped files
type DropAreaProps = {
    onFiles: (files: File[]) => void; // our prop onFiles begins as void
};


export default function DropArea({onFiles}: DropAreaProps){
    function handleDragOver(e: React.DragEvent<HTMLDivElement>){
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
        console.log("dragging over", e.target);
    }   

    function handleDrop(e: React.DragEvent<HTMLDivElement>){
        e.preventDefault();
        const dropped = Array.from(e.dataTransfer.files);
        console.log("dropped files: ", dropped);
        onFiles(dropped); // set our prop with the files we have dropped
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