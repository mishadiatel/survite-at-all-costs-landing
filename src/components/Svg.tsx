import React, {MouseEventHandler, useState} from 'react';
import sprite from '../assets/svg/sprite.svg'

interface SvgProps {
    name: string;
    fill: string;
    height: string;
    width: string;
    hoverColor?: string
}
const Svg: React.FC<SvgProps> = ({name, fill, height, width, hoverColor}) => {
    const [color, setColor] = useState<string>(fill)
    const onMouseMove = () => {
        setColor(hoverColor || fill)
    }
    const onMouseLeave = () => {
        setColor(fill)
    }
    return (
        <svg style={{transition: 'all 0.3s ease'}} height={height} width={width} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
            <use height={height} width={width} xlinkHref={`${sprite}#${name}`} fill={color} style={{transition: 'fill 0.3s ease'}}></use>
        </svg>
    );
};

export default Svg;
