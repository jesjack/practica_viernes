import html_to_pdf from 'html-pdf'
import ejs from 'ejs'
import { readFileSync } from 'fs'

var mathFunction: string
var rows: Array<[x: string | number, f: string | number]> = []

export function render() {
  html_to_pdf.create(ejs.render(readFileSync('src/table.ejs').toString(), {
    mathFunction, rows
  }), {
    format: 'A5'
  }).toFile('output.pdf', (err) => {
    if(err) console.error(err)
  })
}

export function setMathFunction(f: string) {
  mathFunction = f
}

export function addRow(row: [x: string | number, f: string | number]) {
  rows.push(row)
}