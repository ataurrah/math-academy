import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Notfound = () => {
    const imgs = 'https://www.prestashop.com/sites/default/files/styles/blog_750x320/public/blog/2019/10/banner_error_404.jpg?itok=eAS4swln'
    return (
        <div>
            <img className='img-fluid w-100' src={imgs} alt="" />

        </div>
    );
};

export default Notfound;