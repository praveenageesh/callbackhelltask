// Define the countdown function with callbacks
function countdown(start, end, onCount) {
    if (start >= end) {
        onCount(start, function() {
            countdown(start - 1, end, onCount);
        });
    }
}

// Call the countdown function with initial values and callbacks
countdown(10, 1, function(number, next) {
    // Display the countdown number
    console.log(number);
    // Wait for 1 second (1000 milliseconds)
    setTimeout(function() {
        // Clear the console for the next countdown number
        console.clear();
        // Call the next countdown number or display the message after 1 second
        next();
    }, 1000);
});

// After countdown, display Happy Independence Day
setTimeout(function() {
    console.log("Happy Independence Day");
}, 11000);
