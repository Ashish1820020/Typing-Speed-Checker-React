const text: string[] = [
    `Mike and Morris lived in the same village.`,
    `Ms. Abernathy gently reminded her to take breaks, but Sarah was determined to reach the end of the story.`,
    `With a deep breath, she opened the door and approached the amulet. As she touched it, a burst of blue light enveloped her, and she felt herself returning to the library.`,
    `In a quiet corner of the bustling city, there stood an old, dusty library. While most people hurried past, its unassuming exterior hid an incredible secret.`,
    `Sarah soon discovered the true enchantment of the library. Its shelves held volumes that could transport readers to other worlds.`,
    `One day, as Sarah was browsing the shelves, she noticed a book titled “The Lost Amulet of Althoria." The cover featured a golden amulet with a shimmering blue gem.`,
    `She opened the book and was immediately drawn into a tale of a young adventurer, Alaric, on a quest to find the lost amulet.`,
    `As the days turned into weeks, Sarah's friends and family grew concerned. She had become so absorbed in the book that she neglected her usual activities.`,
    `Finally, one evening, as Sarah read the last page, she found herself standing in a clearing, facing an ornate door. Through the door, she saw a dazzling chamber with the lost amulet resting on a pedestal.`,
    `When she opened her eyes, she was back among the dusty bookshelves, holding the book in her hands. Ms.`,
    `Abernathy congratulated her on completing the unfinished story. Sarah had not only finished the tale but had also experienced an adventure unlike any other.`,
    `She felt herself journeying through dark forests, crossing treacherous rivers, and facing mythical creatures. The more she read, the deeper she became entangled in the story. It was as though she had become Alaric, feeling his determination and bravery.`,
    `One day, while immersed in an old book about mystical lockets, Lily came across a passage that mentioned the existence of a “key of the heart."`,
    `It said that this key could open the most stubborn of locks, but it was hidden within each person, waiting to be discovered. This newfound knowledge gave Lily a renewed sense of hope and determination.`,
    `When she opened her eyes, she found the locket had sprung open, revealing a tiny, folded parchment inside. With trembling hands, she carefully unfolded it and read the message: “The truth lies in the journey, not the destination."`,
    `Ms. Abernathy explained that this was a unique book—it was unfinished. No one knew how the story ended because no reader had ever returned the book. Sarah decided to take on the challenge.`,
    `Lily followed the recluse's advice, sitting beneath the ancient oak tree where she had found the locket. She closed her eyes, focused on her heart's deepest desires, and as she did, she felt the locket warming in her hand.`
];

export const randomTextGenerator = () => text[Math.floor(Math.random() * text.length)];

export const allowedKeys = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
    't', 'u', 'v', 'w', 'x', 'y', 'z', ';', `'`, ',', '.', '"'
]



