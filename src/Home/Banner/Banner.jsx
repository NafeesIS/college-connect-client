import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://www.shutterstock.com/shutterstock/photos/1105245935/display_1500/stock-photo-multiethnic-students-taking-group-photo-to-celebrate-their-graduation-day-copy-space-education-1105245935.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://st2.depositphotos.com/1001814/10969/i/950/depositphotos_109694726-stock-photo-group-of-laughing-graduates-with.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://www.workitdaily.com/media-library/group-of-college-students-celebrate-their-graduation.jpg?id=23512028&width=1200&height=800&quality=85&coordinates=0%2C0%2C0%2C0" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/group-students-attending-graduation-ceremony-nice-day_115086-774.jpg?w=2000" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;