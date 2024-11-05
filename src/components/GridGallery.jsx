
export const GridGallery = ({category}) =>{


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

              <section key={category}> 
                    <h2>{category}</h2>
                        {dataFetch.map(({nombre, id})=>
                        {   <>
                            <h3>{nombre}</h3>
                            <h4>{id}</h4>
                            </>
                        })
                        }

              </section>
    )
}