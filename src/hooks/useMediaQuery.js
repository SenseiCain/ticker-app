import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
    const [isDisplayed, setIsDisplayed] = useState(true);

    useEffect(() => {
        const media = window.matchMedia(query);

        if (media.matches !== isDisplayed) setIsDisplayed(media.matches);

        const listener = () => setIsDisplayed(media.matches);

        media.addListener(listener);

        return () => media.removeListener(listener);

    }, [query, isDisplayed]);

    return isDisplayed;
}

export { useMediaQuery };