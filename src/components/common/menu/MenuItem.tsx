import React from 'react';

type Props = {
    children: React.ReactNode;
} & AppendClassName;

const Component: React.VFC<Props> = ({ children, appendClassName }) => {
    if (React.Children.count(children) > 1) {
        throw new Error('Only one element can be specified for the children of the MenuItem component.');
    }
    return React.isValidElement(children) ? (
        <li className={appendClassName} role="none">
            {React.cloneElement(children, {
                role: 'menuitem',
            })}
        </li>
    ) : (
        <li className={appendClassName} role="menuitem">
            {children}
        </li>
    );
};

export const MenuItem = Component;
