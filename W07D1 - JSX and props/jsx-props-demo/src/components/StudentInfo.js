
const StudentInfo = ({firstName, lastName, id, course}) => {
    //const {firstName, lastName, id, course} = props
    return(
        <div>
            <h2> Name: {firstName} {lastName} </h2>
            <p> ID: {id} </p>
            <p> Course: {course} </p>
        </div>
    );
}

export default StudentInfo;