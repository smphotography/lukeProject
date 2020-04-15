import Jimp from 'jimp';
console.log(Jimp);

let image = new Jimp(300, 530, 'green', (err, image) => {
if (err) throw err
})

let message = 'Hello!'
let x = 10
let y = 10

Jimp.loadFont(Jimp.FONT_SANS_64_BLACK)
.then(font => {
  image.print(font, x, y, message)
  return image
}).then(image => {
  let file = `new_name.${image.getExtension()}`
  return image.write(file) // save
})
