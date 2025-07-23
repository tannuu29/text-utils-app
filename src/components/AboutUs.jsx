import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const AboutUs = (props) => {
    let myStyle = {
        color: props.mode === 'dark'?'white':'#393d41 ',
        backgroundColor:  props.mode === 'dark'?'#393d41':'white',
    }
    return (
        <div className='container my-1 p-2' style={myStyle} >
            <h1 style={myStyle}>About Us</h1>
            <Accordion defaultActiveKey="0" className={props.mode === 'dark' ? 'accordion-dark' : ''}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is TextUtils?</Accordion.Header>
                    <Accordion.Body style={myStyle}>
                        TextUtils is a simple yet powerful text utility app designed to help you quickly manipulate and analyze your text.
                        Whether you're writing, editing, or preparing content for web, email, or social media, TextUtils provides useful features to improve your workflow:


                        TextUtils is lightweight, fast, and runs entirely in your browser — no installation required.


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header >🔧 Key Features:</Accordion.Header>
                    <Accordion.Body style={myStyle}>
                        <ul>
                            <li>✅ Convert text to <strong>UPPERCASE</strong> or <strong>lowercase</strong></li>
                            <li>🧹 Remove <strong>extra spaces</strong></li>
                            <li>📋 <strong>Copy</strong> text to clipboard with one click</li>
                            <li>🧼 <strong>Clear</strong> the text box instantly</li>
                            <li>🧮 Real-time <strong>word and character count</strong></li>
                            <li>🌗 <strong>Dark and Light</strong> mode support</li>
                            <li>🌗 <strong>Free to Use:</strong> No platform fees</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header style={myStyle}>Why use TextUtils?</Accordion.Header>
                    <Accordion.Body style={myStyle}>
                        TextUtils is lightweight, fast, and runs entirely in your browser. No installations or logins required. It’s the perfect tool for writers, students, coders, and anyone who works with text.
                        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    )
}

export default AboutUs
