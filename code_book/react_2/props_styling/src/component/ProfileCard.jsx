import React from "react";
// function  profileCard1() {
//     return(
//         <div>
//             <h2>chidi okafor</h2>
//             <p>Frontend Developer</p>
//         </div>
//     );
// }

// function profileCard2() {
//     return(
//         <div>
//             <h2>Amaka Johnson</h2>
//             <p>Backend Developer</p>
//         </div>
//     );
// }


function ProfileCard() {
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.role}</p>
        </div>
    );
}
<profileCard name =" chidi okafor" role="Frontend Developer" />
{/* <profileCard name =" Amaka John" role="Backend Developer" /> */}


export default ProfileCard;
