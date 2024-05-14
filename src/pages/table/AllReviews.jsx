import React, { useState } from "react";
import "./allReviews.css"
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Heading, Button } from '@chakra-ui/react'
import { DeleteIcon, EditIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'
import {useNavigate} from 'react-router-dom'

const AllReviews = () => {
    const[update,setUpdate] = useState(false);
    const navigate = useNavigate();

    const reviewData = JSON.parse(localStorage.getItem("aromatic")) || [];
    console.log("original",reviewData);

    const handleDelete = (elem,id)=>{
        const splicedReviewData = reviewData.splice(id,1);
        localStorage.setItem("aromatic",JSON.stringify(reviewData));
        setUpdate(!update)
    }

    const handleAdd = ()=>{
        console.log("add")
        navigate('/')
    }

    return (
        <div className="container">
            <div className="tablecontainer">
                <Heading mb='10' > Aromatic Bar</Heading>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Customer Name</Th>
                                <Th>Email</Th>
                                <Th>Phone</Th>
                                <Th>Dining Experience</Th>
                                <Th>Host Service</Th>
                                <Th>Quality Of Baverage</Th>
                                <Th>Cleanliness</Th>
                                {/* <Th>Edit/Delete</Th> */}
                            </Tr>

                        </Thead>
                        <Tbody>
                            {
                                reviewData.map((elem, id, array) => {
                                    return <Tr key={id}>
                                        <Td>{elem.customerName}</Td>
                                        <Td>{elem.email}</Td>
                                        <Td>{elem.phone}</Td>
                                        <Td>{elem.diningExperience}</Td>
                                        <Td>{elem.hostService}</Td>
                                        <Td>{elem.qualityOfBaverage}</Td>
                                        <Td>{elem.wasClean}</Td>
                                        <td onClick={() => { handleDelete(elem,id) }} > <DeleteIcon /> </td>
                                    </Tr>
                                })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
            <Button colorScheme='purple' size='lg' className="submit addnew" onClick={handleAdd}>
                Add New
            </Button>
        </div>
    )
}

export default AllReviews;