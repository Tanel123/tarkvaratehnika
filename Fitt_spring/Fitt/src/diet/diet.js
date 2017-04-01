import {HttpClient, json} from 'aurelia-fetch-client'

export class diet{
    userData = {}
    
    addDiet(){
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/diet/add', {
            'method': "POST",
            'body': json(this.userData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis " + data.foodName);
        });
    }

    activate(){
        
        let client = new HttpClient();
        
        client.fetch("http://localhost:8080/diet/'username'")
            .then(response => response.json())
            .then(diets => this.dietsList = diets);

        
    }
}