import React from 'react'

export default function Alert(porps) {
    const capitalize = (word) => {
        let lowerCase = word.toLowerCase();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    }
    return (
        porps.alert && <div className={`position-absolute w-100 alert alert-${porps.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(porps.alert.type)}! </strong> {porps.alert.msg}
        </div>
    )
}
