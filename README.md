# cats

A simple Node js Command Line Interface to create, read, update, and delete Cats List!
Make sure you have the Node JS installed on your computer: https://nodejs.org/en/download/

1. Please git clone the repository
2. npm install -g (this will enable the cats CLI to work anywhere from your computer) 
3. type away using the following commands in your terminal:
  * always start off with words "cats"
  
  to read list of cats:  
    cats read
  
  to add a cat with its color, and other options age (-a) or weight (-w) ->  
     cats add <name> <color> [options]
     ex: cats add Tabby black -a 4
    
  to update a cat ->  update <name> [options]
     ex: cats update Tabby black -a 5 -w 8
  
  to delete a cat -> delete <name> 
     ex: cat delete Tabby
  
  to display help for command ->  help [command]                
