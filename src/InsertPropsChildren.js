import {Container, Row, Col} from 'react-bootstrap';

// we can pass several children in this way
// and they will be transfrred to differetn places
//we have to pass the props and call them via props
const InsertPropsChildren = (props) => {
    return(
        <Container className="mb-5 mt-5">
            <Row>
                <Col>
                    {props.left}
                </Col>
                <Col>
                    {props.right}
                </Col>
            </Row>
        </Container>
    )
}

export default InsertPropsChildren;