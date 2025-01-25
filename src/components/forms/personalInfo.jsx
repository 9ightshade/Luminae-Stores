function PersonalInfo({ data, onChange }) {

    let email = localStorage.getItem("email")

    return (

        <div className="text-gray-500 text-[1.1rem] outline-none" >
            <div className="title" >
                <label htmlFor="title">
                    Title
                </label>
                <select value={data.title} onChange={(e) => {
                    onChange('title', e.target.value)
                }} name="title" id="title" className="block p-3 outline-none w-1/2 my-4" required>
                    <option value="select">--Select--</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Dr">Dr</option>
                    <option value="Miss">Miss</option>
                    <option value="Prof">Prof</option>
                </select>
            </div>

            <div className="email my-3 " >
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" required name="email" value={email} disabled onChange={(e) => {
                    onChange('email', e.target.value)
                }} id="email" className="block p-2 w-1/2" />
            </div>


            <div className="names flex justify-between " >
                <div>
                    <label htmlFor="firstname">
                        First Name
                    </label>
                    <input type="text" required value={data.first_name} onChange={(e) => {
                        onChange('first_name', e.target.value)
                    }} name="firstName" id="firstname" className="block p-2 " />
                </div>
                <div>
                    <label htmlFor="middlename">
                        Middle Name
                    </label>
                    <input type="text" required value={data.middle_name} onChange={(e) => {
                        onChange('middle_name', e.target.value)
                    }} name="middleName" id="middlename" className="block p-2 " />
                </div>
                <div>
                    <label htmlFor="lastname">
                        Last Name
                    </label>
                    <input type="text" required value={data.last_name} onChange={(e) => {
                        onChange('last_name', e.target.value)
                    }} name="lastName" id="lastname" className="block p-2 " />
                </div>
            </div>

            <div className="flex items-center gap-4  justify-between flex-wrap md:flex-nowrap my-3" >
                <div className="basis-1/3" >
                    <label htmlFor="gender">
                        Sex
                    </label>
                    <select name="sex" required value={data.gender} onChange={(e) => {
                        onChange('gender', e.target.value)
                    }} id="gender" className="block p-3 outline-none my-1 w-full"  >
                        <option value="select">--Select--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className="basis-1/3">
                    <label htmlFor="marital-status">
                        Marital Status
                    </label>
                    <select name="maritalStatus" onChange={(e) => {
                        onChange('maritalStatus', e.target.value)
                    }} required value={data.maritalStatus} id="marital-status" className="block p-3 outline-none my-1 w-full" >
                        <option value="select">--Select--</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                    </select>
                </div>

                <div className="basis-1/3">
                    <label htmlFor="date-of-birth">
                        Date Of Birth
                    </label>
                    <input type="date" required name="dateOfBirth" value={data.dateOfBirth} onChange={(e) => {
                        onChange('dateOfBirth', e.target.value)
                    }} id="date-of-birth" className="block p-2 w-full" />
                </div>

            </div>


            <div className="address" >
                <label htmlFor="address">
                    Address
                </label>
                <textarea name="address" required value={data.address} onChange={(e) => {
                    onChange('address', e.target
                        .value
                    )
                }} id="address" className="w-full block" ></textarea>
            </div>


            <div className="flex  justify-between py-2" >
                <div className="religion" >
                    <label htmlFor="religion">
                        Religion
                    </label>
                    <select name="religion" required onChange={(e) => {
                        onChange('religion', e.target.value)
                    }} value={data.religion} id="religion" className="block"  >
                        <option value="select">--Select--</option>
                        <option value="Christian">Christian</option>
                        <option value="Muslim">Muslim</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <div className="phone" >
                    <label htmlFor="phone">
                        Phone
                    </label>
                    <input type="tel" required value={data.phone} onChange={(e) => {
                        onChange('phone', e.target.value)
                    }} name="phone" placeholder="Your Phone Number" id="phone" className="block" />
                </div>



                <div className="disabilities" >
                    <label htmlFor="disabilities">
                        Disability
                    </label>
                    <textarea
                        required
                        value={data.physical_challenge}
                        onChange={(e) => {
                            onChange('physical_challenge', e.target.value)
                        }}
                        name="physicalChallenge" id="disablity" className="w-full block" ></textarea>
                </div>
            </div>

            <div className="photo mb-3 " >
                <label htmlFor="photo">
                    Upload Photo
                </label>
                <input type="file" required onChange={(e) => {
                    onChange('photo', e.target.files[0])
                }} name="photo" id="photo" className="block" />
            </div>
        </div>


    )
}


export default PersonalInfo;