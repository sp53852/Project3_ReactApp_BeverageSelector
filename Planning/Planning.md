Initial planning of project 3 react app

HomePage
	Alcoholic , Non alcoholic Links
	Search by ingredient

HomePage > Alcoholic >  picture gallery of drinks > detailed drink page with recipe

HomePage >  Non alcoholic Links >  Picture gallery of drinks with their labels >  detailed drink page - recipe



HomePage -  Page with input type and submit button >  picture gallery of drinks > detailed drink page with recipe


Bonus
Get the ingredient nutrition calculation based on ingredients of recipe / Calorie calculator based on ingredients   

Future improvement
1. Multiple calls and marry the results together and display on gallery
2. Results of the ingredient search - Display alcoholic and non-alcoholic in seperate sub sections on gallery page 
3. Drink Recipe page - the steps for preparation will have option of language selection

User Stories

Landing Page
1. Links on the landing page -
    As a user I would expect to see the following controls on landing page : Home, Search, Alcoholic link, non-Alcoholic links 
2. Header on the landing page -
    As a user I would expect to see consistent site navigation options on the header - I would expect to access the home page from anywhere within the site
3. The Header will contain Home link and search input type.
    As a user I would expect to see the Home link and search input type on the header
4. Search input - 
    As a user I would like to be able to find all the drinks containing said ingredient. The search is only on one ingredient at a time.

Search Page
1. Results of search funtion -
    As a user I expect to see the results for the ingredient I searched for displayed on the gallery page

Gallery page - Alcoholic drink link
1. Results of alcoholic drink link click
    As a user I expect to see the results for the alcoholic drinks displayed on the gallery page

Gallery Page - Non-alcoholic drink link
1. Results of non-alcoholic drink link click
    As a user I expect to see the results for the non-alcoholic drinks displayed on the gallery page

Recipe page
1. Link click of gallery item - leads to recipe page
    As a user I expect to see the drink ingredients, their measurements and recipe creation steps on drink recipe page that displays when the user clicks on gallery item

                
Components
Header (app) - Search box, (Home link)

    (/)     Homepage (app)
            links 1st , change to buttons after functioning
            (App) - state - <Type of bev> , <ingredients> 
                    - State - Recipe of app            
            Click of link will do a API call and store the results in the state of App
            All method calls to webservices will lie in app class
        

(/gallery)      Picture Gallery of thumbnails (/homepage)(Homepage) - the props for alo and non-alcohol will be passed
                On click of gallery image - one more API call - the method will be in App - the state will updated in App
                
                Picture Gallery of thumbnails (/search)(Search) - the props for search will be passed

(/recipe/:id)   Drink Recipe (/homepage/gallery) (refactor futher components later)


Picturegallery ()    




