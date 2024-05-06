interface Navlink {
  id: number;
  title: string;
  subItems: string[];
}

const navlinks: Navlink[] = [
  {
    id: 1,
    title: "Product",
    subItems: [
      "Overview",
      "Pricing",
      "Marketplace",
      "Features",
      "Integrations",
    ],
  },
  {
    id: 2,
    title: "Company",
    subItems: ["About", "Team", "Blog", "Careers"],
  },
  {
    id: 3,
    title: "Connect",
    subItems: ["Contact", "Newsletter", "LinkedIn"],
  },
];

export default navlinks;
