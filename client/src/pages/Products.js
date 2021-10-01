import React from 'react';
// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './products.css';

const Products = (props) => {
	return (
		<div className="container ">
			{props.product &&
				props.product.map((item) => (
					<Link to="/product/id" key={item.imdbID}>
						<div className="box">
							<img src={item.Poster} alt="product"></img>
						</div>
						<div>
							<p>Item Brand</p>
							<p>Product name</p>
							<p>Price</p>
						</div>
					</Link>
				))}
		</div>
	);
};

export default Products;