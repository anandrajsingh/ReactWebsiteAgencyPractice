import React from 'react'
import { styled } from 'styled-components'
import Map from "../img/map.png"
import Phone from "../img/phone.png"
import Send from "../img/send.png"

const Container = styled.div`
    height: 90%;
    background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`

const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const FormContainer = styled.div`
    width: 50%;
`

const Title = styled.h1`
    margin: 50px;
    margin-top: 0;
`

const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
`

const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Input = styled.input`
    width: 200px;
    padding: 20px;
`

const Button = styled.button`
    border: none;
    padding: 15px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;
`

const TextArea = styled.textarea`
    width: 200px;
    height: 60%;
`

const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
`

const Icon = styled.img`
    width: 20px;
    margin-right: 20px;
`

const Text = styled.span`
    font-size: 20px;
    margin-right: 50px;
`

const Contact = () => {
  return (
    <Container>
        <Wrapper>
            <FormContainer>
                <Title>Questions? <br/> Let's get in touch</Title>
                <Form>
                <LeftForm>
                    <Input placeholder="Your Name"/>
                    <Input placeholder='Your Email'/>
                    <Input placeholder='Subject'/>
                </LeftForm>
                <RightForm>
                    <TextArea placeholder='Your Message'/>
                    <Button>Send</Button>
                </RightForm>
                </Form>
            </FormContainer>
            <AddressContainer>
                <AddressItem>
                    <Icon src={Map}/>
                    <Text>123 Park Avenue Street, New York, USA</Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Phone}/>
                    <Text>+1 123 456 7890</Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Send}/>
                    <Text>contact@agency</Text>
                    <Text>sales@agency</Text>
                </AddressItem>
            </AddressContainer>
        </Wrapper>
    </Container>
  )
}

export default Contact
