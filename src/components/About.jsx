import React, {useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
      })
    
      const [btnText, setBtnText] = useState("Enable Dark Mode")
    
      const toggleStyle = () => {
        if (myStyle.color === 'white') {
          setMyStyle({
            color: 'black',
            backgroundColor: 'white'
          });
          setBtnText("Enable Dark Mode")
        }
        else {
          setMyStyle({
            color: 'white',
            backgroundColor: 'black'
          })
          setBtnText("Enable White Mode")
        }
      };

    return (
        <div className='container' style={myStyle}>
            <h2 className='my-3'>About Us</h2>
            <div className='container' style={myStyle}>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div style={{
                            ...myStyle,
                            height: '60px',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '1rem'
                        }}>
                            Accordion Item #1
                        </div>
                    </Accordion.Header>
                    <Accordion.Body style={myStyle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header >
                        <div style={{
                           ...myStyle,
                            height: '60px',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '1rem'
                        }}>
                            Accordion Item #2
                        </div>
                    </Accordion.Header>
                    <Accordion.Body style={myStyle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
                </div>
            <button className='btn btn-secondary my-3' onClick={toggleStyle} style={myStyle}>{btnText}</button>
        </div>
    )
}
