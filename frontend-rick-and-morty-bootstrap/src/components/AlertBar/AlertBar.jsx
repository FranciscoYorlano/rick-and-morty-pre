// Bootstrap
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Hooks
import { useState } from "react";

// Redux
import { connect } from "react-redux";
import { setGlobalError } from "../../redux/actions";

function AlertBar(props) {
    const [error, setError] = useState(props.error);

    const handleClose = () => {
        props.setGlobalError("");
        setError("");
    };

    if (error) {
        return (
            <Row className="mt-1 mb-1">
                <Col xs="10" sm="8" lg="6" className="m-auto">
                    <Alert variant="danger" onClose={handleClose} dismissible>
                        <p className="mb-0">{props.error} </p>
                    </Alert>
                </Col>
            </Row>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setGlobalError: (error) => dispatch(setGlobalError(error)),
    };
};

export default connect(null, mapDispatchToProps)(AlertBar);
