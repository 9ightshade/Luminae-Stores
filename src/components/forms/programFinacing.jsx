function ProgramFinancing({ data, onChange }) {
    return (
        <div className="text-gray-500 text-[1.1rem] outline-none gap-4 my-8 ">
            <div className="fundingMethod mt-3" >
                <label htmlFor="fundingMethod">
                    Funding Method: How Do You Intend To Pay for this Program?
                </label>
                <select required name="fundingMethod" id="fundingMethod" className="block p-4 w-full" value={data.fundingMethod} onChange={(e) => {
                    onChange('fundingMethod', e.target.value)
                }}  >
                    <option value="select">--Select--</option>
                    <option value="self Sponsorship">Self Sponsored</option>
                    <option value="self Sponsorship">Guardian/Parent Sponsored</option>
                    <option value="Schoolarship">Schoolarship</option>
                    <option value="company Sponsored">Company Sponsored</option>
                </select>
            </div>

        </div>
    )
}

export default ProgramFinancing;