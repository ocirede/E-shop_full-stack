import Products from "../models/productsModel.js";
import connectDB from "../lib/connectDB.js";

connectDB();

const productsData = [
  {
    name: "fourfive CBD Oil 2000mg Orange Flavour 30ml",
    description:
      "Fourfivecbd Cannabidiol Oil 2000mg orange flavour 30ml A 2000mg delicious orange flavoured CBD oil made with 100% natural ingredients.One or two sprays under the tongue. Leave for sixty seconds before swallowing to achieve best results.Perfect for the advanced user who has been using CBD Oil for a while, has a larger body type or a higher tolerance to CBD.100% Natural ingredients, Made in UK, Vegan, Independently lab tested, Award winning brand Fourfive CBD oil is brought to you by international rugby players George Kruis and Dom Day. If you want trusted CBD products and are looking to keep healthy, happy and active then fourfive is the brand for you. Fourfive Health Ltd, UK: 2 Victoria Square, St Albans, AL1 3TF, UK EU: Alexandra House, The Sweepstakes, Dublin,D04 C7H2, IE",
    price: 75.00,
    quantity: 10,
    image:
      "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/063118_A.jpg",
    category: "CBD Oil",
    brand: "Fourfive Brand",
  },
  {
    name: "Holistic Herb Premium CBD Oil Double Strength 15ml",
    description:
      "Premium Double Strength, THC Free, Total Bio CBD Oil Total Bioavailability CBD. Scientifically designed to offer remarkable levels of bioavailability Rigorously tested by third-party laboratories to guarantee purity, Vegan friendly and proudly maufactured in the U.K. Looking for a CBD product that really works? Look no further! Holistic Herbs 'Total Bio' CBD Oils and Sprays are scientifically designed to offer remarkable levels of bioavailability without the need to hold it under your tongue.With a passionate belief in daily CBD supplementation, our mission is to offer the most effective, bio-available plant-derived products available. As a UK company we're proud to say that our products are manufactured to exacting standrads in the UK, and undergo independent third party laboratory testing ensuring safety, quality and consistency. “Say goodbye to Ineffective CBD products and experience the 'Total Bio' difference for yourself.",
    price: 49.99,
    quantity: 10,

    image:
      "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/033065_A.jpg",
    category: "CBD Oil",
    brand: "Holistic Brand",
  },
  {
    name: "fourfive CBD Oil 2000mg Unflavoured 30ml",
    description:
      "Fourfivecbd Cannabidiol Oil 2000mg unflavoured 30ml; A 2000mg CBD oil made with 100% natural ingredients.One or two sprays under the tongue. Leave for sixty seconds before swallowing to achieve best results.Perfect for the advanced user who has been using CBD Oil for a while, has a larger body type or a higher tolerance to CBD.100% Natural ingredients, Made in UK, Vegan, Independently lab tested, Award winning brand fourfive CBD oil is brought to you by international rugby players George Kruis and Dom Day. If you want trusted CBD products and are looking to keep healthy, happy and active then fourfive is the brand for you.Fourfive Health Ltd, UK: 2 Victoria Square, St Albans, AL1 3TF, UK EU: Alexandra House, The Sweepstakes, Dublin, D04 C7H2, IE",
    price: 65.00,
    quantity: 10,

    image:
      "https://images.hollandandbarrettimages.co.uk/productimages/HB/1500/063115_A.jpg",
    category: "CBD Oil",
    brand: "Fourfive Brand",
  },
  {
    name: "Reakiro CBD Oil 1500mg 10 ml",
    description:
      "Reakiro CBD Oil 1500 mg, 10 ml Premium full-spectrum CBD Oil 15% (1500mg CBD) Master blended with hemp seed oil to help you enjoy the full range of benefits Gluten Free, Vegan Friendly, Non GMO, Premium Grade, Made in EU, Lab tested Reakiro introduces the Gold Standard of full-spectrum CBD Oil, the best solution for those who want the optimum healthy life and wake up their inner resources. Reakiro premium CBD oil is produced from the highest quality industrial hemp cultivated in the EU and tested by independent third-party laboratories.Full-spectrum CBD is an extract containing all the compounds, which are found naturally occurring in the plant. These include over one hundred cannabinoids, terpenes, flavonoids and essential oils. Reakiro Poland Sp.z o.o. Pl. Jana Kilinsklego 2 35-005 Rzeszow Poland",
    price: 68.99,
    quantity: 10,

    image:
      "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/046841_A.jpg",
    category: "CBD Oil",
    brand: "Reakiro Brand",
  },

  {
    name: "Holistic Herb Premium CBD Oil Double Strength 15ml",
    description:
      "Grass & Co. REST 300mg CBD+ with Lavender 30 Vegan Capsules Tired of feeling tired? Support your bedtime routine with the convenient Grass & Co. REST 300mg CBD+ Vegan Capsules. REST infuses the finest quality finest quality cold-pressed hemp powder that delivers a full spectrum of cannabinoids with added Lavender in one night-time capsule. Unwind before bed. The unique CBD and botanical formulation is enhanced with Vitamin B5 to help reduce tiredness and fatigue. Feel rested after a good night's sleep. Grass & Co. deliver the highest quality and best-tasting CBD+, botanical and vitamin-packed blends that deliver specific health benefits. If you’re new to CBD, the REST 300mg CBD+ Vegan Capsules are a great starting point. Each flavourless capsule contains approx. 10mg of full spectrum cannabinoids, including CBD, CBDa, CBG & others. This unique botanical blend includes Vitamin B5 to help reduce tiredness and fatigue. When first using your Grass & Co. REST CBD+ Capsules, we recommend you start low and go slow. Take the capsule with water 30-60 minutes before bed. Steadily build your dosage every day so you find the balance that works with your body. For best results, use alongside the Grass & Co. REST CBD Oil drops and maintain your Grass & Co. CBD routine daily. Take care not to exceed the recommended limit of 10mg CBD per day. * Contains Pantothenic Acid (Vitamin B5) which contributes to the reduction of tiredness and fatigue. UK - Grass & Co. Bath Road, Kettering, NN16 8NQ EU - Grass & Co. 13 Adelaide Road, Dublin 2",
    price: 29.50,
    quantity: 10,

    image:
      "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/063070_A.jpg",
    category: "CBD Oil",
    brand: "Grass & Co",
  },

  {
    name: "Cannaray Bright Days CBD 30mg 30 Gummies",
    description:
      "Cannaray Bright Days CBD Gummies, 900mg total Vegan-Friendly, with fully recyclable packaging Bursting with natural orange flavour THC-free and triple lab tested for purity Cannaray Bright Days CBD Gummies are a delicious and easy way to take CBD day or night. This jar of 30 high-strength CBD chews is jam-packed with 30mg of CBD per gummy and flavoured with natural orange. Vegan, THC-free, GMO-free and triple lab tested. How to Use the CBD Gummies Grab, chew, go. It’s that easy. We’ve revolutionised CBD with your quickest dosage yet. 1 CBD gummy contains 30mg CBD. Recommended daily dose = 2 CBD gummies per day (60mg CBD total). Do not exceed 70mg CBD per day. Join the CBD Revolution with Cannaray In 2019, Cannaray set out to start a CBD Revolution. Our team of scientists and wellness experts came together with one goal: to help people get the most out of CBD by creating a collection of CBD Oils, Capsules, Gummies and Topicals of the highest quality and purity. Each of us is fuelled by passion and our own personal experiences with CBD. Now, we are on a mission to show millions of others how easy-to-use and effective CBD can be. 76 Charlotte Street, London W1T 4QS",
    price: 36.00,
    quantity: 10,

    image:
      "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/062835_A.jpg",
    category: "Gummies",
    brand: "Cannaray CBD",
  },

  {
    name: "Reakiro CBD 25mg Apple & Lemon Flavour 30 Gummies",
    description:
      "Reakiro CBD Gummies 750 mg, 30 pcs Made with full-spectrum CBD extract, Reakiro’s CBD gummies will bring you CBD in a fun and tasty form. Each gummy contains 25mg of CBD Each tub contains 30 gummies: 15 lemon and 15 green apple flavoured gummies, tastes chosen for being both sweet and refreshing - while reflecting special Reakiro colours! Reakiro’s CBD gummies are made with premium quality Broad-Spectrum CBD extract. CBD gummies are fun, easy, convenient, and in the case of these great Reakiro gummies - incredibly tasty! Infused with lemon and green apple flavouring, Reakiro’s gummies are one of the most enjoyable and exciting ways for you to get your daily dose of CBD. You don’t need to worry about washing them down with water, simply place it in your mouth, chew, and enjoy! Reakiro Poland Sp.z o.o. Pl. Jana Kilinsklego 2 35-005 Rzeszow Poland",
    price: 49.99,
    quantity: 10,

    image:
      "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/051831_A.jpg",
    category: "Gummies",
    brand: "Reakiro",
  },

  {
    name: "Love Hemp Stay Calm 300mg CBD Cold Press 30 Gummies",
    description:
      "Love Hemp Stay Calm 300mg CBD Cold Press Gummies 30 Delicious berry flavoured gummies for moments of zen Formulated with CBD and a variety of functional ingredients including Ashwagandha, Reishi Mushroom and more Non GMO, vegan friendly and sugar free Love Hemp Stay Calm gummies contain a synergistic blend of CBD, Ashwagandha, Reishi Mushroom, Hawthorn, Lemon Balm, Chamomile and Vitamins B3 & B5. Simply take 1 gummy daily or as required when its time to unwind. Love Hemp, London, EC2A 4NE, UK",
    price: 24.99,
    quantity: 10,

    image:
      "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/063997_A.jpg",
    category: "Gummies",
    brand: "Love Hemp",
  },

  {
    name: "Cannaray Night-Time CBD Oil 1800mg 30ml",
    description:
      "Cannaray Night-Time CBD Oil Drops, 1800mg 30ml Delicious mint taste, perfect for taking before or after brushing your teeth Vegan-Friendly, with fully recyclable packaging THC-free and triple lab tested for purity Cannaray CBD Oil Night Time is infused with a premium dose of high-strength CBD, hemp oil and coconut oil. These tasty drops make your wind-down routine simple, quick and easy. Vegan, THC-free, GMO-free and triple lab tested. How to Use CBD Oil Squeeze up to 1ml of the dropper of oil directly underneath your tongue. Hold it there for around 90 seconds, allowing it to absorb before swallowing any remaining oil. Join the CBD Revolution with Cannaray In 2019, Cannaray set out to start a CBD Revolution. Our team of scientists and wellness experts came together with one goal: to help people get the most out of CBD by creating a collection of CBD Oils, Capsules, Gummies and Topicals of the highest quality and purity. Each of us is fuelled by passion and our own personal experiences with CBD. Now, we are on a mission to show millions of others how easy-to-use and effective CBD can be. Helping us lead the charge is our ambassador, Claudia Winkleman, who is a self-proclaimed Cannaray CBD superfan. Claudia’s favourite products? The Cannaray Bright Days CBD Capsules and peppermint flavoured Night Time CBD oil. Claudia’s in – now it’s your turn. Join the CBD Revolution.76 Charlotte Street, London W1T 4QS",
    price: 29.50,
    quantity: 10,
    image:
      "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/061668_A.jpg",
    category: "CBD Oil",
    brand: "Cannaray CBD",
  },
  {
    name: "fourfive CBD Muscle Rub 300mg 45ml",
    description:
      "Fourfivecbd Cannabidiol Muscle Rub 300mg 45ml A CBD-infused menthol balm for use on aching muscles Apply topically to skin. External use only-Natural ingredients -Made in UK -Vegan -Award winning brand Fourfive CBD is brought to you by international rugby players George Kruis and Dom Day. If you want trusted CBD products and are looking to keep healthy, happy and active then fourfive is the brand for you. Fourfive Health Ltd, UK: 2 Victoria Square, St Albans, AL1 3TF, UK EU: Alexandra House, The Sweepstakes, Dublin, D04 C7H2, IE",
    price: 28.00,
    quantity: 10,

    image:
      "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/063121_A.jpg",
    category: "CBD balm",
    brand: "fourfive",
  },

  {
    name: "Cannaray CBD Muscle Balm 60ml",
    description:
      "Cannaray CBD Muscle Balm 250mg 60ml Made for muscles, with a melting balm to oil texture that's perfect for massage Blended with natural ingredients including aloe vera, arnica, eucalyptus and shea butter Vegetarian-Friendly, with fully recylable packaging Cannaray CBD Muscle Balm features 250mg of Cannaray's premium CBD, plus a soothing blend of Aloe, Arnica, Shea Butter, Eucalyptus, Limonene and Linalool. The balm's melting balm to oil texture is perfect for massaging into tired and achy muscles, joints and pressure points. How to Use CBD Muscle Balm Warm a small scoop of balm between your palms until melted then massage into any areas that feel sore or tight. 1/2 of a teaspoon contains roughly 12mg CBD. Pro Tip: massaging the CBD balm into the skin for 10-15 minutes will allow the CBD to penetrate deeper into the skin. Join the CBD Revolution with Cannaray In 2019, Cannaray set out to start a CBD Revolution. Our team of scientists and wellness experts came together with one goal: to help people get the most out of CBD by creating a collection of CBD Oils, Capsules, Gummies and Topicals of the highest quality and purity. Each of us is fuelled by passion and our own personal experiences with CBD. Now, we are on a mission to show millions of others how easy-to-use and effective CBD can be. Helping us lead the charge is our ambassador, Claudia Winkleman, who is a self-proclaimed Cannaray CBD superfan. Claudia’s favourite products? The Cannaray Bright Days CBD Capsules and peppermint flavoured Night Time CBD oil. Claudia’s in – now it’s your turn. Join the CBD Revolution. 76 Charlotte Street, London W1T 4QS",
    price: 22.49,
    quantity: 10,

    image:
      "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/061710_A.jpg",
    category: "CBD balm",
    brand: "Cannaray CBD",
  },

  {
    name: "Muscle Balm 300mg with Tea Tree, Eucalyptus & Arnica 60ml",
    description:
      "Ease CBD Muscle Balm 300mg 60ml Massage the EASE Muscle Balm directly into skin to help soothe and ease aching muscles and sore, stiff joints. The concentrated Grass & Co. EASE Muscle Balm delivers 300mg of the best quality CBD Oil and is infused with a soothing botanical blend of Tea Tree, Eucalyptus, Peppermint, Camphor and Arnica. All our Balms contain no trace of THC and are vegan friendly. The nourishing texture hydrates skin while the natural aromatherapy scents have been specially blended to soothe body and mind for uplifting results. The Grass & Co. Balms are a great option for CBD beginners. Made with all-natural ingredients, this powerful topical balmis gentle and will target specific areas in need. Enjoy some slow, deep breaths of the finest quality essential oilsto help boost your mood before applying. EASE CBD Muscle Balm is perfect for massaging into joints and sore muscles first thing in the morning, post-exercise and before bed. The unique nourishing blend of Tea Tree, Eucalyptus, Peppermint, Arnica and Arnica Oils help to ease tension and stiffness. All our Balms contain no trace of THC. Grass & Co. Metro Bldg, 1 Butterwick, Hammersmith, London W6 8DL",
    price: 39.49,
    quantity: 10,

    image:
      "https://images.hollandandbarrettimages.co.uk/productimages/HB/724/051210_A.jpg",
    category: "CBD balm",
    brand: "Grass & Co.",
  },
];

Products.insertMany(productsData)
  .then((createdProducts) => {
    console.log("Product documents created:", createdProducts);
  })
  .catch((error) => {
    console.error("Error creating product documents:", error);
  });
