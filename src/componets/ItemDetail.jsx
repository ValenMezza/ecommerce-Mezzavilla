import React from 'react';
export const ItemDetail = ({ data }) => {
    return (
        <>
            <div className='detail_container'>
                {/* <div className='img-prod'>
                    <img src={data.img} className="img-thumbnail" alt="..."/>
                </div>
                <div className='info-prod'>
                    <div className='info-prod_list'>
                        <h1>{data.product}</h1>
                        <h3>${data.Precio}</h3>
                        <p>{data.detalles}</p>
                        <p>{data.detalles2}</p>
                    </div>
                </div>*/}
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={data.img} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">{data.product}</h2>
                                <hr />
                                <h5>${data.Precio}</h5>
                                <hr />
                                <h5>Caracteristicas:</h5>
                                <hr />
                                <p className="card-text">{data.detalles}</p><hr />
                                <p className="card-text">{data.detalles2}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
export default ItemDetail