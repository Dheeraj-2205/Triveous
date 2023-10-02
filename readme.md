In this backend project I have used modules like bcrypt, authorizations, authentication, password hashing , maintaining the cookies and deploy the entire backend project on render platform


## Register [Post]
First register your name, email, password (https://triveous-1.onrender.com/api/register)
Ex :- 
`
	{
		"name"  :  "xyz",
		"email"  :  "xyz@ymail.com",
		"password"  :  "xyzfklfka"
	}
`


## Login [Post]
And Login time only use email and password (https://triveous-1.onrender.com/api/login)
Ex :-
`
	{
	"email"  :  "xyz@ymail.com",
	"password"  :  "xyzfklfka"
}
`

## Logout [Get]
if User want to Logout they easily do that by using this link (https://triveous-1.onrender.com/api/logout)   **no requirement of any json data**

## Admin [Post]
If admin register then they have access to **create a Product** using this link
(https://triveous-1.onrender.com/api/products)

Ex :-
		`
		{
				"title"  :  "Ps5 disc version",
				"description"  :  "The PS5 is a genuine leap forward for console gaming, offering gorgeous 4K performance, stunningly fast load times and a truly game-changing controller that makes playing games more immersive and tactile than ever.",
				"price"  :  "50000",
				"category"  :  "gaming"
		}
		`





## Product Details By Id [Get]
The single product get by using the product Id
link (https://triveous-1.onrender.com/api/product/651afcdda565562b1285e639)



## All Product Details [Get]
Get all product which is available by using this link (https://triveous-1.onrender.com/api/all/products) **make sure you are login**


## Orders [Post]
If the user login  they can order a products link (https://triveous-1.onrender.com/api/order/new)
Ex :-

    `
	     {
				"shippingInfo"  :  {
				"address"  :  "**** 85-G near **** post office",
				"city"  :  "sao Paul",
				"state":  "Rio",
				"country":  "Brazil",
				"pincode"  :  123654
				},
				"orderItems"  :  [{
				"name"  :  "Smart Tv",
				"price"  :  "28000",
				"product"  :"651afcdda565562b1285e639"
				}],
				"paymentInfo"  :  {
				"id"  :  "Sample",
				"status"  :  "success"
				}
		}
    `



## User Order [Get]
This link help to fetch all order by the particular user  (https://triveous-1.onrender.com/api/order/user)

## Order History [Get]
If the order is successfully delivered then user can access the history otherwise they can show the empty array [  ]  ** but only admin can able to change the status : delivered **
(https://triveous-1.onrender.com/api/order/history)

> "status"  :  "success"  		---->  		"status"  :  "delivered" 

## Update Status [Put]  --> Admin 
Admin has capable to change the status    (https://triveous-1.onrender.com/api/order/651abfdb11e6d862edabfbcb)  provide order Id
>"status  : success		---->		"status"	: "Delivered"
`
		{
			"status"  :  "Delivered"
		}
   
`
## Delete Order 
User want to delete there order by using this link (https://triveous-1.onrender.com/api/order/651abfdb11e6d862edabfbcb)
but they provide the order Id
