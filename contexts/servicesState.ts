export interface IServices {
  image: string;
  alt: string;
  title: string;
  desc: string;
}

export const servicesState: IServices[] = [
  {
    alt: "Whatever",
    image: "/magnifyingglass.jpg",
    desc:
      "Sed bibendum.  Sed diam.  Nam a sapien.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Donec posuere augue in quam.  ",
    title: "Plagiarism Check",
  },
  {
    alt: "Whatever",
    image: "/document.jpg",
    desc:
      "Sed bibendum.  Sed diam.  Nam a sapien.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Donec posuere augue in quam.  ",
    title: "Journal Formatting",
  },
  {
    alt: "Whatever",
    image: "/dictionary.jpg",
    desc:
      "Sed bibendum.  Sed diam.  Nam a sapien.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Donec posuere augue in quam.  ",
    title: "Grammar and Typeschecking",
  },
  {
    alt: "Whatever",
    image: "/publish.jpg",
    desc:
      "Sed bibendum.  Sed diam.  Nam a sapien.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Donec posuere augue in quam.  ",
    title: "Publishing",
  },
];
