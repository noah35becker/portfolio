
// IMPORT
import './index.css';


// COMPONENT
function Resume(){
    const googleDriveFileId = '1H3LGu6BTjFvgfockT1g3OkoE6CSNsRdN';

    return (<>
        <a className="btn download-btn fs-5 mb-3" href={`https://drive.google.com/uc?export=download&id=${googleDriveFileId}`} download>Download</a>

        <iframe
            className='mb-2'
            src={`https://drive.google.com/file/d/${googleDriveFileId}/preview`}
            style={{display: 'block', margin: '0 auto', width: '90%', minWidth: '300px', height: '110vw', maxHeight: '1100px', minHeight: '430px'}}
        ></iframe>
    </>);
}


// EXPORT
export default Resume;