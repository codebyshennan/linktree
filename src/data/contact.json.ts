export interface Template {
  link: string;
  type: string;
  title: string;
}
const email: Template = {
  link: "mailto:wongshennan@gmail.com",
  type: "Email",
  title: "wongshennan@gmail.com",
};
const twitter: Template = {
  link: "https://twitter.com/helloshennan",
  type: "Twitter",
  title: "@helloshennan",
};
const cv: Template = {
  link: "https://read.cv/join/wongshennan",
  type: "Read CV",
  title: "shennan_wong",
};
export const bytype = {
  email,
  twitter,
  cv,
};
export const contact = Object.values(bytype);
