import { useState, useCallback } from "react"
import { clsx } from "clsx"

import { Head } from "minista"

import "./header.css"


export default() => {
  return (
    <>
      <Head>
        <script type="module" src="/src/components/global/header/script.ts" data-minista-entry-name="components/global/header" />
      </Head>
      <header className={clsx(`c-global-header`, `j-global-header`)}>
        <p>Header</p>
      </header>
    </>
  )
}