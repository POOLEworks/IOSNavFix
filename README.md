IOSNavFix
=========

Dropdown menu fix for iOS devices.

As you may already be aware of, iOS devices (iPhone, iPad and iPod) do not support the hover event. While this isn't usually a problem, when it comes to dropdown navigation menus it is a problem because as you'll discover unless your parent hyperlink doesn't link anywhere, a user will click a navigation item and be taken to that links location. An example of the scenario is shown below for the visual people.

<div id="navigation">
	<ul>
		<li><a href="/home">Home</a></li>
		<li>
			<a href="/products">Products</a>
			<ul class="sub-menu">
				<li><a href="products/some-product">Some Product</a></li>
				<li><a href="products/another-product">Another Product</a></li>
			</ul>
		</li>
	</ul>
</div>

As you can see, home is it's own navigation item and doesn't need to be fixed. However, products has a dropdown of products but if you were to click products on an iPad for example, the dropdown would show but then you would be taken to the products page before you could act. This script fixes that issue. It might not be coded optimally, but it works and serves its purpose quite well. The existence of child list items is checked before this code is applied.

###Example usage

Simply call the iosnavfix function within a document ready call and you are good to go.

$(document).ready(function() {
	$("#navigation ul").iosnavfix();
});