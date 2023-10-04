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
        <div className='grid grid-cols-12 px-2 gap-2'>
            <div className='order-2 md:order-1 col-span-12 lg:col-span-3'>
                <div className='pl-10 pt-24'>
                    <p className='font-light italic'>“Après 6 jeux olympiques où j&apos;ai dirigé les recherches pour nos athlètes à l&rsquo;Institut National du Sport, j’ai fondé beScored Institute. <br /><br />Tirer le meilleur de vos dispositifs ou de vos salariés est notre priorité“</p>
                    <Image className="pt-8 w-auto" src="/images/signature.jpg" width={252} height={90} alt="Signature" />
                </div>
            </div>

            <div className='order-1 md:order-2 col-span-12 lg:col-span-8 flex sm:flex-row gap-2 sm:gap-6 justify-end'>
                <Card initialSrc="/images/cards/card1.jpg" hoverSrc="/images/cards/card1b.jpg" width={206} height={284} className="col-span-4"/>
                <Card initialSrc="/images/cards/card2.jpg" hoverSrc="/images/cards/card2b.jpg" width={206} height={239} className="col-span-4"/>
                <Card initialSrc="/images/cards/card3.jpg" hoverSrc="/images/cards/card3b.jpg" width={206} height={284} className="col-span-6"/>
                <Card initialSrc="/images/cards/card4.jpg" hoverSrc="/images/cards/card4b.jpg" width={206} height={284} className="col-span-6"/>
            </div>
        </div>
    );
}
