// @ts-check
import React from "react";

// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";


/**
 * @param {{prefCode: number; prefName: string}} props
 * 
 */
export function Prefecture({prefCode, prefName}) {

  return (

    <>
        <input type="checkbox" name={prefName}></input>
    </>
  );
}
