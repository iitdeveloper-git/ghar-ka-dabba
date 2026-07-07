import React from 'react';

const FOOD_ITEMS = [
  {
    id: 1,
    name: 'Shahi Paneer',
    tag: 'Vegetarian',
    tagClass: '',
    image: '/images/gallery_1.png',
    desc: 'Soft, premium paneer cubes cooked in a rich, smooth tomato-cashew paste, lightly spiced and topped with fresh cream.'
  },
  {
    id: 2,
    name: 'Rajma Masala',
    tag: 'Vegetarian',
    tagClass: '',
    image: '/images/gallery_2.png',
    desc: 'Authentic home-style red kidney beans cooked in a spiced onion-tomato gravy, topped with julienned ginger and fresh coriander leaves.'
  },
  {
    id: 3,
    name: 'Deluxe Veg Thali',
    tag: 'Vegetarian',
    tagClass: '',
    image: '/images/gallery_3.png',
    desc: 'A rich, premium steel platter served with two soft rotis, pulav rice, Dal Tadka, Paneer curry, Chole, mixed veg, cool raita, and a sweet Gulab Jamun.'
  },
  {
    id: 4,
    name: 'Kadhi Chawal',
    tag: 'Vegetarian',
    tagClass: '',
    image: '/images/gallery_4.png',
    desc: 'Tangy, comforting yogurt-gram flour curry with soft pakoras, spread over a generous bed of steamed basmati rice, accompanied by crunchy sliced onions.'
  },
  {
    id: 5,
    name: 'Chole Bhature',
    tag: 'Vegetarian',
    tagClass: '',
    image: '/images/gallery_5.png',
    desc: 'Spicy, slow-cooked Amritsari chickpeas paired with a super-fluffy, golden-crisp puffed Bhatura, served with tangy sliced onions and lemon.'
  },
  {
    id: 6,
    name: 'Kadhai Paneer',
    tag: 'Vegetarian',
    tagClass: '',
    image: '/images/gallery_6.png',
    desc: 'Fresh paneer blocks and vibrant bell peppers tossed in a robust onion-tomato gravy with freshly roasted spices, served hot in a traditional kadhai.'
  },
  {
    id: 7,
    name: 'Seasonal Green Salad',
    tag: 'Vegetarian',
    tagClass: '',
    image: '/images/gallery_7.png',
    desc: 'A fresh, crispy plate of sliced cucumbers, sweet carrots, red onion rings, sharp green chilies, and lemon to elevate your daily meal.'
  },
  {
    id: 8,
    name: 'Matar Paneer',
    tag: 'Vegetarian',
    tagClass: '',
    image: '/images/gallery_8.png',
    desc: 'Tender paneer cubes and sweet green peas simmered in a rich, mildly spiced onion-tomato gravy, garnished with fresh cilantro.'
  },
  {
    id: 9,
    name: 'Dal Makhani',
    tag: 'Vegetarian',
    tagClass: '',
    image: '/images/gallery_9.png',
    desc: 'Creamy, slow-cooked black lentils and kidney beans simmered overnight with butter and spices, finished with a fresh cream swirl and salad.'
  },
  {
    id: 10,
    name: 'Jeera Rice',
    tag: 'Vegetarian',
    tagClass: '',
    image: '/images/gallery_10.png',
    desc: 'Aromatic basmati rice tempered in pure ghee with roasted cumin seeds and fresh coriander, serving as the perfect companion to home curies.'
  },
  {
    id: 11,
    name: 'Veg Biryani',
    tag: 'Vegetarian',
    tagClass: '',
    image: '/images/gallery_11.png',
    desc: 'Fragrant, long-grain basmati rice layered with fresh seasonal vegetables, slow-cooked \'dum\' style with saffron, mint, and secret home spices.'
  },
  {
    id: 12,
    name: 'Sweet Halwa Kheer',
    tag: 'Dessert',
    tagClass: 'sweet',
    image: '/images/gallery_12.png',
    desc: 'Rich, creamy milk pudding (Seviyan Kheer) slow-cooked with cardamoms, generously loaded with crunchy almonds, pistachios, and dried rose petals.'
  },
  {
    id: 13,
    name: 'Dal Tadka',
    tag: 'Vegetarian',
    tagClass: '',
    image: '/images/gallery_13.png',
    desc: 'Wholesome yellow lentils tempered with ghee, crispy cumin, fried garlic, dry red chilies, and a smoky hing-infused red chili tadka.'
  },
  {
    id: 14,
    name: 'Mix Veg Sabji',
    tag: 'Vegetarian',
    tagClass: '',
    image: '/images/gallery_14.png',
    desc: 'A healthy, dry medley of seasonal green peas, sweet carrots, and potatoes sautéed with turmeric, mustard seeds, and fresh coriander.'
  },
  {
    id: 15,
    name: 'Paneer Bhurji',
    tag: 'Vegetarian',
    tagClass: '',
    image: '/images/gallery_15.png',
    desc: 'Crumbled cottage cheese sautéed with chopped onions, tomatoes, and green chilies, served along with a hot, layered griddle paratha.'
  },
  {
    id: 16,
    name: 'Tawa Roti',
    tag: 'Vegetarian',
    tagClass: '',
    image: '/images/gallery_16.png',
    desc: 'Soft, hand-rolled whole wheat rotis puffed fresh on a traditional iron tawa, serving as a healthy daily bread for your meals.'
  }
];

export default function GalleryView({ showToast }) {
  const handleAddToPlan = (foodName) => {
    showToast(`${foodName} added to your plan customization! Go to Home > Plans to subscribe.`, true);
  };

  return (
    <main style={{ minHeight: '80vh' }}>
      {/* Hero */}
      <section className="gallery-hero">
        <div className="container">
          <h1 className="gallery-title">Our Food Gallery</h1>
          <p className="gallery-subtitle">
            A glimpse of the pure, fresh, and mouthwatering homemade dishes cooked in our clean home kitchen daily.
          </p>
        </div>
      </section>

      {/* Grid of 16 Foods */}
      <section className="gallery-content" style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div className="gallery-grid-12">
            {FOOD_ITEMS.map((item) => (
              <div key={item.id} className="gallery-card">
                <div className="gallery-img-wrapper">
                  <img src={item.image} alt={item.name} className="gallery-img" />
                </div>
                <div className="gallery-info">
                  <span className={`food-tag ${item.tagClass}`}>{item.tag}</span>
                  <h3 className="food-title">{item.name}</h3>
                  <p className="food-desc">{item.desc}</p>
                  <button 
                    className="gallery-add-btn"
                    onClick={() => handleAddToPlan(item.name)}
                  >
                    Add to Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export { FOOD_ITEMS };
