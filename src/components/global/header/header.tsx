import { useState, useCallback } from "react"
import { clsx } from "clsx"

import { Head } from "minista"

import "./header.css"

//props



export default() => {
  return (
    <>
      <Head>
      </Head>
      <header className={clsx(`c-global-header`, `j-global-header`)}>
        <p>Header</p>
      </header>
    </>
  )
}