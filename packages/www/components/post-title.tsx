import React from 'react';

const PostTitle: React.FC = ({ children }) => {
    return (
        <section className="flex-col md:flex-row flex md:mt-20 mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-5xl md:text-7xl tracking-tighter leading-tight">
                {children}
            </h1>
        </section>
    );
};

export default PostTitle;
