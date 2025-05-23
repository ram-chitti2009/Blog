import Image from 'next/image';
import H1 from '@/app/components/H1';

export default function PhotosPage(){
    return (
        <div>
           <H1>
                Photos
            </H1>
            <H1>
                Dog Photos  

           </H1>

            <div className = 'grid grid-cols-2 gap-4 md:grid-cols-2'>
                <Image src="/dog1.png" alt="Dog 1" width={500} height={300} className="w-full h-auto" />
                <Image src="/dog2.png" alt="Dog 2" width={500} height={300} className="w-full h-auto" />
                <Image src="/dog3.png" alt="Dog 3" width={500} height={300} className="w-full h-auto" />
                <Image src="/dog4.png" alt="Dog 4" width={500} height={300} className="w-full h-auto" />

            </div>
        </div>
    )
}