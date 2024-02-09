import React, { useEffect, useState } from 'react';
import { Button, Image } from 'antd';
import { API_ENDPOINTS } from '../../urlConfig';
import { Carousel } from 'antd';

const contentStyle = {
    height: '350px',
    color: '#fff',
    textAlign: 'center',
    background: 'transparent',
    marginTop: '5%',
    // boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.3)',
    borderRadius: '5px'
};

const Banner = () => {

    const [bannerUrls, setBannerUrls] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [tagLine, setTagLine] = useState("Welcome to my profile! With over 8 years of dedicated experience in web development...");

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await fetch(API_ENDPOINTS.BANNER_IMAGES);
                if (response.status === 200) {
                    const data = await response.json();
                    setBannerUrls(data.data.map((image) => image));
                    if (data.data.length > 0) {
                        setTagLine(data.data[0].tagline);
                    }
                } else {
                    console.error('Error fetching banners:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching banners:', error.message);
            }
        };

        fetchBanners();
    }, []);

    // Log the bannerUrls
    console.log('bannerUrls:', bannerUrls);

    const handleCarouselChange = (index) => {
        // Update tagLine based on the current index of the carousel
        setTagLine(bannerUrls[index].tagline);
    };

    return (
        <div id="banner-content" className="row clearfix">
            <div className="col" id="bannerImage">
                <div className="col-2" key={'leftbox'}>
                    <div className="section-heading">
                        <h1 className='text-shadow'>ARIJIT NANDI</h1>
                        <h2>
                            {tagLine}
                        </h2>
                    </div>
                    <Button variant="outlined">START CREATING TODAY</Button>
                </div>
                <div className="col-2" key={'rightbox'}>
                    <Carousel autoplay style={contentStyle} afterChange={handleCarouselChange} autoplaySpeed={10000} effect='fade' infinite={true} dots={false}>
                        {bannerUrls.map((image) => (
                            <Image
                                key={image.ID}
                                style={{ width: '583px', height: 583, maxHeight: 350, objectFit: 'cover', boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.3)', borderRadius: 10 }}
                                src={image.url}
                                preview={false}
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Banner;