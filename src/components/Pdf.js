import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BiSolidPlaneAlt } from "react-icons/bi";
const Pdf = ({booking}) => {
  console.log(booking)
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: '40rem', backgroundColor: '#FFB300' }} className="shadow-lg rounded-3">
        <Card.Body>
          <Row className="justify-content-between">
            <Col xs={4}>
              <h5 className="text-white">{booking?.flight?.airlines}</h5>
              <h6 className="text-light">{booking?.flight?.name}</h6>
            </Col>
            <Col xs={4} className="text-center">
              <h3 className="text-dark">{booking?.flight?.from}</h3>
              <BiSolidPlaneAlt size={30} />
            <h3 className="text-dark">{booking?.flight?.to}</h3>
            </Col>
            <Col xs={4} className="text-right">
              <h5 className="text-white">Boarding Pass</h5>
              <h6 className="text-light">Seat: 24A</h6>
            </Col>
          </Row>

          <div className="bg-light p-3 mt-3 rounded">
            <Row>
              <Col>
                <h6>Passenger Name: <span>{booking?.user?.firstName +' ' + booking?.user?.lastName}</span></h6>
              </Col>
              <Col>
                <h6>Flight: <span>{booking?.flight?.name}</span></h6>
              </Col>
              <Col>
                <h6>Seat: <span>24A</span></h6>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
              Boarding Date:{" "}
              <span>{new Date(booking?.flight?.date).toLocaleDateString()}</span>            
                </Col>
              <Col>
                <div className="barcode" style={{
                  background: '#222',
                  width: '100px',
                  height: '30px',
                  margin: '0 auto',
                  display: 'block'
                }}></div>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Pdf;
