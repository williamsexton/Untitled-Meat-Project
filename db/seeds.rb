# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

# demo_user = User.create(username: "Andy", email: "andy@email.com", password: "password")

# file = open('https://<your_bucket>.<your_region>.amazonaws.com/<optional_folder_name>/<some_file>.jpg')

# demo_user.avatar.attach(io: file, filename: 'some_file.jpg')


users = User.create([{ email: 'will@meat.gov', password:'governmeat' },
    { email: 'Willy@meat.meat', password:'meatman' },
 { email: 'hankhill@strickland-propane.net', password:'propane' },
{email: 'hsimpson@aol.doh', password:'simpsons' }])


    meat1 =Product.create({ name: 'Sweetgrass Wagyu Prime-Rib', price:24, subscription_price:21, description:'Renowned for their mouthwatering steaks, sweetgrass produces exemplary wagyu...' })
    meat2 =Product.create({ name: 'Sweetgrass Wagyu T-Bone', price:26, subscription_price:22, description:'Renowned for their mouthwatering steaks, sweetgrass produces exemplary wagyu...' })
    meat3 =Product.create({ name: 'Sweetgrass Wagyu Skirt-Steak', price:18, subscription_price:16, description:'Renowned for their mouthwatering steaks, sweetgrass produces exemplary wagyu...' })
    meat4 =Product.create({ name: 'Sweetgrass Wagyu Flank Steak', price:16, subscription_price:15, description:'Renowned for their mouthwatering steaks, sweetgrass produces exemplary wagyu...' })
    meat5 =Product.create({ name: 'Midnight\'s Farm Prime-Rib', price:22, subscription_price:19, description:'Delicious heritage Murray Gray cows, grass fed raised right...' })
    meat6 =Product.create({ name: 'Midnight\'s Farm T-Bone', price:26, subscription_price:22, description:'Delicious heritage Murray Gray cows, grass fed raised right...' })
    meat7 =Product.create({ name: 'Midnight\'s Farm Ground Beef', price:18, subscription_price:16, description:'Delicious heritage Murray Gray cows, grass fed raised right...' })
    meat8 =Product.create({ name: 'Midnight\'s Farm Flank Steak', price:16, subscription_price:15, description:'Delicious heritage Murray Gray cows, grass fed raised right...' })
    meat9 =Product.create({ name: 'Midnight\'s Farm Beef Brisket', price:16, subscription_price:15, description:'Delicious heritage Murray Gray cows, grass fed raised right...' })
    meat10 =Product.create({ name: 'Horsedrawn Farms Pork Belly', price:16, subscription_price:15, description:'Delectable Pork, perfect for any meal any time.' })
    meat11 =Product.create({ name: 'Horsedrawn Farms Pork Butt', price:16, subscription_price:15, description:'Delectable Pork, perfect for any meal any time.' })
    meat12 =Product.create({ name: 'Midnight\'s Farm Pork Belly', price:16, subscription_price:15, description:'Delectable Pork, perfect for any meal any time.' })
    
    file1 = open("https://meat-project-seed.s3-us-west-1.amazonaws.com/meat1.jpg")
    file2 = open("https://meat-project-seed.s3-us-west-1.amazonaws.com/meat2.jpg")
    file3 = open("https://meat-project-seed.s3-us-west-1.amazonaws.com/meat3.jpg")
    file4 = open("https://meat-project-seed.s3-us-west-1.amazonaws.com/meat4.jpg")
    file5 = open("https://meat-project-seed.s3-us-west-1.amazonaws.com/meat5.jpg")
    file6 = open("https://meat-project-seed.s3-us-west-1.amazonaws.com/meat6.jpg")
    file7 = open("https://meat-project-seed.s3-us-west-1.amazonaws.com/meat7.jpg")
    file8 = open("https://meat-project-seed.s3-us-west-1.amazonaws.com/meat8.jpg")
    file9 = open("https://meat-project-seed.s3-us-west-1.amazonaws.com/meat9.jpg")
    file10 = open("https://meat-project-seed.s3-us-west-1.amazonaws.com/meat10.jpg")
    file11 = open("https://meat-project-seed.s3-us-west-1.amazonaws.com/meat11.jpg")
    file12 = open("https://meat-project-seed.s3-us-west-1.amazonaws.com/meat12.jpg")
    

    meat1.photo.attach(io: file1, filename: "meat1.jpg")
    meat2.photo.attach(io: file2, filename: "meat2.jpg") 
    meat3.photo.attach(io: file3, filename: "meat3.jpg") 
    meat4.photo.attach(io: file4, filename: "meat4.jpg") 
    meat5.photo.attach(io: file5, filename: "meat5.jpg") 
    meat6.photo.attach(io: file6, filename: "meat6.jpg") 
    meat7.photo.attach(io: file7, filename: "meat7.jpg") 
    meat8.photo.attach(io: file8, filename: "meat8.jpg") 
    meat9.photo.attach(io: file9, filename: "meat9.jpg") 
    meat10.photo.attach(io: file10, filename: "meat10.jpg")
    meat11.photo.attach(io: file11, filename: "meat11.jpg")
    meat12.photo.attach(io: file12, filename: "meat12.jpg")

    category1=Category.create({name: 'Luxury Cuts', description: '"deccedant", "luxurious", "fit for a king", these descriptions jump to mind when presented with this assortment of high-class meats'})
    category2=Category.create({name: 'Kitchen Essentials', description: 'Budget efficient, responibly sourced, and overwhlmingly delicious. There\'s a reason these are kitchen essentials'})
    category3=Category.create({name: 'Grass Fed', description: 'The only kind of beef worth eating.'})
    category4=Category.create({name: 'BBQ Meats', description: 'Big Dino-sized meat hunks perfect for BBQ.'})
    category5=Category.create({name: 'Beef', description: 'Meat of the cows, the beatiful red ambrosia that fuels life.'})
    category6=Category.create({name: 'Pork', description: 'Mmmmm... oink-oink-boys taste gooood'})



inclusions = Inclusion.create([
    {product_id: meat1.id, quantity: 1, includable_id: category1.id, includable_type:"Category"},
    {product_id: meat1.id, quantity: 1, includable_id: category3.id, includable_type:"Category"},
    {product_id: meat1.id, quantity: 1, includable_id: category5.id, includable_type:"Category"},
    {product_id: meat2.id, quantity: 1, includable_id: category1.id, includable_type:"Category"},
    {product_id: meat2.id, quantity: 1, includable_id: category3.id, includable_type:"Category"},
    {product_id: meat2.id, quantity: 1, includable_id: category5.id, includable_type:"Category"},
    {product_id: meat3.id, quantity: 1, includable_id: category2.id, includable_type:"Category"},
    {product_id: meat3.id, quantity: 1, includable_id: category3.id, includable_type:"Category"},
    {product_id: meat3.id, quantity: 1, includable_id: category5.id, includable_type:"Category"},
    {product_id: meat4.id, quantity: 1, includable_id: category2.id, includable_type:"Category"},
    {product_id: meat4.id, quantity: 1, includable_id: category3.id, includable_type:"Category"},
    {product_id: meat4.id, quantity: 1, includable_id: category5.id, includable_type:"Category"},
    {product_id: meat5.id, quantity: 1, includable_id: category1.id, includable_type:"Category"},
    {product_id: meat5.id, quantity: 1, includable_id: category3.id, includable_type:"Category"},
    {product_id: meat5.id, quantity: 1, includable_id: category5.id, includable_type:"Category"},
    {product_id: meat6.id, quantity: 1, includable_id: category1.id, includable_type:"Category"},
    {product_id: meat6.id, quantity: 1, includable_id: category3.id, includable_type:"Category"},
    {product_id: meat6.id, quantity: 1, includable_id: category5.id, includable_type:"Category"},
    {product_id: meat7.id, quantity: 1, includable_id: category2.id, includable_type:"Category"},
    {product_id: meat7.id, quantity: 1, includable_id: category3.id, includable_type:"Category"},
    {product_id: meat7.id, quantity: 1, includable_id: category5.id, includable_type:"Category"},
    {product_id: meat8.id, quantity: 1, includable_id: category2.id, includable_type:"Category"},
    {product_id: meat8.id, quantity: 1, includable_id: category3.id, includable_type:"Category"},
    {product_id: meat8.id, quantity: 1, includable_id: category5.id, includable_type:"Category"},
    {product_id: meat9.id, quantity: 1, includable_id: category4.id, includable_type:"Category"},
    {product_id: meat9.id, quantity: 1, includable_id: category3.id, includable_type:"Category"},
    {product_id: meat9.id, quantity: 1, includable_id: category5.id, includable_type:"Category"},
    {product_id: meat10.id, quantity: 1, includable_id: category4.id, includable_type:"Category"},
    {product_id: meat10.id, quantity: 1, includable_id: category6.id, includable_type:"Category"},
    {product_id: meat11.id, quantity: 1, includable_id: category4.id, includable_type:"Category"},
    {product_id: meat11.id, quantity: 1, includable_id: category6.id, includable_type:"Category"}
    
])
 

