# -*- coding: utf-8 -*-
"""
Created on Wed Oct 16 11:16:20 2019

@author: tangu
"""

import requests
import json


########################  HARVEST DATA ONLINE AND SAVE THEM IN JSON  ########################

def harvest_recipes() :

    r = requests.get("https://www.food2fork.com/api/search?key=91d2b2b099e5b421ee30ce2eeb65b270") 
    
    data = r.json()
    
    with open('harvestedRecipes.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)


########################  LOAD DATA FROM JSON FILE  ########################
        
def build_recipes() :

    with open('harvestedRecipes.json','r') as json_file:
        data = json.load(json_file)
    
    recipes = data['recipes']
    
    final_data = []
    
    for recipe in recipes :
        recipe_id= recipe['recipe_id']
        
        url = 'https://www.food2fork.com/api/get?key=91d2b2b099e5b421ee30ce2eeb65b270&rId='+recipe_id
        
        r = requests.get(url)
        
        current_data = r.json()
        
        final_data.append(current_data)
    
    with open('recipesWithIngredientsList.json','w',encoding='utf-8') as f :
        json.dump(final_data,f,ensure_ascii=False,indent=4)


