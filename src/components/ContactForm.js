import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import emailjs from 'emailjs-com';

class ContactForm extends Component {
  state = { from_name: '', reply_to: '', message_html: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { from_name, reply_to, message_html } = this.state
    let template_params = {
      "reply_to": reply_to,
      "from_name": from_name,
      "to_name": process.env.REACT_APP_TO_NAME,
      "message_html": message_html
    }

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      template_params, 
      process.env.REACT_APP_USER_ID
    )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    this.setState({ from_name: '', reply_to: '', message_html: ''})
  }

  render() {
    const { from_name, reply_to, message_html } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='from_name'
          value={from_name}
          onChange={this.handleChange}
          required
          placeholder='Your Name'
        />
        <Form.Input
          name='reply_to'
          value={reply_to}
          onChange={this.handleChange}
          required
          placeholder='Your Email'
        />
        <Form.TextArea
          name='message_html'
          value={message_html}
          onChange={this.handleChange}
          required
          placeholder='Message'
        />
        <Form.Button primaryart
        >
          Send
        </Form.Button>
      </Form>
    )
  }
}

export default ContactForm;