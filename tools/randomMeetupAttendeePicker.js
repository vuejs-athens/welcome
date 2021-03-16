// Run this from your browser console 
// on your meetup event attendees page 
(function () {
    // Query document for attendees 
    // and select a random one
    const attendees = document.querySelector('.attendees-list').children,
        randomIndex = Math.floor(Math.random() * attendees.length)
        attendee = attendees[randomIndex],
        name = attendee.querySelector('h4').innerHTML;
    
    // Remove attendee so they can 
    // only be selected once
    attendee.parentNode.removeChild(attendee);
    
    return name;
})();
