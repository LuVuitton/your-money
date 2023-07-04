


const ShopPage = ({params:{id}}: ShopPagePropsType )=> {

 

    return (
        <div>
            SHOP: {id}
        </div> 
    )
}

export default ShopPage

type ShopPagePropsType = {
    params: {
        id: string
    }
}

