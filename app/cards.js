import Image from 'next/image';
import { useState } from 'react';

function Card({ initialSrc, hoverSrc, width, height }) {
    const [src, setSrc] = useState(initialSrc);

    return (
        <div className='cursor-pointer'>
            <Image
                className="w-auto rounded-xl drop-shadow-lg transition-opacity duration-500"
                src={src}
                width={width}
                height={height}
                alt="Card"
                onMouseEnter={() => setSrc(hoverSrc)}
                onMouseLeave={() => setSrc(initialSrc)}
            />
        </div>
    );
}

export default function Cards() {
    return (
        <div className='grid grid-cols-12 px-4 gap-4'>
            <div className='col-span-3'>
                <div className='p-10 pt-24'>
                    <p className='font-light italic'>“Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Quia sapiente enim dolorem temporibus eligendi! Fuga libero cumque, cum sed, excepturi“</p>
                    <Image className="pt-8 w-auto" src="/images/signature.jpg" width={148} height={76} alt="Signature" />
                </div>
            </div>

            <div className='col-span-8 flex flex-row gap-6 justify-end'>
                <Card initialSrc="/images/cards/card1.jpg" hoverSrc="/images/cards/card1b.jpg" width={206} height={284} />
                <Card initialSrc="/images/cards/card2.jpg" hoverSrc="/images/cards/card2b.jpg" width={206} height={239} />
                <Card initialSrc="/images/cards/card3.jpg" hoverSrc="/images/cards/card3b.jpg" width={206} height={284} />
                <Card initialSrc="/images/cards/card4.jpg" hoverSrc="/images/cards/card4b.jpg" width={206} height={284} />
            </div>
        </div>
    );
}
