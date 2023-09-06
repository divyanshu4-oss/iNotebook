// import React, { useContext } from 'react';
// import NoteContext from '../context/notes/NoteContext';
import React from "react"
const About = () => {
    // const a = useContext(NoteContext);
    return (
        <>
        <div className="container border border-primary rounded border-2">
            <h3 className="my-4 text-center">About our Application</h3>
            <div className="text-center">
            <p className="mt-5">Our Application consists of login page , signup page and notes display page.</p>
            <div className="d-flex-row">
            <h6>Login page : </h6> <p className="mx-2">This page consists of login form , where user will come write credentials to access their notes.</p>
            </div>
            <div className="d-flex-col">
            <h6>SignUp page : </h6> <p className="mx-2">This page consists of signup form , where user will come write credentials for successfull login.</p>
            </div>
            <div className="d-flex-col">
            <h6>Notes page : </h6> 
            <p className="mx-2">This page consists of notes form , where user will come enter their notes title, description and tags.<br/>Then hit enter to add the notes ,user can edit and delete their notes as well.</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default About