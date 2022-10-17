
// IMPORT
import './index.css';


// COMPONENT
function Resume(){
    const googleDriveFileId = '1mnz1VOuWdmTKZJca94afjFtpAFiVcPde';

    return (<>
        <a className="btn download-btn fs-5 mb-3" href={`https://drive.google.com/uc?export=download&id=${googleDriveFileId}`} download>Download</a>

        <embed
            className='mb-2'
            src={`https://drive.google.com/file/d/${googleDriveFileId}/preview`}
            style={{display: 'block', margin: '0 auto', width: '90%', minWidth: '300px', height: '70vw', minHeight: '600px'}}
            width="75%"
        />
    </>);
}


// EXPORT
export default Resume;