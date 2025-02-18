import HeroImage from '../../../../public/images/image.jpg'
import Image from 'next/image'
import '../../styles/style.css'
const Hero = () => {
  return (
    <section className="pt-[10px] p-2">
        <div className="container grid grid-cols-1 gap-2 md:grid-cols-2 items-center lg:gap-4 xl:gap-8">
            <Image src={HeroImage} priority className='order-1 sm:order-2 md:rounded-md' alt='School Image'/>
            <div className="mt-4 sm:mt-0 flex flex-col gap-2 order-2 sm:order-1">
             <h1 className='text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px]'>Андижанская городская Школа 56</h1>   
            <p className='text-[15px] sm:text-[16px] xl:text-[20px]'>Общеобразовательное учреждение, расположенное в городе Андижан Андижанской области, и является школой государственной собственности. В этой школе учатся ученики начальной, средней и старшей школы. Опытные педагоги работают для того, чтобы организовать учебный процесс на высоком уровне.

Школа обеспечивает образование на основе современных учебных программ и передает учащимся образовательные навыки наряду с научными знаниями. Также на территории школы проводятся различные кружки, спортивные и культурные мероприятия.</p>
            </div>
        </div>
    </section>
  )
}

export default Hero