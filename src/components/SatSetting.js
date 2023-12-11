import React, {Component} from 'react';
import {Form, Button, Slider} from 'antd';

class SatSetting extends Component {
    showSatellite = values => {
        console.log('Received values of form: ', values);
        this.props.onShow(values);          // here
    }

    render() {
        const formItemLayout = {
            marginBottom: '20px', // Consistent margin for form items
            labelCol: { flex: '110px' },
            wrapperCol: { flex: 1 },
        };

        const sliderStyle = {
            dotStyle: { borderColor: '#ffffff' },
            activeDotStyle: { borderColor: '#0c8' },
        };

        return (
            <Form
                name="wrap"
                labelAlign="left"
                labelWrap
                colon={false}
                className="sat-setting"
                onFinish={this.showSatellite}
                style={{
                    maxWidth: '600px',
                    margin: 'auto',
                    padding: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
            >

                <Form.Item
                    label="Longitude(degrees)"
                    name="longitude"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Longitude",
                        }
                    ]}
                    style={formItemLayout}
                >
                    <Slider
                        min={-180}
                        max={180}
                        marks={{
                            [-180]: '-180°',
                            0: '0°',
                            180: '180°'
                        }}
                        style={sliderStyle}
                    />
                </Form.Item>

                <Form.Item
                    label="Latitude(degrees)"
                    name="latitude"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Latitude",
                        }
                    ]}

                >
                    <Slider
                        min={-90}
                        max={90}
                        marks={{
                            [-90]: '-90°',
                            0: '0°',
                            90: '90°'
                        }}
                    />
                </Form.Item>

                <Form.Item
                    label="Altitude(meters)"
                    name="elevation"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Altitude",
                        }
                    ]}
                >
                    <Slider
                        min={-413}
                        max={8850}
                        marks={{
                            [-413]: '-413m',
                            8850: '8850m'
                        }}
                    />
                </Form.Item>

                <Form.Item
                    label="Radius(degrees)"
                    name="altitude"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Radius",
                        }
                    ]}
                >
                    <Slider
                        min={0}
                        max={90}
                        marks={{
                            0: '0°',
                            90: '90°'
                        }}
                    />
                </Form.Item>

                <Form.Item
                    label="Duration(secs)"
                    name="duration"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Duration",
                        }
                    ]}

                >
                    <Slider
                        min={0}
                        max={90}
                        marks={{
                            0: '0s',
                            45: '45s',
                            90: '90s'
                        }}
                    />
                </Form.Item>

                <Form.Item className="show-nearby" style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Button type="primary" htmlType="submit"       style={{
                        backgroundColor: "black",
                        color: 'white',
                        borderRadius: '5px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    }}>
                        Find Nearby Satellite
                    </Button>
                </Form.Item>

            </Form>
        );
    }
}

export default SatSetting;