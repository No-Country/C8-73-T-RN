const Overlay = ({ show, children }) => {
    return <div className={`overlay ${show ? 'overlay-active' : ''}`}>{children}</div>;
};

export { Overlay };
