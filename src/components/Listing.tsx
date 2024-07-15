import React from 'react';

interface MainImage {
    url_570xN: string;
}

interface Item {
    listing_id: number;
    url: string;
    MainImage?: MainImage;
    title?: string;
    currency_code: string;
    price: string;
    quantity: number;
}

interface ListingProps {
    items: Item[];
}

const formatPrice = (price: string, currencyCode: string) => {
    switch (currencyCode) {
        case 'USD':
            return `$${price}`;
        case 'EUR':
            return `€${price}`;
        default:
            return `${price} ${currencyCode}`;
    }
};

const getQuantityClass = (quantity: number) => {
    if (quantity <= 10) return 'level-low';
    if (quantity <= 20) return 'level-medium';
    return 'level-high';
};

export const Listing: React.FC<ListingProps> = ({ items }) => {
    if (!items || items.length === 0) return null;

    return (
        <div className="item-list">
            {items.map(item => (
                <div key={item.listing_id} className="item">
                    <div className="item-image">
                        {item.MainImage && item.MainImage.url_570xN ? (
                            <a href={item.url}>
                                <img src={item.MainImage.url_570xN} alt={item.title || 'No title'} />
                            </a>
                        ) : (
                            <div className="no-image">No Image Available</div>
                        )}
                    </div>
                    <div className="item-details">
                        <p className="item-title">
                            {item.title && item.title.length > 50 ? item.title.substring(0, 50) + '…' : item.title || 'No title'}
                        </p>
                        <p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
                        <p className={`item-quantity ${getQuantityClass(item.quantity)}`}>
                            {item.quantity} left
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};