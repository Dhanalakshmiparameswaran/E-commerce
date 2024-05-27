import React from 'react';
import './App.css';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    onAddCard: (card: CardData) => void; // Callback function for adding card
}

interface CardData {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
}

const Cards: CardData[] = [
    {
                imageUrl: 'https://higherintelligenceai.com/cdn/shop/products/41Ml0y40DCL.jpg?v=1683054808',
                title: ' Smart Watch',
                description: 'supports apps and acts as an extension of your mobile phone in some cases . all color available and allow to ship case an delivary',
                price: 2500,
            },
            {
                imageUrl: 'https://www.jiomart.com/images/product/original/rvqglfzl05/sakrit-collections-pink-fashionable-women-handbag-product-images-rvqglfzl05-0-202303120156.jpg?im=Resize=(500,630)',
                title: 'Bag',
                description: 'which you carry personal things clothes or other things that you need for travelling Each piece has a story to tell, whether its a treasure',
                price: 700,
            },
            {
                title: 'hp Laptop',
                description: 'The screen shows what happening on the computer right now, just like the screen on a desktop .depends on your requirement. ',
                imageUrl: 'https://p.rmjo.in/productSquare/jir7agyl-500x500.webp',
                price: 45000,
            },
            {
                title: 'Shoes',
                description: 'They cushion our body weight, protect our feet, and allow us to safely play sports.A good shoe should provide comfort to your feet',
                imageUrl: 'https://5.imimg.com/data5/DR/MJ/WQ/SELLER-84868583/men-sneakers-shoes-500x500.jpg',
                price: 1800,
            },
            {
                title: 'Silver Brass Jewellery',
                description: 'We manufacture the Best and Premium quality Gold color. This product is handmade with love and attention,multi-color beads',
                imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/8/332358648/WV/JH/MO/114726268/imitation-jewellery-500x500.jpg',
                price: 3000,
            },
            {
                title: 'Women watch',
                description: ' A watch is an accessory that can make you look stylish, but its also a useful tool.This product is handmade with love and attention,multi-color  ',
                imageUrl: 'https://5.imimg.com/data5/ND/TH/GD/IOS-44781118/ladies-watch-500x500.jpeg',
                price: 1500,
            },
            {
                title: 'School bag',
                description: ' A schoolbag is a bag that children use to carry books and other things to and from school.it carry anythink and anywhere',
                imageUrl: 'https://homafy.com/wp-content/uploads/2024/01/Space-saving-bags-for-travel-1-500x500.jpg',
                price: 1200,
            },
            {
                title: 'Dell Laptop',
                description: ' A laptop computer or notebook computer, also  notebook meaning of LAPTOP is of a size and design that makes operation .',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShexkdrtEwrFwa_PiH10vtLX6Qd5sZjIotgniFNgIkhA&s',
                price: 46000,
            },
            
            {
                title: 'Watch',
                description: ' Scratchproof sapphire glass 10 ATM water resistance.but its also a useful tool.This product is handmade with love',
                imageUrl: 'https://tiimg.tistatic.com/fp/1/007/955/modern-design-glossy-finish-round-shape-ladies-fancy-watch-for-daily-wear-967.jpg',
                price: 1900,
            },
            {
                title: 'Temple Jewellery',
                description: 'its about expressing your identity, style, emotions. Each piece has a story to tell, whether its a treasured  or a recent purchase ',
                imageUrl: 'https://i.pinimg.com/564x/e3/26/78/e3267823fb1b37cff3cce30eed10f33f.jpg',
                price: 4000,
            },
            
            {
                title: 'Black shoes',
                description: ' if you are going to wear them for extended periods. It should fit well with width .sole with an attached heel and an upper part of lighter.',
                imageUrl: 'https://www.jiomart.com/images/product/original/rvwex4wrcz/roddick-shoes-stylish-black-boot-shoes-for-party-shoes-for-womens-product-images-rvwex4wrcz-0-202208290056.jpg?im=Resize=(500,630)',
                price: 900,
            },
            {
                title: 'Gym bag',
                description: 'It can be used as a handbag or a shoulder bag. Strong Material – Made from super light and strong material bag implies shooting down.  ',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq5u6COkDjINyUBtzjV2GJpChxNVRnQ1oa7W9UQ0kr2g&s',
                price: 700,
            },
];

const Card: React.FC<CardProps> = ({ title, price, description, imageUrl, onAddCard }) => {
    const handleAddClick = () => {
        const cardData: CardData = { title, description, imageUrl, price };
        onAddCard(cardData);
    };

    return (
        <div className="card col-md-3 mb-4">
            <img src={imageUrl} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-price">${price}</p>
                <p className="card-description">{description}</p>
                <button className="card-btn" onClick={handleAddClick}>Add Card</button>
            </div>
        </div>
    );
};

interface CardContainerProps {
    onAddCard: (card: CardData) => void;
}

const CardContainer: React.FC<CardContainerProps> = ({ onAddCard }) => {
    return (
        <div className="container">
            <div className="card-container">
                {Cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                        price={card.price}
                        onAddCard={onAddCard} // Pass the function to handle adding card
                    />
                ))}
            </div>
        </div>
    );
};

export default CardContainer;

