homework = [
    { "day" : 1,
      "description": "Command Line",
      "completed": False, 
      "time_taken": 20 },
    { "day" : 2, 
      "description": "Loops",
      "completed": False, 
      "time_taken": 90 },
    { "day" : 3, 
      "description": "Functions", 
      "completed": True, 
      "time_taken": 120 },
    { "day" : 4, 
      "description": "Conditionals", 
      "completed": False, 
      "time_taken": 50 },
    { "day" : 5,
      "description": "Collections",
      "completed": True,
      "time_taken": 60 },
]


time = input("Time taken to complete: ")

def time_taken_to_complete(given_list,time):
    new_list =[]
    for task in given_list:
      if task['time_taken'] >= int(time):
          new_list.append(task)
    return new_list

print(time_taken_to_complete(homework,time))

