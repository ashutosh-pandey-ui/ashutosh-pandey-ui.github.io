import React, { PureComponent } from 'react'

export default class Skills extends PureComponent {
    render() {
        const tileData = [
            {
                img: 'images/html5-logo.png',
                title: 'HTML5',
                author: 'author',
                cols: 2,
            },
            {
                img: 'images/css3-logo.png',
                title: 'CSS3',
                author: 'author',
                cols: 2,
            },
            {
                img: 'images/javascript-logo.png',
                title: 'Javascript',
                author: 'author',
                cols: 2,
            },
            {
                img: 'images/jquery-logo.png',
                title: 'Jquery',
                author: 'author',
                cols: 2,
            },
            {
                img: 'images/reactjs-logo.png',
                title: 'ReactJS',
                author: 'author',
                cols: 2,
            },
            {
                img: 'images/reactnative-logo.png',
                title: 'ReactNative',
                author: 'author',
                cols: 2,
            },
            {
                img: 'images/d3js-logo.png',
                title: 'D3JS',
                author: 'author',
                cols: 2,
            },
        ];
        return (
            <div className="skills-container">
                <h2>
                    Technologies I Work On
                </h2>
                <div className="skills-img-container">
                    {tileData.map((tile, index) => (
                        <img key={tile.title} className={`skills-img skills-img-${index}`} src={tile.img} alt={tile.title} />
                    ))}
                </div>
            </div>
        )
    }
}
