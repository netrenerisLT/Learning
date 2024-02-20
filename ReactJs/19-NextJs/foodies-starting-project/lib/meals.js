import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); //just delays loading data, because need to check loading spinner
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug + Math.random() * 1000}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`); //alows write data to certain file
  const bufferedImage = await meal.image.arrayBuffer();

  // first argument is the chunk - the thing which will be written to the folder,
  // another argument is an fn which will be executed in the end
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  //stores a path of the mage to the database
  meal.image = `/images/${fileName}`;

  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal);
}
