import React from 'react'
import { msgContext } from '../App'
import { useContext } from 'react'
function Child() {
    const useCon = useContext(msgContext);
    // console.log(useCon)
  return (
    <>
    <div>First msg: {useCon.msg}</div>
    <div>Second msg: {useCon.msg2}</div>
    </>
  )
}

export default Child