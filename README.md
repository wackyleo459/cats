# CATS CLI

A simple Node.js Command Line Interface to create, read, update, and delete Cats List!
Make sure you have Node JS installed on your computer: https://nodejs.org/en/download/

## Steps
1. Please git clone the repository
2. npm install -g (this will enable the cats CLI to work anywhere from your computer) 
3. type away using the following commands in your terminal:
  * always start off with words "cats"
  
## Usage

#### to read whole list of cats:  
```node
cats read
``` 
#### to add cat with its name, color and options age (-a) and/or weight (-w): cats add <name> <color> [options]
```node
cats add Tabby black -a 4
```   
#### to update a cat with options color, age and/or weight: update <name> [options]
```node
cats update Tabby -c pink -a 5 -w 8
```
#### to delete a cat: delete <name> 
```node
cats delete Tabby
```
#### to display help for command: help [command]  
```node
cats help add
```
