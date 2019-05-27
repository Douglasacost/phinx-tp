import React, { Component } from 'react';
import { Input as AntInput, Form, Radio, Col, Icon, Row } from 'antd';
import { conditions } from '../mocked';

function InputType({ type, inputProps }) {
    switch (type) {
        case 'textArea':
            return <AntInput.TextArea {...inputProps} />;
        case 'year':
            return <AntInput {...inputProps} type="number" minLength={4} maxLength={4} defaultValue="1900" />;
        case 'velocity':
            return <AntInput {...inputProps} type="number" addonAfter="Km/h" defaultValue="100" />;
        case 'condition':
            return <Radio.Group>
                {conditions.map((condition, key) => <Radio.Button key={key} value={condition}>{condition}</Radio.Button>)}
            </Radio.Group>;
        default:
            return <AntInput {...inputProps} />;
    }
}

class Input extends Component {

    render() {
        const {
            getFieldDecorator,
            identifier,
            decoratorParams,
            inputProps,
            iconType
        } = this.props;
        return (
            <Form.Item>
                <Row>
                    <Col xs={8}>
                        <span>{inputProps.placeholder}</span>
                    </Col>
                    <Col xs={1} />
                    <Col xs={1}>
                        <Icon type={iconType} />
                    </Col>
                    <Col xs={1} />
                    <Col xs={12}>
                        {getFieldDecorator(identifier, {
                            rules: [
                                { required: true, message: `${inputProps.placeholder} is a required field!` },
                            ],
                            ...decoratorParams
                        })(
                            <div>
                                <InputType {...this.props} />
                            </div>
                        )}
                    </Col>
                </Row>
            </Form.Item>
        );
    }
};

export default Input;
