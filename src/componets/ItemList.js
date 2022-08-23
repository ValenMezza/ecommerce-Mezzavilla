import {Item} from "./Item";


const ItemList = ({data = []}) =>{
    return (
        <>
            {data.map(product => <Item key={product.id} product={product}/>)}
        </>
    )
}
export {ItemList}