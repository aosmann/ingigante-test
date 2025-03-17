import urlFor from '../lib/urlFor';

interface ImagesProps {
  identifier: string;
  image: any; // or type this better if you know it's SanityImageAsset
}

const Images = ({ identifier, image }: ImagesProps) => {
  return (
    <div className={identifier === 'main-image' ? 'main-image' : 'image'}>
      <img src={urlFor(image).auto('format').url()} alt="property image" />
    </div>
  );
};

export default Images;
