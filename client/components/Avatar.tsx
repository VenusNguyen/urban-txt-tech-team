import { Image } from 'react-native';

export type AvatarProps = {
    source: string;
    alt?: string;
    size?: number;
    borderRadius?: number;
}

export default function Post({ source, alt="img", size=100, borderRadius=50 }: AvatarProps) {
    return (
        <Image
            source={require(source)}
            style={{ width: size,
                     height: size,
                     borderRadius: borderRadius,
                    }}
        ></Image>
    );
}
