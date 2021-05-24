import Link from 'next/link';
import React, { useEffect } from 'react';
import { Container } from "../layout"
import Product from "./Product"
export const getStaticProps = () => {
    const products = [
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        }
    ]

    return {
        props: {
            products
        }
    }
}


const Content = () => {

    const products = [
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
        {
            src: '/images/clothe.png',
            title: ' Mens Fitness Clothes Set Men Quick Dry Breathable Tights Run Sportswear Training Gym - gray (age Four-piece set ) L ',
            price: '$200',
            reviews: '5',
        },
    ]
    return (
        <Container cls='px-10 overflow-hidden'>


            <div className='grid  grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5 '>

                {
                    products.map(({ src, title, price, preiews, reviews }, k) =>
                        <Product
                            key={k}
                            src={src}
                            title={title}
                            price={price}
                            preiews={preiews}
                            reviews={reviews}

                        />
                    )
                }



            </div>
            <div className='col-span-1 my-10 flex items-center justify-center'>
                <Link href='/all'>
                    <a className='animation ease-in-out duration-200 transform hover:scale-105 rounded-2xl hover:bg-red-200  hover:shadow-lg cursor-pointer text-sm px-6 py-2 bg-red-50 border border-red-200'>
                        show all
                   </a>
                </Link>

            </div>
        </Container>
    )
}

export default Content


