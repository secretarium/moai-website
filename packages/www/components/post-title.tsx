import React from 'react';

const PostTitle: React.FC = ({ children }) => {
    return (
        <section className="flex-col md:flex-row flex md:mt-20 mb-8 md:mb-12">
            <h1 className="text-2xl md:text-5xl tracking-tighter leading-tight">
                {children}
            </h1>
        </section>
    );
};

export default PostTitle;
