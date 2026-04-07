import React from 'react';

const Banner = () => {
    return (
       <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto w-[85%] px-10">
            <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                <img className='h-70 w-auto'
                    src="/assets/banner.png"
                />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    
                    <button className="btn btn-success text-white mt-8">View the List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;