import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import './Notice.css';

const Notice = (props) => {
	const [showAlert, setShowAlert] = useState(true);

	if ( props.message && showAlert) {
		return (
		<Alert variant={props.variant} onClose={() => setShowAlert(false)} dismissible>
			<Alert.Heading>{props.message}</Alert.Heading>
		</Alert>
		);
	} else {
		return(<div></div>);
	}
};

export default Notice;