import { GridGallery } from "./GridGallery"

import { Form } from './Form'

export const Gallery = () => {

    const categories=['naturaleza', 'edificio']
    
  return (
    <>

        <h1>buscador de fotos</h1>

        < Form />
        
        <section>
        {
            categories.map((category)=>  //return implicito. sin llaves
                    < GridGallery key={category} category={category}/>  
                     //en las iteraciones siempre mandamos key y los argumentos que queramos recibir de funciones en otros componentes   
            )

        }    
        </section>   

      

    
    </>

)}
