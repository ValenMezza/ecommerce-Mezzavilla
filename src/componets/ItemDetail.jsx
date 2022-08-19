import { ItemCount } from "./ItemCount";
const ItemDetail = (({ data }) => {
    return (
        <>
            <div className="detail_container">
                <div className="detail_item">
                    <h4 className="detail_product">{data.product}</h4>
                    <div className="img_detail">
                        <img className="detail_img" src={data.img} alt="" />
                    </div>
                    <div className="especificaciones_detail">
                        <h5>Especificaciones</h5>
                        <p className="detail_info">{data.detalles2}</p>
                        <p className="detail_info">{data.detalles}</p>
                        <p className="detail_info"><b>Precio: ${data.Precio}</b></p>
                    </div>


                    <ItemCount className="ItemCount-detail"></ItemCount>
                </div>
            </div>
        </>
    )
})
export { ItemDetail };