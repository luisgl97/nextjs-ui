// import Head from "next/head";
// import { Button, Icon } from "semantic-ui-react";
import React, { useState, useEffect} from "react";
import BasicLayout from "../layouts/BasicLayout";

export default function Home() {
  
  

  return (
    <div className="home">
      <BasicLayout>
        <h1>Estamos en la home</h1>
        
      </BasicLayout>
      {/* <div>{tasksToRender}</div> */}
    </div>
  );
}
