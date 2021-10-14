import html_to_pdf from 'html-pdf'
import ejs from 'ejs'
import { readFileSync } from 'fs'
import { spawnSync } from 'child_process'

html_to_pdf.create(ejs.render(readFileSync('src/table.ejs').toString(), {}), {
  format: 'A4'
}).toFile('output.pdf', (err) => {
  if(err) console.error(err)
  spawnSync('output.pdf')
})