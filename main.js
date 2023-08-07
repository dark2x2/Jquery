$(document).ready(function() {
    const taskNameInput = $("#task-name");
    const taskList = $("#task-list");
    
    $("#task-form").submit(function(e) {
        e.preventDefault();
        const taskName = taskNameInput.val().trim();
        
    if (taskName !== "") {
        const taskItem = $("<li>").text(taskName);
        
        taskItem.click(function() {
        $(this).toggleClass("completed");
        });
        
        taskList.append(taskItem);
        taskNameInput.val("");
        }
    });
});