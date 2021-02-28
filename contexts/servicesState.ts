export type IIcons = "dictionary" | "magnifyingglass" | "document" | "publish";
export interface IServices {
  image: string;
  alt: string;
  title: string;
  desc: string;
  icon: IIcons;
}

export const servicesState: IServices[] = [
  {
    alt: "Whatever",
    image: "/magnifyingglass.jpg",
    desc:
      "Sed bibendum.    Nam a sapien.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Donec posuere augue in quam.  ",
    title: "Plagiarism Check",
    icon: "magnifyingglass",
  },
  {
    alt: "Whatever",
    image: "/document.jpg",
    desc: "Sed bibendum.    Donec posuere augue in quam.  ",
    title: "Journal Formatting",
    icon: "document",
  },
  {
    alt: "Whatever",
    image: "/dictionary.jpg",
    desc: "Sed bibendum.    Donec posuere augue in quam.  ",
    title: "Grammar and Typeschecking",
    icon: "dictionary",
  },
  {
    alt: "Whatever",
    image: "/publish.jpg",
    desc:
      "  Nam a sapien.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Donec posuere augue in quam.  ",
    title: "Publishing",
    icon: "publish",
  },
];
