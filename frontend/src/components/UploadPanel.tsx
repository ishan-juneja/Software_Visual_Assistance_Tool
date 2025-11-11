type UploadPanelProps = {files: File[]};

export default function UploadPanel({ files }: UploadPanelProps){
    if (files.length === 0) return null;

    return(
        <div style={{marginTop: 16}}>
            <div style={{fontWeight: 600}}>
                Ready to Upload:
                <ul>
                    {files.map( f => (
                        <li key={f.name} >
                            {f.name} ({Math.round(f.size/1024)} KB) {/* current description of the files*/}
                        </li>
                    )
                    )}
                </ul>
            </div>
        </div>
    );
}