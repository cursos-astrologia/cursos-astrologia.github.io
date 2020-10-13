function main() {
	 const DISCOUNT_PAGE = "https://www.udemy.com/course/astrologia-desde-cero/?couponCode=CURSOASTRODESC"
	 const GIFT_PAGE = "https://www.udemy.com/gift/astrologia-desde-cero/?couponCode=CURSOASTRODESC"
 

    const addLink = (selector,link)=> $(selector).attr("href", link).attr("rel","noreferrer").attr("target","_blank");
    addLink('.go-to-course',DISCOUNT_PAGE);
    addLink('.gift-to-course',GIFT_PAGE);
    
}