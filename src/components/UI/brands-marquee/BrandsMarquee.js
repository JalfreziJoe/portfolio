import classes from './BrandsMarquee.module.scss';
import Skeleton from 'react-loading-skeleton';
import BrandMarquee from './BrandMarquee';

import useDb from '../../../hooks/use-db';
import { useEffect, useState } from 'react';

const BrandsMarquee = () => {
    const [brands, setBrands] = useState([]);
    const [isLoading, error, requestData] = useDb();

    useEffect(() => {
        const transformBrandData = data => {
            const loadedData = [];
            //console.log(data);
            for (const key in data) {
                loadedData.push({ id: key, name: data[key].name, img: data[key].img });
            }
            setBrands(loadedData);
        };
        requestData(
            {
                url: 'https://portfolio-b6895-default-rtdb.europe-west1.firebasedatabase.app/brands.json',
            },
            transformBrandData
        );
    }, [requestData]);

    let brandsMarquee = <Skeleton count={3} />;
    if (brands.length > 0 && !isLoading && !error) {
        const noPerMarquee = Math.floor(brands.length / 3);
        const splitBrand0 = [...brands];
        const splitBrand1 = splitBrand0.splice(0, noPerMarquee);
        const splitBrand2 = splitBrand0.splice(0, noPerMarquee);
        // while (brandsToSplit.length) {
        //     console.log(brandsToSplit.splice(0, noPerMarquee));
        // }
        brandsMarquee = (
            <>
                <BrandMarquee
                    className={classes.marquee}
                    imgClassName={classes['brand-image']}
                    direction={'left'}
                    data={splitBrand0}
                />
                <BrandMarquee
                    className={classes.marquee}
                    imgClassName={classes['brand-image']}
                    direction={'right'}
                    data={splitBrand1}
                />
                <BrandMarquee
                    className={classes.marquee}
                    imgClassName={classes['brand-image']}
                    direction={'left'}
                    data={splitBrand2}
                />
            </>
        );
    }
    return (
        <div className={classes['marquee-container']}>
            {brandsMarquee}
            {/* <img src={images('./dior.png').default} className={classes['brand-image']} alt="dior" /> */}
            {/* <Marquee className={classes.marquee} gradient={false} speed={40}>
                <p>Dior J'Adore</p>
                <p>Cartier</p>
                <p>Ford </p>
                <p>Google</p>
                <p>Samsung</p>
                <p>Mclaren</p>
                <p>Zwift</p>
                <p>Genesis</p>
                <p>Bethesda</p>
            </Marquee> 
            <Marquee className={classes.marquee} gradient={false} direction="right" speed={40}>
                <p>Santos de Cartier</p>
                <p>Fender</p>
                <p>Kenwood Travel</p>
                <p>Loro Piana</p>
                <p>Seabourne</p>
                <p>O2</p>
                <p>Taylormade</p>
                <p>Wild Frontiers</p>
                <p>Graff</p>
            </Marquee>
            <Marquee className={classes.marquee} gradient={false} speed={40}>
                <p>Jet2</p>
                <p>Crest Nicholson</p>
                <p>Qatar Airways</p>
                <p>Dior Fine Jewellery</p>
                <p>MS Society</p>
                <p>Dogfest</p>
                <p>Telegraph</p>
                <p>Visit Dubai</p>
                <p>Audi</p>
                <p>Maggie Sottero</p>
            </Marquee>*/}
        </div>
    );
};

export default BrandsMarquee;
