import { GridGallery } from "./GridGallery"

import { Form } from './Form'

export const Gallery = () => {

    const categories=['naturaleza', 'edificio']
    
  return (
    <>

        <h1>buscador de fotos</h1>
        
        <section>
        {
            categories.map((category)=>{

                <article>
                    < GridGallery key={category} category={category}/>
                    < Form />
                </article>
                    
            })
        
        }    
        </section>   

      

    
    </>

)}
