import { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Text } from "@chakra-ui/react";

import PhantomIcon from '@components/Images/phantom-icon-purple.png';
import { type } from "os";

type Event = "connect" | "disconnect";

const PhantomIconElement = () => {
    return (
        <Image src={PhantomIcon} alt="Phantom Logo" width={25} height={25} />
    )
}

interface publicKey{
    toBase58?: Function;
}
interface Phantom {
    publicKey: publicKey;
    on: (event: Event, callback: () => void) => void;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
}


const ConnectToPhantom = () => {
    const [phantom, setPhantom] = useState<Phantom | null>(null);
    const [connected, setConnected] = useState(false);

    const connectHandler = () => {
        phantom?.connect({onlyIfTrusted:true});
    };

    const disconnectHandler = () => {
        phantom?.disconnect();
    }

    useEffect(() => {
        phantom?.on("connect", () => {
            setConnected(true);
        })
        phantom?.on("disconnect", () => {
            setConnected(false);
        })
    }, [phantom]);

    useEffect(() => {
        if ("solana" in window) {
            setPhantom(window["solana"]);
        }
    }, []);

    if (phantom) {
        if (connected) {
            const address = phantom?.publicKey.toBase58();
            return (
                <>
                    <Text size="lg">{address}</Text>
                    <Button
                        onClick={disconnectHandler}
                        size="lg"
                        leftIcon={<PhantomIconElement />}
                        colorScheme="green"
                    >
                        Disconnect
                    </Button>
                </>
            )
        }
        else {
            return (
                <Button
                    onClick={connectHandler}
                    size="lg"
                    leftIcon={<PhantomIconElement />}
                    variant="outline"
                    colorScheme="whatsapp"
                >
                    Connect
                </Button>
            );
        }
    } else {
        return (
            <Button
                size="lg"
                leftIcon={<PhantomIconElement />}
                colorScheme="blue"
                variant="solid"
            >
                Get Phantom
            </Button>
        )
    }
}

export default ConnectToPhantom;