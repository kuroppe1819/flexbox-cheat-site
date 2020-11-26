import React from 'react';

type Props = {
    children: React.ReactNode;
};

const Component: React.VFC<Props> = ({ children }) => {
    if (React.Children.count(children) > 1) {
        throw new Error('Only one element can be specified for the children of the MenuItem component.');
    }
    return React.isValidElement(children) ? (
        <li role="none">
            {React.cloneElement(children, {
                role: 'menuitem',
            })}
        </li>
    ) : (
        <li role="menuitem">{children}</li>
    );
};

export const MenuItem = Component;
