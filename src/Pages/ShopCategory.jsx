import React, { useContext } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from "../Context/ShopContext";
import Item from '../Components/Item/Item';
import CarouselExample from './../Components/Carousel/Carousel';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    return (
        <div className="shop-category">
            <CarouselExample />
            <div className="shopcategory-products">
                {all_product.map((item) => {
                    if (props.category === item.category) {
                        return (
                            <Item
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                                category={item.category} // Truyền category vào Item
                            />
                        );
                    }
                    return null;
                })}
            </div>
            <div className="shopcategory-loadmore">
                <button>Explore More</button>
            </div>
        </div>
    );
};

export default ShopCategory;
