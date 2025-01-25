function Qualifications({data, onChange}) {
    
    return (
        <div className="text-gray-500 text-[1.1rem] outline-none gap-4 my-8 ">
            <div className="institutionName" >
                <label htmlFor="institutionName">
                    Institution Name
                </label>
                <input type="text" required name="institutionName" id="institutionName" className="block w-full p-3" value={data.institutionName} onChange={(e) => {
                    onChange(0,'institutionName', e.target.value)
                }} />
            </div>

            <div className="institutionType mt-3" >
                <label htmlFor="institutionType">
                    Institution Type
                </label>
                <select name="institutionType" required id="institutionType" className="block p-4 w-full" value={data.institutionType} onChange={(e) => {
                    onChange(0,'institutionType', e.target.value)
                }}  >
                    <option value="select">--Select--</option>
                    <option value="highschool">High school</option>
                    <option value="tertiary">Tertiary</option>
                </select>
            </div>

            <div className="certificateAwarded" >
                <label htmlFor="certificateAwarded">
                    Certificate Awarded
                </label>
                <input type="text" required name="certificateAwarded" value={data.certificateAwarded} onChange={(e) => {
                    onChange(0,'certificateAwarded', e.target.value)
                }} id="certificateAwarded" placeholder="E.g B.sc Business Adminstration" className="block w-full p-3" />
            </div>


            <div className="flex py-3 gap-4" >
                <div className="startDate" >
                    <label htmlFor="startDate">
                        Start Date
                    </label>
                    <input value={data.startDate} onChange={(e) => {
                        onChange(0,'startDate', e.target.value)
                    }} type="date" required name="startDate" id="startDate" className="block w-full p-3" />
                </div>

                <div className="endDate" >
                    <label htmlFor="endDate">
                        End Date
                    </label>
                    <input type="date" required name="endDate" id="endDate" className="block w-full p-3" value={data.endDate} onChange={(e) => {
                        onChange(0,'endDate', e.target.value)
                    }} />
                </div>

           </div>

        </div>
    )
}

export default Qualifications;