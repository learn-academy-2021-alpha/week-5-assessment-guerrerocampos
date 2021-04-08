# ASSESSMENT 5: Rails Practical Questions

<!-- 1. What is the command to create a new Rails application with a Postgres database? -->
    rails new name_off_app -d postgresql -T



<!-- 2. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake. --> rails g migration add_model_id_column foreign_ID:integer
    rails db:migrate
    (in console inside add_model_id_column) add_column :model_name, :foreign_id, :integer



<!-- 3. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes? -->
    rails g model person shirt:string pants:string shoes:string
    rails db:migrate


<!-- 4. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command? -->
    naming convention for generating a rails model is pascal casing and snake_casing for the table.


<!-- 5. A Rails application is going to have two models. One is called Library and one is called Book. A library will have many books and a book will belong to a library. Which model would contain the foreign key? What would the foreign key column be named? -->
    the book model will contain the foreign key. the comlumn could be named foreign id.


<!-- 6. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not? -->
    the schema file in rails is used to see exactly what is in your table. it provides a clearer visual of columns in your table and what datatype the value should be. technically, you can modify it directly but you won't be able to change anything. your changes won't save through there.