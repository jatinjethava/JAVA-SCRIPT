let wishlist = [];
function toggleWishlist(productId) {
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
        // console.log(typeof (wishlist))
    } else {
        wishlist.push(productId);
    }
    console.log("check :", wishlist);
}

toggleWishlist(1);
toggleWishlist(1);