import React from 'react';

export const Button:React.FC<ButtonType> = ({name}) => {
    return (
        <button>
            {name}
            </button>
    );
};

type ButtonType={
    name:string
}