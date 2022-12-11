import { useState } from 'react'; // HOOKS

const useOverlay = () => {
    const [showOverlay, updateShowOverlay] = useState(false);

    const openOverlay = () => updateShowOverlay(true);

    const closeOverlay = () => updateShowOverlay(false);

    return { showOverlay, openOverlay, closeOverlay };
};

export { useOverlay };
