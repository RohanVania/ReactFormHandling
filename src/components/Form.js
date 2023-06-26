import React, { useState } from 'react'

function Form() {

    const [formdata, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        country: "canada",
        street: "",
        city: "",
        state: "",
        zip: "",
        contact: ``,
        date: '',
        comments: false,
        candidates: false,
        offers: false,
        notification: "",

    })

    function handleInput(event) {
        const { name, value, checked, type } = event.target;
        setFormData((prev) =>
        (
            { ...prev, [name]: type === "checkbox" ? checked : value }
        ))
    }

    function handleSave(event) {
        event.preventDefault();
        console.log(formdata);
        setFormData(
            {
                firstname: "",
                lastname: "",
                email: "",
                country: "",
                street: "",
                city: "",
                state: "",
                zip: "",
                contact: "",
                date: '',
                comments: false,
                candidates: false,
                offers: false,
                notification: "",

            }
        )

    }


    return (
        <form onSubmit={handleSave} className='space-y-3'>
            <div className='flex flex-col gap-2 '>
                <label htmlFor="firstname">First name</label>
                <input onChange={handleInput} className='ring-1 w-full p-2 rounded text-gray-900 outline-none border-l-indigo-500' type="text" name="firstname" id='firstname' value={formdata.firstname} />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="lastname">Last name</label>
                <input onChange={handleInput} className='ring-1 w-full p-2 rounded text-gray-900 outline-none border-l-indigo-500' type="text" name="lastname" id='lastname' value={formdata.lastname} />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="email">Email address</label>
                <input onChange={handleInput} className='ring-1 w-full p-2 rounded text-gray-900 outline-none border-l-indigo-500' type="email" name="email" id='email' value={formdata.email} />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="country">Country</label>
                <select value={formdata.country} className='ring-1 bg-white w-full p-2 rounded text-gray-900 outline-none border-l-indigo-500' onChange={handleInput} name="country" id="country">
                    <option value="india" >India</option>
                    <option value="canada" >Canada</option>
                    <option value="mexico">Mexico</option>
                    <option value="usa">Usa</option>
                </select>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="street">Street address</label>
                <input onChange={handleInput} className='ring-1 w-full p-2 rounded text-gray-900 outline-none border-l-indigo-500' type="text" name="street" id='street' value={formdata.street} />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="city">City</label>
                <input onChange={handleInput} className='ring-1 w-full p-2 rounded text-gray-900 outline-none border-l-indigo-500' type="text" name="city" id='city' value={formdata.city} />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="state">State/Province</label>
                <input onChange={handleInput} className='ring-1 w-full p-2 rounded text-gray-900 outline-none border-l-indigo-500' type="text" name="state" id='state' value={formdata.state} />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="zip">Zip/Postal Code</label>
                <input onChange={handleInput} className='ring-1 w-full p-2 rounded text-gray-900 outline-none border-l-indigo-500' type="text" name="zip" id='zip' value={formdata.zip} />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="contact">Contact</label>
                <input onChange={handleInput} className='ring-1 w-full p-2 rounded text-gray-900 outline-none border-l-indigo-500' type="number" name="contact" id='contact' value={formdata.contact} />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="date">Date</label>
                <input onChange={handleInput} className='ring-1 w-full p-2 rounded text-gray-900 outline-none border-l-indigo-500' type="date" name="date" id='date' />
            </div>

            <fieldset>
                <legend className='text-lg'>By Email</legend>
                <div className='flex gap-4 mt-4'>
                    <div>
                        <input onChange={handleInput} type="checkbox" checked={formdata.comments} name="comments" id="comments" />
                    </div>
                    <div className="">
                        <label htmlFor="comments" className='font-bold'>Comments</label>
                        <p>Get notified when someones posts a comment on a posting.</p>
                    </div>
                </div>
                <div className='flex gap-4 mt-4'>
                    <div>
                        <input onChange={handleInput} type="checkbox" checked={formdata.candidates} name="candidates" id="candidates" />
                    </div>
                    <div className="">
                        <label htmlFor="candidates" className='font-bold'>Candidates</label>
                        <p>Get notified when a candidate applies for a job.</p>
                    </div>
                </div>
                <div className='flex gap-4 mt-4'>
                    <div>
                        <input onChange={handleInput} type="checkbox" name="offers" id="offers" checked={formdata.offers} />
                    </div>
                    <div className="">
                        <label htmlFor="offers" className='font-bold'>Offers</label>
                        <p>Get notified when a candidate accepts or rejects an offer.</p>
                    </div>
                </div>

            </fieldset>

            <fieldset className="space-y-3">
                <legend className='font-bold text-lg'>Push Notification</legend>
                <p>These are delivered via SMS to your mobile phone</p>
                <div className=' space-x-3 mt-3'>
                    <input onChange={handleInput} type="radio" value="Everything" name="notification" id="everything" />
                    <label htmlFor="everything" className='font-bold'>Everything</label>
                </div>
                <div className='space-x-3 mt-3'>
                    <input onChange={handleInput} type="radio" name="notification" value="Same as Email" id="sameasemail" />
                    <label htmlFor="sameasemail" className='font-bold'>Same as email</label>
                </div>
                <div className='space-x-3 mt-3'>
                    <input onChange={handleInput} type="radio" name="notification" id="no-notification" value="No Notifications" />
                    <label htmlFor="no-notification" className='font-bold'>No push notification</label>
                </div>

            </fieldset>

            <div className=''>
                <button onSubmit={handleSave} className='bg-blue-500 mt-3 hover:bg-blue-700 font-bold text-white py-2 px-4 rounded'>Save</button>
            </div>


        </form>
    )
}

export default Form