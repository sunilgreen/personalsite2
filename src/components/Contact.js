import React from 'react'
import { Container, Row, Col}  from 'react-bootstrap'
import './Styles/Contact.css'

export default class Contact extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            name: "A person",
            email: "sunilgreen2000@gmail.com",
            phone:  "",
            message: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        const templateId = 'personalsite';
        this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})
        this.setState({message: ""})
        alert("Your message was sent!")

    }

    sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

    render() {
        return(
            <div>

                <h1 id="title">Contact</h1>
                 <p id="maintext">Feel free to send me a message and I will get back to  
                 you as soon as possible
                 </p>
            
            <Container id={this.props.id} fluid>
                
                <form onSubmit={this.handleSubmit} className="contactbody">

                    <Row id="textarearow">
                        <textarea value={this.state.message} id="messagefield" rows={5} cols={50} placeholder="Write a message here..." onChange={this.handleChange}/>

                    </Row>
                    
                       

                    <Row id="submitbuttonrow">
                        <input type="submit" id="submitbutton" value="Submit"/>


                    </Row>
                       
                    
               
                </form>

                


            </Container>

            </div>

            

        )
    }



}