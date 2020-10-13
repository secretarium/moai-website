import React from 'react';

type ContainerProps = {
    padding?: string;
};

const Container: React.FC<ContainerProps> = ({ children, padding }) => {
    return <div className={`container mx-auto ${padding ?? 'px-5'}`}>{children}</div>;
};

export default Container;
