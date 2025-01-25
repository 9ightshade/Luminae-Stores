function Payment() {
    return (
        <div className="text-gray-500 bg-white w-1/2 p-4 flex flex-col gap-4" >
            <h1 >
                Payment Details
            </h1>
            <p>
                Account Name:
            </p>
            <p>
                Account Number:
            </p>
            <form >
                <p className="mb-2" >
                    Upload Payment Proof
                </p>
                <input type="file" name="proofOfPayment" id="proofOfPayment" required  className="" />
            </form>
        </div>
    )
}


export default Payment;