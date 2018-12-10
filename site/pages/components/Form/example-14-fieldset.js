/**
 * cn - FieldSet
 *    -- Form.FieldSet 可以处理对象类型的字段
 * en - FieldSet
 *    -- Form.FieldSet handles fields of object type
 */
import React, { PureComponent } from 'react'
import { Form, Input, Checkbox, Select } from 'shineout'
import { fetchSync as fetchCity } from 'doc/data/city'

const citys = fetchCity(20)

const rules = {
  age: [
    { min: 18, max: 60, message: 'Age must between {min} and {max}.' },
  ],
  city: [
    { required: true, message: 'Please select your city.' },
  ],
  name: [
    (value, _, callback) => {
      const isEmpty = !value || (!value.firstName && !value.lastName)
      callback(isEmpty ? new Error('firstName and lastName cannot both be empty') : true)
    },
  ],
}

export default class extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { value: undefined }
  }

  componentDidMount() {
    this.initValue()
  }

  initValue() {
    this.setState({
      value: {
        email: 'test@example.com',
        account: {
          name: {
            firstName: 'James',
            lastName: 'Potter',
          },
          age: 18,
          city: 3,
        },
        favoriteColor: ['cyan', 'yellow'],
      },
    })
  }

  handleChange = (value) => {
    this.setState({ value })
  }

  render() {
    return (
      <Form value={this.state.value} onChange={this.handleChange} onSubmit={(data) => { console.log(data) }}>
        <Form.Item label="Email">
          <Input name="email" />
        </Form.Item>

        <Form.Item label="Password">
          <Input name="password" type="password" />
        </Form.Item>

        <Form.Item label="Account">
          <Form.FieldSet name="account" labelWidth={60}>
            <Form.Item label="Name">
              <Form.FieldSet rules={rules.name} name="name">
                <Input.Group style={{ width: 300 }}>
                  <Input name="firstName" placeholder="First Name" />
                  -
                  <Input name="lastName" placeholder="Last Name" />
                </Input.Group>
              </Form.FieldSet>
            </Form.Item>

            <Form.Item label="Age">
              <Input
                rules={rules.age}
                style={{ width: 100 }}
                name="age"
                type="number"
                digits={0}
                defaultValue={0}
              />
            </Form.Item>

            <Form.Item label="City">
              <Select
                name="city"
                data={citys}
                datum={{ format: 'id' }}
                keygen="id"
                renderItem="city"
                rules={rules.city}
                style={{ width: 200 }}
              />
            </Form.Item>

          </Form.FieldSet>
        </Form.Item>

        <Form.Item label="Favorite Color">
          <Checkbox.Group
            name="favoriteColor"
            keygen
            data={['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']}
          />
        </Form.Item>

        <Form.Item label="">
          <Form.Submit>Submit</Form.Submit>
          <Form.Reset>Reset</Form.Reset>
        </Form.Item>
      </Form>
    )
  }
}
