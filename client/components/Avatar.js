import { Image } from 'react-native';

export default function Avatar({ placeholderImageSource, size, radius  }) {
  return (
    <Image
        source={placeholderImageSource}
        style={{ height: size,
                 width: size,
                 borderRadius: radius,
                 marginLeft: 5,
                 marginRight: 5,
                 marginTop: 5,
                 marginBottom: 5,
                }}
    />
  );
}