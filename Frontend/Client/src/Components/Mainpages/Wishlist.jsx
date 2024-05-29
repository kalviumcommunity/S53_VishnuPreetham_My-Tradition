import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useContext } from 'react'
import { AppContext } from '../../Context/ParentContext'
import { collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
const Wishlist = () => {
    const { signin, user } = useContext(AppContext)
    const [products, setProducts] = useState([]);
    useEffect(()=>{
      getWishlist();
    })
    const deleteWishlistItem = async (itemId) => {
        try {
            const userRef = doc(db, 'users', user.uid); // Assuming 'users' is the collection name
            const userDoc = await getDoc(userRef);
            if (userDoc.exists()) {
                const wishlist = userDoc.data().wishlist;
                const updatedWishlist = wishlist.filter(item => item._id !== itemId); // Assuming each wishlist item has an 'id' field
                
                // Update the Firestore document with the updated wishlist
                await updateDoc(userRef, { wishlist: updatedWishlist });
                console.log("Wishlist item deleted successfully.");
            } else {
                console.error("User document not found.");
            }
        } catch (error) {
            console.error("Error deleting wishlist item:", error);
        }
    };
    
    // Call the function with the ID of the item you want to delete
    
    const getWishlist = async () => {
        try {
          const wishlistCollectionRef = collection(db, 'users'); // Assuming 'users' is the collection name
          const userWishlistQuery = query(wishlistCollectionRef, where("uid", "==", user.uid));
          const querySnapshot = await getDocs(userWishlistQuery);
          querySnapshot.forEach((doc) => {
            // Assuming 'wishlist' is the name of the field containing the wishlist array
            setProducts(doc.data().wishlist); 
            // console.log(products)
          });
        } catch (error) {
          console.error("Error fetching wishlist documents:", error);
        }
      };
  


    return (
        <div>
            <Navbar />
            {/*
            <div className="check" style={{
                marginTop: "25vh",
                display: signin ? "none" : "block"
            }}>
                Please Do login .
            </div> */}
            <div style={{width:"100vw",display:"flex",flexWrap:"wrap",gap:"20px",justifyContent:"center",marginTop:"25vh"}}>
            {products.map((product, i) => (
                    <div className='product-card' key={i}>
                        {/* <Heart onClick={() => { handleWishlist(product) }} className='Heart' size="32" color="#ebc5a1" /> */}
                        <img src={product.img} alt={product.product_details.description} className='product-image' />
                        <div className='product-details'>
                            <p className='product-description'>{product.product_details.description ? product.product_details.description.substring(0, 50).concat('...') : ''}</p>
                            <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}> 
                            <p className='product-price'>Price: ₹{product.price}</p>
                            <button onClick={()=>{deleteWishlistItem(product._id);}}>Remove WishList</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>x
        </div>

    )
}

export default Wishlist
