import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ContactForm extends Component {
  state = { name: '', email: '', msg: ''}

  onChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    // send to email
  }

  render() {
    const { name, email, msg } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='name'
          value={name}
          onChange={this.handleChange}
          required
        />
        <Form.Input
          name='email'
          value={email}
          onChange={this.handleChange}
          required
        />
        <Form.TextArea
          name='msg'
          value={msg}
          onChange={this.handleChange}
          required
        />
        <Form.Button>
          Send
        </Form.Button>
      </Form>
    )
  }
}

export default ContactForm;