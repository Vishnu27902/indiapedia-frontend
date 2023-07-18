import React from 'react'

function IFrame() {
    return (
        <iframe
            title='Map'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62701.16393299262!2d77.07648130805663!3d10.824873092930028!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba84ee37569ae7f%3A0x3c5b1824b6e79192!2sSri%20Eshwar%20College%20of%20Engineering%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1689701954925!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ "border": 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
    )
}

export default IFrame