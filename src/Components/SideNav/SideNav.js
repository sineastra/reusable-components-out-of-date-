import React from "react"
import { BrowserRouter, NavLink } from "react-router-dom"
import styles from "./sideNav.module.css"

/**
 * SideNav properties
 * @param {Object} _ref
 * @param {boolean} _ref.show - show or hide element.
 * @param {Array<Array<{linkText: string, linkHref: string, 'className - Optional': string}>>} _ref.linksData - Array of arrays with link data 
[0: linkText, 1: linkHref, 2: className]
 */
export default function SideNav({ show, linksData }) {
    return (
        <BrowserRouter>
            <nav>
                <div className={show ? styles["wrapper-open"] : styles.wrapper}>
                    {linksData
                        ? linksData.map(x => (
                              <NavLink key={x[0]} to={x[1]} className={x[2]}>
                                  {x[0]}
                              </NavLink>
                          ))
                        : null}
                </div>
            </nav>
        </BrowserRouter>
    )
}
