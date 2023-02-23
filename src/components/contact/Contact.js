import React from "react";

const ContactPage = () => {

    const myphone = "01725563915"
    const myemail = "waislam67@gmail.com"

    return (
        <>
            <div style={{ paddingTop: "10%" }}>
                <h1>This is contact page </h1>
                <div>
                    Phone: {myphone}
                </div>
                <div style={{marginLeft:'58px'}}>
                    Email: {myemail}
                </div>
            </div>
        </>
    )
}

export default ContactPage;