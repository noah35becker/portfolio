
// COMPONENT
function Project(){
    return (
        <div className="project">
            <a href='' target='_blank'>
                <h3>Title</h3>

                <img alt="Mad Libs project" src={require(`../../../assets/project-imgs/${'mad-libs-redaction-unredaction.gif'}`)} />
            </a>

            <h5 className="coding-languages">
                {'SQL, Node (inc. Express), Handlebars'}
            </h5>
        </div>
    );
}


// EXPORT
export default Project;