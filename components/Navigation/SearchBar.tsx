import { Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchBar(): JSX.Element {

    return (
        <InputGroup size={'md'} width='20rem' marginRight='3rem'>
            <Input 
                type={'text'}
                placeholder={'Buscar'}
                width='20rem'
                onChange={(e)=>{console.log(e.target.value)}}
                id='searchBar'
            />
            <InputRightElement>
                <IconButton aria-label={'Buscar'} icon={<AiOutlineSearch/>} h='full' variant='ghost' my='0.5rem' size={'sm'} onClick={(e)=>{
                    let searchValue = document.querySelector('#searchBar').value;
                    if(searchValue)
                        console.log(searchValue);
                }}/>
            </InputRightElement>
        </InputGroup>
    )
}