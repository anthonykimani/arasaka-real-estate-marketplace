# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding...please wait"

#bedsitter
bedsitter = Property.create(property_type:"bedsitter", property_name:"faraja apartments", price:12500, location:"ruiru", image:"https://i.postimg.cc/fb4Kz16V/bedroom.jpg", property_description:"A quiet neighborhood in the surburbans outside the city")
apartment = Property.create(property_type:"apartment", property_name:"Three Doors apartments", price:36500, location:"Donholm", image:"https://i.postimg.cc/SxYdpmt0/apartments.jpg", property_description:"A grand view of the city from the comfort of your home")

one_bedroom = Property.create(property_type:"one_bedroom", property_name:"highland apartments", price:22500, location:"kilimani", image:"https://i.postimg.cc/t496BpQt/roam-in-color-Rry-Fk4n-v-Os-unsplash.jpg", property_description:"A fully decked out dining room for those family moments")
smallhouse = Property.create(property_type:"doubleroom", property_name:"Boma estate", price:43500, location:"nyayo", image:"https://i.postimg.cc/3xkVL2JN/murat-demircan-Tv8-CFQvq7-Xo-unsplash.jpg", property_description:"A Front porch in the summer for some barbeque")
riverside = Property.create(property_type:"singleroom", property_name:"riverside", price:7500, location:"ruaka", image:"https://i.postimg.cc/3JTbXzzL/nathan-van-egmond-9-LMRQd-Vv7hw-unsplash.jpg", property_description:"Start out with the essential comforts")
minimalist = Property.create(property_type:"two_bedroom", property_name:"Tsavo apartments", price:22500, location:"kasarani", image:"https://i.postimg.cc/R0MWLRtP/minimalist.jpg", property_description:"Expressed design in architecture")
chef_palace = Property.create(property_type:"doubleroom", property_name:"Vanity Homes", price:10500, location:"kitengela", image:"https://i.postimg.cc/3r9nXSDq/burners.jpg", property_description:"A Chef's Palace fitted with the lastest cutlery")
#singleroom
singleroom = Property.create(property_type:"singleroom", property_name:"joska singlerooms", price:4500, location:"kawangware", image:"https://i.postimg.cc/mrMm7TQ3/chimney.jpg", property_description:"Comfort is a must in this deluxe apartment with spacious rooms")
mansion = Property.create(property_type:"apartment", property_name:"Lux apartments", price:42500, location:"kileleshwa", image:"https://i.postimg.cc/pr9hnLjR/highrise.jpg", property_description:"A House in the Sky overlooking the Horizon is the morning you need")

#one bedroom
blue_home = Property.create(property_type:"one_bedroom", property_name:"Qwarco Homes", price:34000, location:"south B", image:"https://i.postimg.cc/Hx6tDP6g/collov-home-design-Srio-T6td-WII-unsplash.jpg", property_description:"A Plush and comfy interior customized to your personality")

bighouse = Property.create(property_type:"apartment", property_name:"Valley Big House", price:56500, location:"Nanyuki", image:"https://i.postimg.cc/3wKLsp32/todd-kent-178j8t-Jr-Nlc-unsplash.jpg", property_description:"A Holiday house for the extended family on the farmland")
two_bedroom = Property.create(property_type:"two_bedroom", property_name:"Dove apartments", price:32500, location:"kitui", image:"https://i.postimg.cc/TPwDX0PK/studio.jpg", property_description:"The Perfect Chill spot for you and your friends ")
student = Property.create(property_type:"bedsitter", property_name:"comrade bedsitters", price:6500, location:"muthaiga", image:"https://i.postimg.cc/Kz3twv3n/vojtech-bruzek-Yrxr3bs-Pd-S0-unsplash.jpg", property_description:"most affordable package for college students")
#two bedroom
venus = Property.create(property_type:"two_bedroom", property_name:"Venus apartments", price:21500, location:"parklands", image:"https://i.postimg.cc/nzWQ18dC/micah-carlson-q-N-T-p-Y17-Vc-unsplash.jpg", property_description:"A European themed two bedroom")


#doubleroom
doubleroom = Property.create(property_type:"doubleroom", property_name:"oscar singlerooms", price:6500, location:"utawala", image:"https://i.postimg.cc/2STZJMCp/sitting-room.jpg", property_description:"A Customized experience dealing with the rarest Decor")

#apartment


# https://i.postimg.cc/SxYdpmt0/apartments.jpg
# https://i.postimg.cc/fb4Kz16V/bedroom.jpg
# https://i.postimg.cc/3r9nXSDq/burners.jpg
# https://i.postimg.cc/mrMm7TQ3/chimney.jpg
# https://i.postimg.cc/bYM2f1XJ/contruction.jpg
# https://i.postimg.cc/HnW3G5F3/couch.jpg delete 
# https://i.postimg.cc/pr9hnLjR/highrise.jpg
# https://i.postimg.cc/65mcS8cL/highrise-contruction.jpg
# https://i.postimg.cc/3Jv08W7Z/home-street.jpg  delete
# https://i.postimg.cc/htRzfgtR/mansion.jpg
# https://i.postimg.cc/R0MWLRtP/minimalist.jpg
# https://i.postimg.cc/t496BpQt/roam-in-color-Rry-Fk4n-v-Os-unsplash.jpg
# https://i.postimg.cc/vm3cqVLG/roberto-nickson-so3wg-JLw-Dxo-unsplash.jpg  delete
# https://i.postimg.cc/2STZJMCp/sitting-room.jpg
# https://i.postimg.cc/TPwDX0PK/studio.jpg
# https://i.postimg.cc/tC3Pd7f4/unknown.jpg  delete

# https://i.postimg.cc/2yp9XtyS/andrea-davis-VOWXF7ls-AN0-unsplash.jpg
# https://i.postimg.cc/Hx6tDP6g/collov-home-design-Srio-T6td-WII-unsplash.jpg
# https://i.postimg.cc/W4rKVjZP/eric-ardito-HFIpb-JUFDJI-unsplash.jpg
# https://i.postimg.cc/NFGPRHzg/francesca-tosolini-Xc-Vm8mn7-NUM-unsplash.jpg
# https://i.postimg.cc/3wMSn6cf/kenny-eliason-i-Aftd-Icgp-Fc-unsplash.jpg
# https://i.postimg.cc/nzWQ18dC/micah-carlson-q-N-T-p-Y17-Vc-unsplash.jpg
# https://i.postimg.cc/3xkVL2JN/murat-demircan-Tv8-CFQvq7-Xo-unsplash.jpg
# https://i.postimg.cc/3JTbXzzL/nathan-van-egmond-9-LMRQd-Vv7hw-unsplash.jpg
# https://i.postimg.cc/tT4Mx6f9/r-architecture-95-Yg-OUcqb24-unsplash.jpg
# https://i.postimg.cc/0N2TphKg/r-architecture-T6d96-Qrb5-MY-unsplash.jpg
# https://i.postimg.cc/B60zQy5P/sieuwert-otterloo-aren8nutd1-Q-unsplash.jpg
# https://i.postimg.cc/xTTWzWwK/spacejoy-8-Y8-U9fdu-ILs-unsplash.jpg
# https://i.postimg.cc/3wKLsp32/todd-kent-178j8t-Jr-Nlc-unsplash.jpg
# https://i.postimg.cc/Kz3twv3n/vojtech-bruzek-Yrxr3bs-Pd-S0-unsplash.jpg


puts "Seeding 100% Complete"