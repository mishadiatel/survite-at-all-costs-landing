import React, {useEffect, useState} from 'react';

const useBackgroundChange = (backgroundArray: string[], interval: number = 15000) => {
    const [bgIndex, setBgIndex] = useState<number>(0);

    useEffect(() => {
        const changeBackgroundImage = () => {
            setBgIndex((prevIndex) => (prevIndex + 1) % backgroundArray.length);
        };
        const intervalId = setInterval(changeBackgroundImage, interval);

        return () => clearInterval(intervalId);
    }, [interval]);

    return backgroundArray[bgIndex];
};

export default useBackgroundChange;
