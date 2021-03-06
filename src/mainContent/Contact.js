import React from "react";

import { Form, Container, Segment, Header } from "semantic-ui-react";

import "./styles/Contact.css";

const disabled = true;

const Contact = () => {
  return (
    <Segment className="formContainer" vertical>
      <Container text>
        <Header as="h1">Contact Me!</Header>
        <p>Please feel free to reach out about anything.</p>
        <p>
          Feel free to use this form or email me{" "}
          <a href="mailto:matt@mattsmith.site">directly</a> or find me on{" "}
          <a href="https://github.com/Matthew-Smith">GitHub</a> and{" "}
          <a href="https://www.linkedin.com/in/matthew-smith-52553b66/">
            Linkedin
          </a>
        </p>
        <Form ref={ref => (this.form = ref)}>
          <Form.Group widths="equal">
            <Form.Input
              disabled={disabled}
              required
              name="name"
              label="Your Name"
              placeholder="Your name"
              validations="isWords"
            />
            <Form.Input
              disabled={disabled}
              required
              name="email"
              label="Your Email"
              placeholder="email@example.com"
            />
          </Form.Group>

          <Form.Input
            disabled={disabled}
            required
            name="title"
            label="Message Title"
            placeholder="Title of the message"
          />

          <Form.TextArea
            disabled={disabled}
            name="message"
            label="Message"
            placeholder="What would you like to contact me about"
            required
          />

          <Form.Checkbox
            disabled={disabled}
            toggle
            defaultChecked
            label="Send a copy of the email to you"
          />

          <Form.Group>
            <Form.Button content="Submit" color="green" disabled={disabled} />
            <Form.Button
              disabled={disabled}
              type="button"
              content="Reset"
              onClick={() => this.form.reset()}
            />
          </Form.Group>
        </Form>
      </Container>
    </Segment>
  );
};

export default Contact;
