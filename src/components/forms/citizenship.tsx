function Citizenship({ data, onChange }) {


    return (

        <div className="text-gray-500 text-[1.1rem] outline-none">
            <div className="flex justify-between gap-4" >

                <div className="nationality basis-1/2" >
                    <label htmlFor="nationality">
                        Nationality
                    </label>
                    <select name="nationality" value={data.nationality} onChange={(e) => {
                        onChange('nationality', e.target.value)
                    }} id="nationality" className="block p-2 w-full" required >
                        <option value="select">--Select--</option>
                        <option value="nigeria">Nigeria</option>
                        <option value="canada">Canada</option>
                        <option value="australia">Australia</option>
                    </select>
                </div>


                <div className="countryOfResidence basis-1/2" >
                    <label htmlFor="countryOfResidence">
                        Country Of Residence
                    </label>
                    <select name="countryOfResidence" value={data.countryOfResidency} onChange={(e) => {
                        onChange('countryOfResidency', e.target.value)
                    }} id="countryOfResidence" className="block p-2 w-full " required >
                        <option value="select">--Select--</option>
                        <option value="nigeria">Nigeria</option>
                        <option value="canada">Canada</option>
                        <option value="australia">Australia</option>
                    </select>
                </div>
            </div>


            <div className="flex gap-4 my-8 " >
                <div>
                    <label htmlFor="primaryLanguage">
                        Primary Language
                    </label>
                    <input type="text" required name="primaryLanguage" value={data.primaryLanguage} onChange={(e) => {
                        onChange('primaryLanguage', e.target.value)
                    }} id="primaryLanguage" className="block p-2" />
                </div>
                <div>
                    <label htmlFor="stateOfOrigin">
                        State Of Origin
                    </label>
                    <input type="text" required value={data.stateOfOrigin} name="stateOfOrigin" onChange={(e) => {
                        onChange('stateOfOrigin', e.target.value)
                    }} id="stateOfOrigin" className="block p-2" />
                </div>
            </div>

        </div>
    )
}



export default Citizenship;
