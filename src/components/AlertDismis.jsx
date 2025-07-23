import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const AlertDismis = (props) => {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <div style={{height:'40px'}}>
            {props.alert && <div>
                <Alert className='py-1 px-2 small' variant={props.alert.type} >
                    <Alert.Heading>{props.alert.msg}</Alert.Heading>
                </Alert>
            </div>}
            </div>
        )
    }
    return null
}

export default AlertDismis
