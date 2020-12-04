function main() {
	 const sufix = monthDiff(new Date(),new Date('2020','11'))

	 const DISCOUNT_PAGE = "https://www.udemy.com/course/astrologia-desde-cero/?couponCode=CURSOASTRODESC"+sufix;
	 const GIFT_PAGE = "https://www.udemy.com/gift/astrologia-desde-cero/?couponCode=CURSOASTRODESC"+sufix;
 

    const addLink = (selector,link)=> $(selector).attr("href", link).attr("rel","noreferrer").attr("target","_blank")
        .click((e)=>{gtag_report_conversion && gtag_report_conversion(); return e});
    addLink('.go-to-course',DISCOUNT_PAGE);
    addLink('.gift-to-course',GIFT_PAGE);
    
}

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}