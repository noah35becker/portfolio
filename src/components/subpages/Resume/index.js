
// COMPONENT
function Resume(){
    const googleDriveFileId = '1mnz1VOuWdmTKZJca94afjFtpAFiVcPde';

    return (<>
        <a href={`https://drive.google.com/uc?export=download&id=${googleDriveFileId}`} download>Download</a>

        <embed
            src={`https://drive.google.com/file/d/${googleDriveFileId}/preview`}
            style={{display: 'block', margin: 'auto'}}
            width="75%"
            height="900px"
        />
    </>);
}


// EXPORT
export default Resume;