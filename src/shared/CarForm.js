import React, { Component } from 'react';
import { Form, Select, Row, Col, Icon } from 'antd';
import Input from './Input';
import { countries, colors, vehicle_brands } from '../mocked';

class MainForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const { handleOk, handleClose, saveVehicle, form: { validateFields }, setMessage } = this.props;
        validateFields(async (err, values) => {
            if (!err) {
                handleOk();
                await saveVehicle(values);
                handleClose();
                setMessage('Succesfully saved!')
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form id="new_vehicle_form" onSubmit={this.handleSubmit} className="new_vehicle_form">
                <Form.Item>
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
                            {getFieldDecorator('brand', {
                                rules: [{ required: true, message: 'Vehicle Brand is a required field!' }],
                            })(
                                <Select showSearch placeholder="Please select a Vehicle Brand">
                                    {vehicle_brands.map((brand, key) => <Select.Option key={key} value={brand}>{brand}</Select.Option>)}
                                </Select>
                            )}
                        </Col>
                    </Row>
                </Form.Item>
                <Input
                    identifier="release_year"
                    getFieldDecorator={getFieldDecorator}
                    inputProps={{ placeholder: "Release Year" }}
                    type="year"
                    iconType="calendar"
                />
                <Form.Item>
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
                            {getFieldDecorator('source_country', {
                                rules: [{ required: true, message: 'Source Country is a required field!' }],
                            })(
                                <Select showSearch placeholder="Please select a country">
                                    {countries.map((country, key) => <Select.Option key={key} value={country}>{country}</Select.Option>)}
                                </Select>
                            )}
                        </Col>
                    </Row>
                </Form.Item>
                <Input
                    identifier="max_velocity"
                    getFieldDecorator={getFieldDecorator}
                    inputProps={{ placeholder: "Max Velocity" }}
                    type="velocity"
                    iconType="dashboard"
                />
                <Input
                    identifier="conditions"
                    getFieldDecorator={getFieldDecorator}
                    inputProps={{ placeholder: "Vehicle Conditions" }}
                    type="condition"
                    iconType="heart"
                />

                <Input
                    identifier="description"
                    getFieldDecorator={getFieldDecorator}
                    inputProps={{ placeholder: "Vehicle Description", autosize: { minRows: 2, maxRows: 6 } }}
                    type="textArea"
                    iconType="message"
                />

                <Form.Item>
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
                            {getFieldDecorator('colors', {
                                rules: [
                                    { required: true, message: 'Available Colors is a required field!', type: 'array' },
                                ],
                            })(
                                <Select showSearch mode="multiple" placeholder="Please select available the colors">
                                    {colors.map((color, key) => <Select.Option key={key} value={color}>{color}</Select.Option>)}
                                </Select>,
                            )}
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        );
    }
}

const CarForm = Form.create({ name: 'new_vehicle_form' })(MainForm);

export default CarForm;