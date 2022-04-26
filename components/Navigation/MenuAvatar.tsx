import {
    Menu,
    MenuButton,
    Avatar,
    Center,
    MenuDivider,
    MenuList,
    Text,
    MenuItem,
    Button,
    Link,
    useDisclosure
} from "@chakra-ui/react";


export default function MenuAvatar(): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const avatarSource = 'identicon';
    const avatarSeed = (Math.random()*(9999-1+1)+1>>>0).toString(2);
    const avatarURL = `https://avatars.dicebear.com/api/${avatarSource}/${avatarSeed}.svg`;

    return (
        <Menu>
            <MenuButton
                as={Button}
                rounded={'full'}
                vatiant={'link'}
                cursor={'pointer'}
                minW={0}
                marginLeft={2}
            >
                <Avatar
                    size={'sm'}
                    src={avatarURL}
                />
            </MenuButton>
            <MenuList alignItems={'center'}>
                <br />
                <Center>
                    <Avatar
                        size={'2xl'}
                        src={avatarURL}
                    />
                </Center>
                <br />
                <Center>
                    <Text>Juan</Text>
                </Center>
                <MenuDivider />
                <MenuItem>Cuenta</MenuItem>
                <MenuItem>Configutaci&oacute;n</MenuItem>
                <MenuItem>Salir</MenuItem>

            </MenuList>
        </Menu>
    );
}