import {Card} from './Card'

export const GridGallery = ({category}) =>{
                            //argumentos importancion función Gallery

    const dataFetch=[
        {
            nombre: 'pepe',
            id: 5
        },
        {
            nombre: 'miguel',
            id: 3
        }
    ]
    return(

    <>
        
        {dataFetch.map(({nombre, id})=>
            <Card key={id} id={id} nombre={nombre}/>

            )
        }
       
    
    
  
              
    </>    
        )
    
}