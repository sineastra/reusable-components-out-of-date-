import React from "react"
import styles from "./backdrop.module.css"

/**
 * Backdrop parameters
 * @param {Object} _ref
 * @param {Function} _ref.click - onClick callback 
 */

function Backdrop({ children, click }) {
    return (
        <div className={styles.backdrop} onClick={click}>
            {children}
        </div>
    )
}

export default Backdrop
