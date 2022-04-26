import {
    Modal,
    ModalOverlay,
    ModalCloseButton,
    ModalFooter,
    ModalBody,
    ModalHeader,
    ModalContent,
    useDisclosure,
    Button,
    IconButton,
} from '@chakra-ui/react'
import { BiWalletAlt } from 'react-icons/bi';
import Login from '@components/login'



function LoginModal(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <IconButton onClick={onOpen} variant="outline" ml="auto" icon={<BiWalletAlt />} aria-label={'Wallet'} />
            <Modal
            isCentered
            blockScrollOnMount={false}
            onClose={onClose}
            isOpen={isOpen}
            motionPreset='scale'
            size={'xl'}
            >
                <ModalOverlay 
                bg='blackAlpha.300'
                backdropFilter='blur(3px) grayscale(0.85)'
                />
                <ModalContent>
                    <ModalHeader>Login</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Login/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose} mr={3} colorScheme='blue'>
                            Cerrar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
        );
        
    }
    
    export default LoginModal;