let wishlist = [];
function toggleWishlist(productId) {
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
    } else {
        wishlist.push(productId);
    }
    console.log("check :", wishlist);
}

toggleWishlist(1);
toggleWishlist(1);