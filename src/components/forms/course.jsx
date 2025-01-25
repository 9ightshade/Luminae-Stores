
// eslint-disable-next-line react/prop-types
function Course({ data, onChange }) {


    return (
        

            <div className="form-flex flex gap-3 text-gray-500 text-[1.1rem] mb-[250px]" >
                <div>
                    <label htmlFor="Program-title">
                        Program Title
                    </label>
                    <select
                        name="programmeTitle" onChange={(e) => {
                        onChange('programmeTitle', e.target.value)
                        }} value={data.programmeTitle} required id="Programme-title" className="p-2 outline-none block"  >
                        <option value="select">--Select--</option>
                        <option value="Post Graduate Diploma in Business (PGDBA)">Post Graduate Diploma in Business (PGDBA)</option>
                        <option value="Masters in Business Administration (MBA)">Masters in Business Administration (MBA)</option>
                        <option value="Master of Sciences (M.Sc)">Master of Sciences (M.Sc)</option>
                        <option value="Doctorate in Business Administration (DBA)">Doctorate in Business Administration (DBA)</option>
                    </select>
                </div>


                <div>
                    <label htmlFor="course-title">
                        Course Title
                    </label>
                <select name="courseTitle" required value={data.courseTitle} onChange={(e) => {
                    onChange('courseTitle', e.target.value)
                    }} id="course-title" className="p-2 outline-none block"   >
                        <option value="select">--Select--</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Management">Management</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Finance">Finance</option>
                        <option value="ICT Management">ICT Management</option>
                        <option value="Supply Chain and Logistics Management">Supply Chain and Logistics Management</option>
                        <option value="Procurement and Contract Management">Procurement and Contract Management</option>
                        <option value=">Healthcare and Hospital Management">Healthcare and Hospital Management</option>
                        <option value="Human Resource Management">Human Resource Management</option>
                    </select>
                </div>
            </div>
    )
}

export default Course;