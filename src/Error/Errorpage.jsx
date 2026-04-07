import React from 'react';
import { Navigate } from 'react-router';


const Errorpage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-24">
            <div className="text-center max-w-lg">
                {/* Error Code */}
                <h1 className="text-9xl font-black text-blue-600 opacity-20 select-none">
                    404
                </h1>

                {/* Error Message */}
                <div className="relative -mt-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Something went wrong!
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        The page you are looking for might have been removed, had its name changed,
                        or is temporarily unavailable.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    {/* <button
                        onClick={() => Navigate('/')}
                        className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all active:scale-95"
                    >
                        Back to Home
                    </button> */}

                    <button
                        onClick={() => window.location.reload()}
                        className="w-full sm:w-auto px-8 py-3 bg-gray-50 text-gray-700 font-medium rounded-xl border border-gray-200 hover:bg-gray-100 transition-all"
                    >
                        Try Again
                    </button>
                </div>
            </div>

            {/* Decorative Blur Background Elements */}
            <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
    );
};

export default Errorpage;