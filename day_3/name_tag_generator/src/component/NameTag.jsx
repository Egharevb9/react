import React, {useState} from "react";
function NameTag() {
    const [FirstName, setFirstName] = useState(true)
    const [Title, setTitle] = useState(true)
    const [Company, setCompany] = useState(true)
    return(
        <div>
            <input type="text"value={FirstName} placeholder="first Name" onChange={(e) => setFirstName(e.target.value) }/>
            <input type="text"value={Title} placeholder="Job Title"onChange={(e) => setTitle(e.target.value)} />
            <input type="text"value={Company} placeholder="Company"onChange={(e) => setCompany(e.target.value)} />
            <p>------- NAME TAG -----</p>
            <h3>Hell0, my name is CHIDI OKAFOR frontend Developer, paystack</h3>
        </div>

    );

}