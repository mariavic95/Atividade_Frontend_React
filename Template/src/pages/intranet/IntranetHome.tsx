import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const IntranetHome = () => {
    return (
        <Container fluid>
            <Row className="mt-4">
                <Col lg={3} md={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5>Total de Usuários</h5>
                            <h3>1,250</h3>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5>Vendas do Mês</h5>
                            <h3>R$ 45.000</h3>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5>Pedidos Pendentes</h5>
                            <h3>18</h3>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5>Suporte Aberto</h5>
                            <h3>5</h3>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default IntranetHome;
