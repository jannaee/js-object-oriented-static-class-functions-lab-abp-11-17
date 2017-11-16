'use strict';
class Question {////steps are in the order of building out the program Define using class syntax
  constructor(content) {
    this.content = content //step 1. building the class that takes in the content
    this.save() //Step 6. that essentially says 'okay question everytime you are born set your property of content and save yourself.'
    //saves the question into _All property every time this object is born
  }
//Pro tip if the function doesnt have the word static then you are in an instance function
  save(){//step 4. Purpose is to push the instance
    this.constructor._All.push(this) //Step 5. adds the instance into the _All property
  }

  static All(){//step 3. build a class reader which is a function onto itself and not the instnaces (aka static function)
    return this._All; //returns the array. also protects the array by making a copy of it and not destroying it
  }

  static Find(id){//preparing us to query a database. pulling out info by primary key
    return this.All()[id-1]
  }
}

Question._All = [] //step 2. Building the class property to store all questions



//user Question ("What\'s your favorite food?") //as soon as we brought this Question to life it was automatically saved, which is why we need to do a two step process like below
// let userQuestion = new Question ("What\'s your favorite food?")
// userQuestion.save()
