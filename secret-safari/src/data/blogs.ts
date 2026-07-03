export interface Blog {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
}

export const initialBlogs: Blog[] = [
  {
    id: "1",
    title: "Tracking Lions in the Mara at Dawn",
    author: "Elena Rossi",
    date: "October 12, 2023",
    content: "There is nothing quite like the chill of the early morning air in the Masai Mara, pierced only by the distant, thunderous roar of a male lion. We set out before sunrise, the grass still heavy with dew. The golden light began to spill over the horizon, painting the savannah in brilliant hues of amber and gold.\n\nOur guide spotted tracks near a watering hole. Moving quietly, we found them—a pride of five, basking in the first rays of the sun. It's a humbling experience to share the same earth with such magnificent creatures. The silence was profound, broken only by the click of my camera.",
    image: "/images/blogs/blog-1.png"
  },
  {
    id: "2",
    title: "Sailing the Swahili Coast on a Traditional Dhow",
    author: "Marcus Chen",
    date: "November 5, 2023",
    content: "The Lamu archipelago feels entirely disconnected from the modern world. Here, time is measured not by clocks, but by the tides and the wind. We chartered a traditional wooden dhow for a sunset sail through the mangrove channels.\n\nThe captain, a local whose family had sailed these waters for generations, skillfully navigated the shallow reefs. As the sun dipped below the horizon, casting a fiery glow over the Indian Ocean, we enjoyed fresh coconut water and listened to ancient Swahili tales. It was pure magic.",
    image: "/images/blogs/blog-2.png"
  },
  {
    id: "3",
    title: "The Solitude of Chalbi Desert",
    author: "Amina Kiprono",
    date: "January 20, 2024",
    content: "Far from the lush plains of the south lies the Chalbi Desert—Kenya’s hidden, harsh beauty. The drive itself is an adventure through rugged, unforgiving terrain. Arriving at the edge of the desert, you are met with an endless expanse of blinding white salt pans.\n\nWe encountered a nomadic Gabbra caravan leading their camels across the wasteland, a scene that looked biblical. The heat is intense, but the stark, minimalistic beauty of the landscape provides a deep sense of peace and isolation you can't find anywhere else.",
    image: "/images/blogs/blog-3.png"
  },
  {
    id: "4",
    title: "Misty Mornings in the Aberdares",
    author: "Julian Davies",
    date: "March 15, 2024",
    content: "Most people think of dry savannahs when they picture Kenya, but the Aberdare mountain range is a lush, misty rainforest. We stayed in a lodge high in the canopy, listening to the cacophony of birds and monkeys.\n\nHiking through the dense undergrowth, we stumbled upon a massive waterfall hidden deep within the gorge. The water crashed down with incredible force, creating a cool mist that refreshed us after the steep climb. We even spotted a rare bongo antelope watching us from the trees.",
    image: "/images/blogs/blog-4.png"
  },
  {
    id: "5",
    title: "Breakfast with Giraffes in Nairobi",
    author: "Sarah Jenkins",
    date: "May 2, 2024",
    content: "My journey in Kenya started before I even left the city. Staying near the Giraffe Centre in Nairobi offered an incredibly surreal experience. Waking up and having breakfast while a towering Rothschild giraffe pokes its head through the window is something out of a dream.\n\nLearning about the conservation efforts to protect these gentle giants added so much depth to the experience. It was the perfect gentle introduction to the wildlife wonders that awaited us in the wild.",
    image: "/images/blogs/blog-5.png"
  }
];