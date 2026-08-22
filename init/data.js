const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description:
            "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
    },
    {
        title: "Modern Loft in Downtown",
        description:
            "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "New York City",
        country: "United States",
    },
    {
        title: "Mountain Retreat",
        description:
            "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1000,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Historic Villa in Tuscany",
        description:
            "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 2500,
        location: "Florence",
        country: "Italy",
    },
    {
        title: "Secluded Treehouse Getaway",
        description:
            "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 800,
        location: "Portland",
        country: "United States",
    },
    {
        title: "Beachfront Paradise",
        description:
            "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2000,
        location: "Cancun",
        country: "Mexico",
    },
    {
        title: "Rustic Cabin by the Lake",
        description:
            "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
    },
    {
        title: "Luxury Penthouse with City Views",
        description:
            "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 3500,
        location: "Los Angeles",
        country: "United States",
    },
    {
        title: "Ski-In/Ski-Out Chalet",
        description:
            "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 3000,
        location: "Verbier",
        country: "Switzerland",
    },
    {
        title: "Safari Lodge in the Serengeti",
        description:
            "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Serengeti National Park",
        country: "Tanzania",
    },
    {
        title: "Historic Canal House",
        description:
            "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Amsterdam",
        country: "Netherlands",
    },
    {
        title: "Private Island Retreat",
        description:
            "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 10000,
        location: "Fiji",
        country: "Fiji",
    },
    {
        title: "Charming Cottage in the Cotswolds",
        description:
            "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "Cotswolds",
        country: "United Kingdom",
    },
    {
        title: "Historic Brownstone in Boston",
        description:
            "Step back in time in this elegant historic brownstone located in the heart of Boston.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 2200,
        location: "Boston",
        country: "United States",
    },
    {
        title: "Beachfront Bungalow in Bali",
        description:
            "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Bali",
        country: "Indonesia",
    },
    {
        title: "Mountain View Cabin in Banff",
        description:
            "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1500,
        location: "Banff",
        country: "Canada",
    },
    {
        title: "Art Deco Apartment in Miami",
        description:
            "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1600,
        location: "Miami",
        country: "United States",
    },
    {
        title: "Tropical Villa in Phuket",
        description:
            "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 3000,
        location: "Phuket",
        country: "Thailand",
    },
    {
        title: "Historic Castle in Scotland",
        description:
            "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Scottish Highlands",
        country: "United Kingdom",
    },
    {
        title: "Desert Oasis in Dubai",
        description:
            "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 5000,
        location: "Dubai",
        country: "United Arab Emirates",
    },
    {
        title: "Rustic Log Cabin in Montana",
        description:
            "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1100,
        location: "Montana",
        country: "United States",
    },
    {
        title: "Beachfront Villa in Greece",
        description:
            "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2500,
        location: "Mykonos",
        country: "Greece",
    },
    {
        title: "Eco-Friendly Treehouse Retreat",
        description:
            "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 750,
        location: "Costa Rica",
        country: "Costa Rica",
    },
    {
        title: "Historic Cottage in Charleston",
        description:
            "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1600,
        location: "Charleston",
        country: "United States",
    },
    {
        title: "Modern Apartment in Tokyo",
        description:
            "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 2000,
        location: "Tokyo",
        country: "Japan",
    },
    {
        title: "Lakefront Cabin in New Hampshire",
        description:
            "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "New Hampshire",
        country: "United States",
    },
    {
        title: "Luxury Villa in the Maldives",
        description:
            "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 6000,
        location: "Maldives",
        country: "Maldives",
    },
    {
        title: "Ski Chalet in Aspen",
        description:
            "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Secluded Beach House in Costa Rica",
        description:
            "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Costa Rica",
        country: "Costa Rica",
        
    },
];

const worldwideListings = [
    { title: "Rooftop Riad in Marrakech", description: "Wake to Atlas Mountain light in a peaceful riad with a tiled courtyard and a private rooftop terrace.", price: 1450, location: "Marrakech", country: "Morocco" },
    { title: "Cliffside Cottage in Santorini", description: "A whitewashed hideaway above the Aegean, ideal for sunset dinners and slow island mornings.", price: 3200, location: "Oia", country: "Greece" },
    { title: "Northern Lights Glass Cabin", description: "Watch the aurora from a warm glass cabin tucked beside Icelandic lava fields.", price: 2800, location: "Reykjavik", country: "Iceland" },
    { title: "Kyoto Machiya Townhouse", description: "Stay in a restored wooden townhouse close to quiet lanes, tea houses, and temple gardens.", price: 1900, location: "Kyoto", country: "Japan" },
    { title: "Cape Town Ocean View Home", description: "A bright coastal home with Table Mountain views, a sun deck, and easy access to the Atlantic shore.", price: 2600, location: "Cape Town", country: "South Africa" },
    { title: "Paris Left Bank Studio", description: "A compact, elegant studio near bookshops, cafes, and the Seine in the heart of Paris.", price: 2100, location: "Paris", country: "France" },
    { title: "Patagonian Lakeside Lodge", description: "Recharge beside a glacial lake with hiking trails and dramatic Andean scenery at your door.", price: 2300, location: "Bariloche", country: "Argentina" },
    { title: "Sydney Harbour Apartment", description: "Contemporary city living with a balcony overlooking the harbour and an easy walk to the Opera House.", price: 3000, location: "Sydney", country: "Australia" },
    { title: "Amalfi Coast Lemon Villa", description: "Terraced gardens, sea breezes, and a sunny dining patio make this villa a Mediterranean retreat.", price: 3400, location: "Positano", country: "Italy" },
    { title: "Lisbon Tram District Flat", description: "A colorful apartment in a historic hillside neighborhood, moments from viewpoints and local bakeries.", price: 1550, location: "Lisbon", country: "Portugal" },
    { title: "Norwegian Fjord House", description: "A calm waterfront home with floor-to-ceiling views of a spectacular Norwegian fjord.", price: 2400, location: "Bergen", country: "Norway" },
    { title: "Cappadocia Cave Suite", description: "Sleep in a beautifully finished cave suite and watch hot-air balloons rise at dawn.", price: 1700, location: "Goreme", country: "Turkey" },
    { title: "Hanoi Old Quarter Loft", description: "A relaxed loft base for discovering Hanoi's food stalls, galleries, and historic streets.", price: 950, location: "Hanoi", country: "Vietnam" },
    { title: "Petra Desert Camp", description: "A private desert tent with Bedouin hospitality, clear night skies, and unforgettable sandstone landscapes.", price: 1350, location: "Wadi Musa", country: "Jordan" },
    { title: "Lake Bled Alpine Chalet", description: "A timber chalet surrounded by alpine meadows, only minutes from the famous lake and castle.", price: 1650, location: "Bled", country: "Slovenia" },
    { title: "Cartagena Colonial Courtyard", description: "Colorful colonial details, a leafy courtyard, and a refreshing plunge pool in Cartagena's old city.", price: 1800, location: "Cartagena", country: "Colombia" },
    { title: "Queenstown Adventure Lodge", description: "A stylish base for mountain biking, hiking, and lakeside adventures in New Zealand's adventure capital.", price: 2200, location: "Queenstown", country: "New Zealand" },
    { title: "Prague Riverside Apartment", description: "A refined apartment beside the Vltava with bridge views and easy access to Prague's old town.", price: 1500, location: "Prague", country: "Czech Republic" },
    { title: "Cairo Nile View Penthouse", description: "A spacious penthouse with a private terrace overlooking the Nile and Cairo's evening lights.", price: 2000, location: "Cairo", country: "Egypt" },
    { title: "Swiss Alpine Farmhouse", description: "A traditional farmhouse with mountain balconies, hiking paths, and crisp Alpine air.", price: 2750, location: "Zermatt", country: "Switzerland" },
    { title: "Seoul Hanok Garden Home", description: "A serene traditional home with a small garden, blending Korean heritage with modern comfort.", price: 1600, location: "Seoul", country: "South Korea" },
    { title: "Oaxaca Artisan Courtyard House", description: "Stay among handcrafted tiles and vibrant markets in a welcoming home near Oaxaca's cultural center.", price: 1100, location: "Oaxaca", country: "Mexico" },
    { title: "Vancouver Seaside Condo", description: "A polished condo near Stanley Park with mountain, city, and ocean all within reach.", price: 2400, location: "Vancouver", country: "Canada" },
    { title: "Dubrovnik Stone House", description: "A restored stone home inside the old city walls, filled with Adriatic character and charm.", price: 1900, location: "Dubrovnik", country: "Croatia" },
    { title: "Nairobi Garden Bungalow", description: "A quiet bungalow in a lush garden setting, a restful base for Nairobi and nearby safari trips.", price: 1200, location: "Nairobi", country: "Kenya" },
    { title: "Buenos Aires Tango Apartment", description: "A characterful apartment in Palermo, surrounded by cafes, parks, and late-night tango culture.", price: 1250, location: "Buenos Aires", country: "Argentina" },
    { title: "Jaipur Palace Guesthouse", description: "A graceful guesthouse inspired by Rajasthan's royal heritage, close to markets and historic forts.", price: 900, location: "Jaipur", country: "India" },
    { title: "Bruges Canal Cottage", description: "A storybook cottage beside a quiet canal, perfect for walks, chocolate shops, and medieval views.", price: 1750, location: "Bruges", country: "Belgium" },
    { title: "Perth Beachside Retreat", description: "A breezy coastal retreat near clear water, laid-back cafes, and beautiful western sunsets.", price: 1750, location: "Perth", country: "Australia" },
    { title: "Lima Pacific Ocean Loft", description: "A modern Miraflores loft with ocean breezes, excellent restaurants, and a walkable cliffside park.", price: 1400, location: "Lima", country: "Peru" },
    { title: "Budapest Thermal Spa Flat", description: "An inviting apartment near Budapest's famous baths, grand boulevards, and Danube promenades.", price: 1300, location: "Budapest", country: "Hungary" },
    { title: "Doha Marina Residence", description: "A high-rise residence with marina views, pool access, and easy access to Doha's waterfront.", price: 2500, location: "Doha", country: "Qatar" },
    { title: "Tulum Jungle Casita", description: "A peaceful casita surrounded by tropical greenery, with a plunge pool and a short ride to the coast.", price: 1650, location: "Tulum", country: "Mexico" },
    { title: "Hobart Heritage Cottage", description: "A cozy heritage cottage near Salamanca Market, galleries, and the wild Tasmanian coastline.", price: 1350, location: "Hobart", country: "Australia" },
    { title: "Valletta Harbour Townhome", description: "A limestone townhome with sunny balconies above Malta's historic Grand Harbour.", price: 1850, location: "Valletta", country: "Malta" },
    { title: "Lauterbrunnen Valley Cabin", description: "A quiet cabin framed by waterfalls and snow peaks in one of Switzerland's most scenic valleys.", price: 2900, location: "Lauterbrunnen", country: "Switzerland" },
    { title: "Riga Art Nouveau Apartment", description: "A bright apartment with period details near Riga's celebrated Art Nouveau district.", price: 1050, location: "Riga", country: "Latvia" },
    { title: "Vancouver Island A-Frame", description: "A cozy A-frame among tall evergreens, with beaches and forest trails minutes away.", price: 1700, location: "Tofino", country: "Canada" },
    { title: "Zanzibar Spice Island Villa", description: "A breezy villa with tropical gardens, Swahili design, and a short walk to turquoise water.", price: 2100, location: "Zanzibar City", country: "Tanzania" },
    { title: "Edinburgh Old Town Flat", description: "A warm stone flat near the Royal Mile, festival venues, and Edinburgh Castle.", price: 1750, location: "Edinburgh", country: "United Kingdom" },
    { title: "Chilean Wine Country Estate", description: "A peaceful vineyard stay with wide valley views, local tastings, and a private terrace.", price: 2200, location: "Santa Cruz", country: "Chile" },
    { title: "Sapa Mountain Homestay", description: "A welcoming mountain home overlooking terraced rice fields and misty northern valleys.", price: 700, location: "Sapa", country: "Vietnam" },
    { title: "Belgrade Danube Loft", description: "A modern loft close to river walks, lively restaurants, and Belgrade's creative neighborhoods.", price: 1000, location: "Belgrade", country: "Serbia" },
    { title: "Ubud Rice Terrace Villa", description: "A tranquil Bali villa overlooking rice terraces, complete with a private pool and open-air lounge.", price: 2000, location: "Ubud", country: "Indonesia" },
    { title: "Bora Bora Overwater Bungalow", description: "An iconic overwater bungalow with lagoon access and panoramic views of Mount Otemanu.", price: 8500, location: "Bora Bora", country: "French Polynesia" },
    { title: "Galle Fort Heritage Home", description: "A restored colonial home inside Galle Fort, where sea walls, cafes, and history meet.", price: 1200, location: "Galle", country: "Sri Lanka" },
    { title: "Berlin Design District Studio", description: "A minimalist studio in a vibrant Berlin neighborhood, close to galleries, music, and great coffee.", price: 1450, location: "Berlin", country: "Germany" },
    { title: "Salar de Uyuni Desert Lodge", description: "A remote desert lodge for unforgettable salt-flat horizons, stars, and high-altitude adventure.", price: 2300, location: "Uyuni", country: "Bolivia" },
    { title: "Moscow Historic District Apartment", description: "A spacious apartment with classic details near museums, theaters, and historic boulevards.", price: 1600, location: "Moscow", country: "Russia" },
    { title: "Helsinki Seaside Sauna Home", description: "A Scandinavian waterfront home with a private sauna and peaceful Baltic Sea views.", price: 2100, location: "Helsinki", country: "Finland" },
    { title: "Kathmandu Courtyard Residence", description: "A calm residence with carved wood details, a sunlit courtyard, and easy access to heritage sites.", price: 800, location: "Kathmandu", country: "Nepal" },
    { title: "Copenhagen Canal Loft", description: "A clean, comfortable loft beside a canal, ideal for exploring Copenhagen by bike.", price: 2200, location: "Copenhagen", country: "Denmark" },
    { title: "Lagos Waterfront Apartment", description: "A contemporary apartment with lagoon views, secure amenities, and lively city energy nearby.", price: 1550, location: "Lagos", country: "Nigeria" },
    { title: "Auckland Harbour Villa", description: "A family-friendly villa with harbour views, sunny decks, and easy access to city beaches.", price: 2600, location: "Auckland", country: "New Zealand" },
];

const listingImages = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
];

sampleListings.push(
    ...worldwideListings.map((listing, index) => ({
        ...listing,
        image: {
            filename: "listingimage",
            url: listingImages[index % listingImages.length],
        },
    }))
);

module.exports = { data: sampleListings };
