
// COMPONENT
function Project(){
    return (
        <div className="project">
            <a href='/' target='_blank' rel='noreferrer'>
                <h3>Title</h3>
            </a>

            <h5 className="coding-languages">
                {'SQL, Node (inc. Express), Handlebars'}
            </h5>

            <a href='/' target='_blank' rel='noreferrer'>
                <img alt="Mad Libs project" src={require(`../../../../assets/project-imgs/${'mad-libs-redaction-unredaction.gif'}`)} />
            </a>
        </div>
    );
}


// EXPORT
export default Project;