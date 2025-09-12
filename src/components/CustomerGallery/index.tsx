import React from 'react';
import CustomerGalleryCarousel from '../CustomerGalleryCarousel';
import { customer1, customer2, customer3, customer4 } from '@/assets/image';

const CustomerGallery = () => {

    const customers = [
  { name: "John Doe", carModel: "Axia (G,X)", duration: "3 days", img: customer1 },
  { name: "Jane Smith", carModel: "Bezza 1.3", duration: "1 week", img: customer2 },
  { name: "Ali Rahman", carModel: "Ativa Advanced", duration: "5 days", img: customer3 },
  { name: "Ali Rahman", carModel: "Ativa Advanced", duration: "5 days", img: customer4 },
];

    return (
        <div>
            <CustomerGalleryCarousel customers={customers} />
        </div>
    );
};

export default CustomerGallery;