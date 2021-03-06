import React, { PureComponent } from 'react'

export default class Projects extends PureComponent {
    render() {
        const tileData = [
            {
                img: 'images/investment.jpg',
                title: 'Investment',
                author: 'author',
                cols: 2,
            },
            {
                img: 'images/datascience.jpg',
                title: 'Datascience',
                author: 'author',
                cols: 2,
            },
            {
                img: 'images/healthcare.jpg',
                title: 'Healthcare',
                author: 'author',
                cols: 2,
            },
            {
                img: 'images/mobileapp.jpg',
                title: 'MobileApp',
                author: 'author',
                cols: 2,
            },
        ];
        return (
            <div className="projects-container">
                <h2>
                    Domains I worked On
                </h2>
                <div className="gridList">
                    {tileData.map((tile) => (
                        <img key={tile.title} className="projects-img" src={tile.img} alt={tile.title} />
                    ))}
                </div>
            </div>
        )
    }
}
