



const initState = {
    products: [
        {
            id: 1,
            title: "Wood Pencil",
            price: 350,
            image: require("../../static/images/shop-image/shop-image1.jpg")
        },
        {
            id: 2,
            title: "T-Shirt",
            price: 120,
            image: require("../../static/images/shop-image/shop-image2.jpg")
        },
        {
            id: 3,
            title: "Casual Shoe",
            price: 160,
            image: require("../../static/images/shop-image/shop-image3.jpg")
        },
        {
            id: 4,
            title: "Coffee Bag",
            price: 130,
            image: require("../../static/images/shop-image/shop-image4.jpg")
        },
        {
            id: 5,
            title: "Single Chair",
            price: 90,
            image: require("../../static/images/shop-image/shop-image5.jpg")
        },
        {
            id: 6,
            title: "Business Card",
            price: 180,
            image: require("../../static/images/shop-image/shop-image6.jpg")
        },
        {
            id: 7,
            title: "Book Cover",
            price: 330,
            image: require("../../static/images/shop-image/shop-image7.jpg")
        },
        {
            id: 8,
            title: "Wall Watch",
            price: 140,
            image: require("../../static/images/shop-image/shop-image8.jpg")
        },
        {
            id: 9,
            title: "Wood Pencil",
            price: 430,
            image: require("../../static/images/shop-image/shop-image1.jpg")
        },
        {
            id: 10,
            title: "T-Shirt",
            price: 650,
            image: require("../../static/images/shop-image/shop-image2.jpg")
        },
        {
            id: 11,
            title: "Casual Shoe",
            price: 230,
            image: require("../../static/images/shop-image/shop-image3.jpg")
        },
        {
            id: 12,
            title: "Coffee Bag",
            price: 670,
            image: require("../../static/images/shop-image/shop-image4.jpg")
        }
    ],
    addedItems:[],
    total: 0,
    shipping: 0
}

const cartReducer= (state = initState, action) => {
   
    if(action.type === "ADD_TO_CART"){
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
            addedItem.quantity += 1 
            return {
                ...state,
                total: state.total + addedItem.price 
            }
        } else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === "ADD_QUANTITY_WITH_NUMBER"){
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
            addedItem.quantity += action.qty
            return {
                ...state,
                total: state.total + addedItem.price * action.qty
            }
        } else {
            addedItem.quantity = action.qty;
            //calculating the total
            let newTotal = state.total + addedItem.price * action.qty
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    

    if(action.type === "REMOVE_ITEM"){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );

        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type === "ADD_QUANTITY"){
        let addedItem = state.products.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }

    if(action.type === "SUB_QUANTITY"){  
        let addedItem = state.products.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type === "ADD_SHIPPING"){
        return {
            ...state,
            shipping: state.shipping += 6
        }
    }

    if(action.type === 'SUB_SHIPPING'){
        return {
            ...state,
            shipping: state.shipping -= 6
        }
    }

    if(action.type === "RESET_CART"){
        return {
            ...state,
            addedItems: [],
            total: 0,
            shipping: 0
        }
    }
    
    else {
        return state
    }
}

export default cartReducer