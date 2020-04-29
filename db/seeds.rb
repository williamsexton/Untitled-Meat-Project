# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
    { email: 'Willy@meat.meat', password:'meatman' },
 { email: 'hankhill@strickland-propane.net', password:'propane' },
{email: 'hsimpson@aol.doh', password:'simpsons' }])

products = Product.create([
    { name: 'Sweetgrass Wagyu Prime-Rib', price:24, subscription_price:21, description:'Renowned for their mouthwatering steaks, sweetgrass produces exemplary wagyu...' },
    { name: 'Sweetgrass Wagyu T-Bone', price:26, subscription_price:22, description:'Renowned for their mouthwatering steaks, sweetgrass produces exemplary wagyu...' },
    { name: 'Sweetgrass Wagyu Skirt-Steak', price:18, subscription_price:16, description:'Renowned for their mouthwatering steaks, sweetgrass produces exemplary wagyu...' },
    { name: 'Sweetgrass Wagyu Flank Steak', price:16, subscription_price:15, description:'Renowned for their mouthwatering steaks, sweetgrass produces exemplary wagyu...' },
    { name: 'Midnight\'s Farm Prime-Rib', price:22, subscription_price:19, description:'Delicious heritage Murray Gray cows, grass fed raised right...' },
    { name: 'Midnight\'s Farm T-Bone', price:26, subscription_price:22, description:'Delicious heritage Murray Gray cows, grass fed raised right...' },
    { name: 'Midnight\'s Farm Ground Beef', price:18, subscription_price:16, description:'Delicious heritage Murray Gray cows, grass fed raised right...' },
    { name: 'Midnight\'s Farm Flank Steak', price:16, subscription_price:15, description:'Delicious heritage Murray Gray cows, grass fed raised right...' },
    { name: 'Midnight\'s Farm Beef Brisket', price:16, subscription_price:15, description:'Delicious heritage Murray Gray cows, grass fed raised right...' },
    { name: 'Horsedrawn Farms Pork Belly', price:16, subscription_price:15, description:'Delicious heritage Murray Gray cows, grass fed raised right...' },
    { name: 'Horsedrawn Farms Pork Butt', price:16, subscription_price:15, description:'Delicious heritage Murray Gray cows, grass fed raised right...' }])

categories = Category.create([
    {name: 'Luxury Cuts', description: '"deccedant", "luxurious", "fit for a king", these descriptions jump to mind when presented with this assortment of high-class meats'},
    {name: 'Kitchen Essentials', description: 'Budget efficient, responibly sourced, and overwhlmingly delicious. There\'s a reason these are kitchen essentials'},
    {name: 'Grass Fed', description: 'The only kind of beef worth eating.'},
    {name: 'BBQ Meats', description: 'Big Dino-sized meat hunks perfect for BBQ.'},
    {name: 'Beef', description: 'Meat of the cows, the beatiful red ambrosia that fuels life.'},
    {name: 'Pork', description: 'Mmmmm... oink-oink-boys taste gooood'}

])

inclusions = Inclusion.create([
    {product_id: 1, quantity: 1, includable_id: 1, includable_type:"Category"},
    {product_id: 1, quantity: 1, includable_id: 3, includable_type:"Category"},
    {product_id: 1, quantity: 1, includable_id: 5, includable_type:"Category"},
    {product_id: 2, quantity: 1, includable_id: 1, includable_type:"Category"},
    {product_id: 2, quantity: 1, includable_id: 3, includable_type:"Category"},
    {product_id: 2, quantity: 1, includable_id: 5, includable_type:"Category"},
    {product_id: 3, quantity: 1, includable_id: 2, includable_type:"Category"},
    {product_id: 3, quantity: 1, includable_id: 3, includable_type:"Category"},
    {product_id: 3, quantity: 1, includable_id: 5, includable_type:"Category"},
    {product_id: 4, quantity: 1, includable_id: 2, includable_type:"Category"},
    {product_id: 4, quantity: 1, includable_id: 3, includable_type:"Category"},
    {product_id: 4, quantity: 1, includable_id: 5, includable_type:"Category"},
    {product_id: 5, quantity: 1, includable_id: 1, includable_type:"Category"},
    {product_id: 5, quantity: 1, includable_id: 3, includable_type:"Category"},
    {product_id: 5, quantity: 1, includable_id: 5, includable_type:"Category"},
    {product_id: 6, quantity: 1, includable_id: 1, includable_type:"Category"},
    {product_id: 6, quantity: 1, includable_id: 3, includable_type:"Category"},
    {product_id: 6, quantity: 1, includable_id: 5, includable_type:"Category"},
    {product_id: 7, quantity: 1, includable_id: 2, includable_type:"Category"},
    {product_id: 7, quantity: 1, includable_id: 3, includable_type:"Category"},
    {product_id: 7, quantity: 1, includable_id: 5, includable_type:"Category"},
    {product_id: 8, quantity: 1, includable_id: 2, includable_type:"Category"},
    {product_id: 8, quantity: 1, includable_id: 3, includable_type:"Category"},
    {product_id: 8, quantity: 1, includable_id: 5, includable_type:"Category"},
    {product_id: 9, quantity: 1, includable_id: 4, includable_type:"Category"},
    {product_id: 9, quantity: 1, includable_id: 3, includable_type:"Category"},
    {product_id: 9, quantity: 1, includable_id: 5, includable_type:"Category"},
    {product_id: 10, quantity: 1, includable_id: 4, includable_type:"Category"},
    {product_id: 10, quantity: 1, includable_id: 6, includable_type:"Category"},
    {product_id: 11, quantity: 1, includable_id: 4, includable_type:"Category"},
    {product_id: 11, quantity: 1, includable_id: 6, includable_type:"Category"}
    
])
 

