import React from "react";
import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((el, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={el.img} alt={el.alt} />
              <ProductInfo>
                <ProductTitle>{el.name}</ProductTitle>
                <ProductDesc>{el.desc}</ProductDesc>
                <ProductPrice>{el.price}</ProductPrice>
                <ProductButton>{el.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
