import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import CardForm from './CardForm';

const stripePromise = loadStripe(
	'pk_test_51HZrSYLPpTSttWzfnY25jge0oofYI2nF5CkFkDqsoMrvEFpuHa7l5WoZMEtZVWMwfsqSVXDjxGhq2FtT79KY94lK00DC8xeXHk'
);

const Stripe = () => {
	return (
		<Elements stripe={stripePromise} style={{ width: '200px', margin: 'auto' }}>
			{/* <CardElement
				options={{
					style : {
						base    : {
							fontSize        : '16px',
							color           : '#424770',
							'::placeholder' : {
								color : '#aab7c4'
							}
						},
						invalid : {
							color : '#9e2146'
						}
					}
				}}
            /> */}
			<CardForm />
		</Elements>
	);
};

export default Stripe;
