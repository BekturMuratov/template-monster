const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML = `
    <div class="footer-content">
    <img src="./public/img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul> 
       <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
    </div>   
</div>
<p class="footer-title">about company</p>
<p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sunt nesciunt magni saepe, praesentium obcaecati voluptatum quidem illo necessitatibus odio iusto aliquam dicta totam, ducimus modi cum in esse. Tempora consectetur, dignissimos at, facilis quas distinctio soluta aliquam deleniti harum eius ex dolores consequuntur commodi modi maxime est qui pariatur dolore quod ratione ut possimus alias quidem! Illo officiis molestiae doloribus laboriosam vel similique, temporibus quidem fugiat laborum corrupti dicta error impedit fugit odio neque nobis voluptatum hic sint libero ad eligendi quaerat deleniti possimus. Soluta harum at molestias ducimus incidunt inventore est? Deleniti similique quidem ad, cupiditate sapiente vero?</p>
<p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
<p class="info">telephone - +996312433421, +996504433421</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link"> terms & services</a>
        <a href="#" class="social-link"> privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link"> instagram</a>
        <a href="#" class="social-link"> facebook</a>
        <a href="#" class="social-link"> twitter</a>
    </div>
</div>
<p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();