import React, { useState } from "react";
import "./form.css"
import { Heading, FormControl, FormLabel, Input, Checkbox, RadioGroup, Stack, Radio, Button, FormErrorMessage,ModalHeader ,Modal,ModalContent,ModalFooter,ModalBody,ModalCloseButton,ModalOverlay } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [hostService, setHostService] = useState("");
    const [wasClean, setWasClean] = useState("");
    const [qulaityBaverage, setQualityBaverage] = useState("");
    const [diningExperience, setDiningExperience] = useState("");
    const [customerName,setCustomerName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [nameErr,setNameErr] = useState(false);
    const [emailErr,setEmailErr] = useState(false);
    const [phoneErr,setPhoneErr] = useState(false);
    const [hostServiceErr, setHostServiceErr] = useState(false);
    const [wasCleanErr, setWasCleanErr] = useState(false);
    const [qulaityBaverageErr, setQualityBaverageErr] = useState(false);
    const [diningExperienceErr, setDiningExperienceErr] = useState(false);
    const [modalOpen,setModalOpen] = useState(false);
    const navigate = useNavigate();
    

    const isValidPhone = (phone)=>{
        const phonePattern = /^(?:[0-9\-\\(\\)\\/.]\s?){9,9}[0-9]{1}$/;
        if(phonePattern.test(phone)){
            setPhoneErr(false);
            return true;
        }
        else{
            setPhoneErr(true);
            return false;
        }
    }

    const isValidEmail = (email)=>{
        const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if(emailPattern.test(email)){
            setEmailErr(false);
            return true;
        }
        else{
            setEmailErr(true);
            return false;
        }
    }

    const isValidName = (name)=>{
        const namePattern = /^[a-z ,.'-]+$/i
        if(namePattern.test(name)){
            setNameErr(false);
            return true;
        }
        else{
            setNameErr(true);
            return false;
        }
    }

    const isValid = (name,func)=>{
        if(name.length>=3){
            func(false);
            return true;
        }
        else{
            func(true);
            return false;
        }
    }

    const handleSubmit = ()=>{
        isValidEmail(email);
        isValidPhone(phone);
        isValidName(customerName);
        // isValid(customerName,setNameErr);
        isValid(hostService,setHostServiceErr);
        isValid(wasClean,setWasCleanErr);
        isValid(qulaityBaverage,setQualityBaverageErr);
        isValid(diningExperience,setDiningExperienceErr);
        if(isValidEmail(email) && isValidPhone(phone) && isValidName(customerName) && isValid(hostService,setHostServiceErr) && isValid(wasClean,setWasCleanErr) && isValid(qulaityBaverage,setQualityBaverageErr) && isValid(diningExperience,setDiningExperienceErr)){
            const reviewObj = {
                "customerName" : customerName,
                "email" : email,
                "phone" : phone,
                "hostService" : hostService,
                "wasClean" : wasClean,
                "qualityOfBaverage" : qulaityBaverage,
                "diningExperience" : diningExperience
            }
            const reviewArr = JSON.parse(localStorage.getItem("aromatic")) || [];
            reviewArr.push(reviewObj);
            localStorage.setItem("aromatic",JSON.stringify(reviewArr))
            setModalOpen(true);
            console.log(reviewArr)
        }
        else{
            console.log("something wrong in inputs")
        }
    }

    const handleModalClose = ()=>{
        setModalOpen(false)
        navigate('/table')
    }


    return (
        <div className="container">
            <Heading className="mainheading">Aromatic Bar</Heading>
            <div className="formcontainer">
                <div className="left">
                    <FormControl isRequired className="formcontrol" isInvalid={nameErr} >
                        <FormLabel>Customer name</FormLabel>
                        <Input placeholder='Eg. Jon snow' onChange={(e)=>{setCustomerName(e.target.value)}} />
                        {nameErr ? <FormErrorMessage> Name should be atleast of 3 letters and not numbers </FormErrorMessage> : null}
                    </FormControl>

                    <FormControl isRequired className="formcontrol" isInvalid={phoneErr}>
                        <FormLabel>Phone</FormLabel>
                        <Input placeholder='Eg. 9999999999' type="number" onChange={(e)=>{setPhone(e.target.value)}} />
                        {phoneErr ? <FormErrorMessage> Phone number is not valid </FormErrorMessage> : null}
                    </FormControl>

                    <FormControl isRequired className="formcontrol" isInvalid={hostServiceErr} >
                        <FormLabel>Please rate quality of service you received from your host</FormLabel>
                        <RadioGroup defaultValue='2' onChange={setHostService} >
                            <Stack spacing={5} direction='row'>
                                <Radio colorScheme='purple' value='Excellent'>
                                    Excellent
                                </Radio>
                                <Radio colorScheme='purple' value='Good'>
                                    Good
                                </Radio>
                                <Radio colorScheme='purple' value='Fair'>
                                    Fair
                                </Radio>
                                <Radio colorScheme='purple' value='Bad'>
                                    Bad
                                </Radio>
                            </Stack>
                        </RadioGroup>
                        {hostServiceErr ? <FormErrorMessage> Please select one of the above options </FormErrorMessage> : null}
                    </FormControl>

                    <FormControl isRequired className="formcontrol" isInvalid={wasCleanErr} >
                        <FormLabel>Was our restaurent clean</FormLabel>
                        <RadioGroup defaultValue='2' onChange={setWasClean} >
                            <Stack spacing={5} direction='row'>
                                <Radio colorScheme='purple' value='Excellent'>
                                    Excellent
                                </Radio>
                                <Radio colorScheme='purple' value='Good'>
                                    Good
                                </Radio>
                                <Radio colorScheme='purple' value='Fair'>
                                    Fair
                                </Radio>
                                <Radio colorScheme='purple' value='Bad'>
                                    Bad
                                </Radio>
                            </Stack>
                        </RadioGroup>
                        {wasCleanErr ? <FormErrorMessage> Please select one of the above options </FormErrorMessage> : null}
                    </FormControl>

                </div>
                <div className="right">
                    <FormControl isRequired className="formcontrol" isInvalid={emailErr} >
                        <FormLabel>Email</FormLabel>
                        <Input placeholder='Eg. abc@gamil.com' type="email" onChange={(e)=>{setEmail(e.target.value)}} />
                        {emailErr ? <FormErrorMessage> Email is not valid </FormErrorMessage> : null}
                    </FormControl>

                    <div className="rightdown">
                        <FormControl isRequired className="formcontrol" isInvalid={qulaityBaverageErr} >
                            <FormLabel>Please rate quality of your beverage</FormLabel>
                            <RadioGroup defaultValue='2' onChange={setQualityBaverage} >
                                <Stack spacing={5} direction='row'>
                                    <Radio colorScheme='purple' value='Excellent'>
                                        Excellent
                                    </Radio>
                                    <Radio colorScheme='purple' value='Good'>
                                        Good
                                    </Radio>
                                    <Radio colorScheme='purple' value='Fair'>
                                        Fair
                                    </Radio>
                                    <Radio colorScheme='purple' value='Bad'>
                                        Bad
                                    </Radio>
                                </Stack>
                            </RadioGroup>
                            {qulaityBaverageErr ? <FormErrorMessage> Please select one of the above options </FormErrorMessage> : null}
                        </FormControl>

                        <FormControl isRequired className="formcontrol" isInvalid={diningExperienceErr} >
                            <FormLabel>Please rate your overall dining experience</FormLabel>
                            <RadioGroup defaultValue='2' onChange={setDiningExperience} >
                                <Stack spacing={5} direction='row'>
                                    <Radio colorScheme='purple' value='Excellent'>
                                        Excellent
                                    </Radio>
                                    <Radio colorScheme='purple' value='Good'>
                                        Good
                                    </Radio>
                                    <Radio colorScheme='purple' value='Fair'>
                                        Fair
                                    </Radio>
                                    <Radio colorScheme='purple' value='Bad'>
                                        Bad
                                    </Radio>
                                </Stack>
                            </RadioGroup>
                            {diningExperienceErr ? <FormErrorMessage> Please select one of the above options </FormErrorMessage> : null}
                        </FormControl>
                    </div>
                </div>
            </div>
            <Button colorScheme='purple' size='lg' className="submit" onClick={handleSubmit}>
                Submit Review
            </Button>


            <Modal isOpen={modalOpen} onClose={() => { setModalOpen(false) }}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader></ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <div className="thanks-container">
                                    <Heading mb={1} as={'h2'} size={'md'} >Thank you for providing feedback</Heading>
                                    <Heading as={'h3'} size={'sm'}>we will work towards imporving your experience</Heading>
                                </div>
                            </ModalBody>

                            <ModalFooter>
                                <Button bg='purple' color='white' size='lg' mt='4' mb='4' pr='14' pl='14' _hover={{
                                    background: "white",
                                    color: "var(--primary-color)",
                                    border: '1px',
                                    borderColor: 'var(--primary-color)'
                                }}
                                    mr={125}
                                    onClick={handleModalClose}>
                                    Close
                                </Button>
                                
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
        </div>
    )
}

export default Form;