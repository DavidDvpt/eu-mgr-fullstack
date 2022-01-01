import prismaClient from "../../prismaClient";

const data = [
  {
    id: 1,
    name: "Tool",
  },
  {
    id: 2,
    name: "Ressource",
  },
  {
    id: 3,
    name: "Accessoire",
  },
];

async function seed() {
  const result = await prismaClient.category.createMany({
    data,
  });
  console.log("seed Categories", result);
}

export default function seedCategories() {
  seed()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prismaClient.$disconnect();
    });
}
