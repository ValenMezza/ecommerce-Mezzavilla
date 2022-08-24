import {Item} from "./Item";


const ItemList = ({data = []}) =>{
    console.log(Array)
    return (
        <>
            {data.map(product => <Item key={product.id} product={product}/>)}
        </>
    )
}
export {ItemList}