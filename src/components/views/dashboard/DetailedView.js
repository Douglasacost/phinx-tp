import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';

class DetailedView extends Component {

    render() {
        const { vehicle: { brand, release_year, source_country, max_velocity, conditions, description, colors } } = this.props;

        return (
            <div>
                <Row>
                    <Col xs={8}>
                        <span>Vehicle Brand</span>
                    </Col>
                    <Col xs={1} />
                    <Col xs={1}>
                        <Icon type="info-circle" />
                    </Col>
                    <Col xs={1} />
                    <Col xs={12}>
                        <span>{brand}</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <span>Release Year</span>
                    </Col>
                    <Col xs={1} />
                    <Col xs={1}>
                        <Icon type="calendar" />
                    </Col>
                    <Col xs={1} />
                    <Col xs={12}>
                        <span>{ release_year }</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <span>Source Country</span>
                    </Col>
                    <Col xs={1} />
                    <Col xs={1}>
                        <Icon type="global" />
                    </Col>
                    <Col xs={1} />
                    <Col xs={12}>
                        <span>{ source_country }</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <span>Max Velocity</span>
                    </Col>
                    <Col xs={1} />
                    <Col xs={1}>
                        <Icon type="dashboard" />
                    </Col>
                    <Col xs={1} />
                    <Col xs={12}>
                        <span>{ max_velocity }</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <span>Vehicle Conditions</span>
                    </Col>
                    <Col xs={1} />
                    <Col xs={1}>
                        <Icon type="heart" />
                    </Col>
                    <Col xs={1} />
                    <Col xs={12}>
                        <span>{ conditions }</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <span>Vehicle Description</span>
                    </Col>
                    <Col xs={1} />
                    <Col xs={1}>
                        <Icon type="message" />
                    </Col>
                    <Col xs={1} />
                    <Col xs={12}>
                        <span>{ description }</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <span>Available Colors</span>
                    </Col>
                    <Col xs={1} />
                    <Col xs={1}>
                        <Icon type="bg-colors" />
                    </Col>
                    <Col xs={1} />
                    <Col xs={12}>
                        <span>{ colors.join(', ') }</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DetailedView;