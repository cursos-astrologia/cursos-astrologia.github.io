function main() {
	 const sufix = monthDiff(new Date('2020','10'),new Date())+1

	 const DISCOUNT_PAGE = "https://www.udemy.com/course/astrologia-desde-cero/?couponCode=CURSOASTRODESC"+sufix;
	 const GIFT_PAGE = "https://www.udemy.com/gift/astrologia-desde-cero/?couponCode=CURSOASTRODESC"+sufix;

    const BUY_PAGE = "https://www.udemy.com/join/signup-popup/?next=%2Fcart%2Fcheckout%2Fexpress%2Fcourse%2F3276288%2F%3FcouponCode=CURSOASTRODESC"+sufix;

    const addLink = (selector,link)=> $(selector).attr("href", link).attr("rel","noreferrer").attr("target","_blank")
        .click((e)=>{gtag_report_conversion && gtag_report_conversion(); return e});
    addLink('.go-to-course',DISCOUNT_PAGE);
    addLink('.gift-to-course',GIFT_PAGE);
    addLink('.buy-to-course',BUY_PAGE);
    
}

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}