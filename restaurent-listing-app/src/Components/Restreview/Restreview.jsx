import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

function Restreview({rev}) {

    console.log(rev);
    const [open, setOpen] = useState(false);
  return (
    <div>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
            {
            rev?.map(e=>(
                <div style={{display : "flex",justifyContent : "center"}}>
                    <p><span style={{color : "red"}}>{e.name} -</span></p>
                    <p>{e.date} -</p>
                    <p> <span style={{color : "green"}}>{e.rating}</span></p>
                </div>

            ))
            }
        </div>
      </Fade>
    </div>
  )
}

export default Restreview