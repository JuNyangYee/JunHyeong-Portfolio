'use client'
import Main from "./main/main";
import Profile from "./profile/profile";
import Works from "./works/works";
import Contact from "./contact/contact";

export default function Portfolio() {

    return (
        <div id="root">
            
            <Main/>
            <Profile/>
            <Works/>
            <Contact/>

        </div>
    );
}