
# Task

Generate Photo and QRcode and export the byte array using esc-pos-encoder-ionic

## Background

ESC/POS is the command set developed by epson which makes receipt printers print text, barcodes, qr codes, and images. The command set consists of a series of short text strings that can be combined to produce commands for performing operations such as printing, paper cutting, and opening the cash drawer.

### Requirements

- Generate an image and print it, the image is located at project root directory, named `Frame 1389.png`
- Generate a QR code (https://dashboard.wyocrm.com)

### expected result

- generate a byte array in print-command.txt