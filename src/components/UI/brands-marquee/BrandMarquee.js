import Marquee from 'react-fast-marquee';

const BrandMarquee = ({ data, className, imgClassName, direction }) => {
    const getImageUrl = imgUrl => {
        let url;
        try {
            //url = images('./' + imgUrl).default;
            url = 'images/' + imgUrl;
        } catch (error) {
            url = ''; //imgUrl;
        }
        return url;
    };

    return (
        <Marquee className={className} direction={direction} speed={40} gradient={false}>
            {data.map(brand => (
                <img
                    className={imgClassName}
                    src={getImageUrl(brand.img)}
                    alt={brand.name}
                    key={brand.id}
                />
            ))}
        </Marquee>
    );
};

export default BrandMarquee;
