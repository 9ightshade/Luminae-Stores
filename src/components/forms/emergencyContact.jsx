function EmergencyContact({ data, onChange }) {


    return (
        <div className="text-gray-500 text-[1.1rem] outline-none">
            <div className="nameofKin" >
                <label htmlFor="nextOfKin">
                    Name
                </label>
                <input type="text" value={data.name} onChange={(e) => {
                    onChange('name', e.target.value)
                }} name="nameOfNextOfKin" id="nextOfKin" className="block p-2 w-full" required />
            </div>

            <div className="flex items-center justify-between" >
                <div className="relationshipWithnextOfKin" >
                    <label htmlFor="relationshipWithnextOfKin">
                        Relationship
                    </label>
                    <select value={data.relationship} onChange={(e) => {
                        onChange('relationship', e.target.value)
                    }} name="relationshipWithNextOfKin" id="relationshipWithnextOfKin" className="block p-2  " required >
                        <option value="select">--Select--</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Brother">Brother</option>
                        <option value="Sister">Sister</option>
                    </select>
                </div>

                <div className="email my-3 " >
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" value={data.email} required
                        onChange={(e) => {
                            onChange('email', e.target.value)
                        }}
                        name="emailOfNextOfKin" id="email" className="block p-2" />
                </div>


                <div className="phone" >
                    <label htmlFor="phone">
                        Phone
                    </label>
                    <input type="tel"
                        required
                        onChange={(e) => {
                            onChange('phone', e.target.value)
                        }}
                        value={data.phone}
                        name="telephoneNumberOfNextOfKin" id="phone" className="block p-2" />
                </div>
            </div>


            {/* <div className="address" >
                <label htmlFor="address">
                    Address
                </label>
                <textarea
                    value={data.addressOfNextOfKin}
                    onChange={handleChange} required
                    name="addressOfNextOfKin" id="address"
                    className=" block w-full my-5 " ></textarea>
            </div> */}

        </div>
    )
}

export default EmergencyContact;